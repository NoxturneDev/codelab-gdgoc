package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strconv"

	"github.com/gorilla/mux"
)

type SessionMeta struct {
	Name        string     `json:"name"`
	Slug        string     `json:"slug"`
	Description string     `json:"description"`
	TotalSteps  int        `json:"totalSteps"`
	Steps       []StepMeta `json:"steps"`
}

type StepMeta struct {
	Number int    `json:"number"`
	Title  string `json:"title"`
	File   string `json:"file"`
}

type SessionResponse struct {
	Title       string     `json:"title"`
	Description string     `json:"description"`
	Steps       []StepInfo `json:"steps"`
}

type StepInfo struct {
	Title string `json:"title"`
}

type StepContentResponse struct {
	Content string `json:"content"`
}

type ErrorResponse struct {
	Error string `json:"error"`
}

func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		next.ServeHTTP(w, r)
	})
}

func getSessionHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	sessionName := vars["sessionName"]

	// Read meta.json
	metaPath := filepath.Join("data", "sessions", sessionName, "meta.json")
	metaData, err := os.ReadFile(metaPath)
	if err != nil {
		w.WriteHeader(http.StatusNotFound)
		json.NewEncoder(w).Encode(ErrorResponse{Error: "Session not found"})
		return
	}

	var meta SessionMeta
	if err := json.Unmarshal(metaData, &meta); err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(ErrorResponse{Error: "Failed to parse session metadata"})
		return
	}

	// Build response
	response := SessionResponse{
		Title:       meta.Name,
		Description: meta.Description,
		Steps:       make([]StepInfo, len(meta.Steps)),
	}

	for i, step := range meta.Steps {
		response.Steps[i] = StepInfo{
			Title: step.Title,
		}
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

func getStepContentHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	sessionName := vars["sessionName"]
	stepNumberStr := vars["stepNumber"]

	log.Println("TEST");
	log.Println(sessionName);
	stepNumber, err := strconv.Atoi(stepNumberStr)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(ErrorResponse{Error: "Invalid step number"})
		return
	}

	// Read meta.json to get file name
	metaPath := filepath.Join("data", "sessions", sessionName, "meta.json")
	metaData, err := os.ReadFile(metaPath)
	if err != nil {
		w.WriteHeader(http.StatusNotFound)
		json.NewEncoder(w).Encode(ErrorResponse{Error: "Session not found"})
		return
	}

	var meta SessionMeta
	if err := json.Unmarshal(metaData, &meta); err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(ErrorResponse{Error: "Failed to parse session metadata"})
		return
	}

	// Validate step number
	if stepNumber < 1 || stepNumber > len(meta.Steps) {
		w.WriteHeader(http.StatusNotFound)
		json.NewEncoder(w).Encode(ErrorResponse{Error: "Step not found"})
		return
	}

	// Get the step file name
	stepFile := meta.Steps[stepNumber-1].File
	stepPath := filepath.Join("data", "sessions", sessionName, "steps", stepFile)

	// Read markdown content
	content, err := os.ReadFile(stepPath)
	if err != nil {
		w.WriteHeader(http.StatusNotFound)
		json.NewEncoder(w).Encode(ErrorResponse{Error: "Step content not found"})
		return
	}

	response := StepContentResponse{
		Content: string(content),
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

func listSessionsHandler(w http.ResponseWriter, r *http.Request) {
	sessionsPath := filepath.Join("data", "sessions")
	entries, err := os.ReadDir(sessionsPath)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(ErrorResponse{Error: "Failed to read sessions"})
		return
	}

	var sessions []map[string]string
	for _, entry := range entries {
		if entry.IsDir() {
			metaPath := filepath.Join(sessionsPath, entry.Name(), "meta.json")
			metaData, err := os.ReadFile(metaPath)
			if err != nil {
				continue
			}

			var meta SessionMeta
			if err := json.Unmarshal(metaData, &meta); err != nil {
				continue
			}

			sessions = append(sessions, map[string]string{
				"slug":        meta.Slug,
				"name":        meta.Name,
				"description": meta.Description,
			})
		}
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(sessions)
}

func healthCheckHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
}

func main() {
	r := mux.NewRouter()

	// API routes
	api := r.PathPrefix("/api").Subrouter()
	api.HandleFunc("/health", healthCheckHandler).Methods("GET")
	api.HandleFunc("/sessions", listSessionsHandler).Methods("GET")
	api.HandleFunc("/sessions/{sessionName}", getSessionHandler).Methods("GET")
	api.HandleFunc("/sessions/{sessionName}/steps/{stepNumber}", getStepContentHandler).Methods("GET")

	// Apply CORS middleware
	handler := corsMiddleware(r)

	// Get port from environment or use default
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	// Start server
	addr := fmt.Sprintf(":%s", port)
	log.Printf("Server starting on %s", addr)
	log.Printf("Data directory: %s", filepath.Join("data", "sessions"))
	
	// Check if data directory exists
	if _, err := os.Stat(filepath.Join("data", "sessions")); os.IsNotExist(err) {
		log.Println("Warning: data/sessions directory does not exist")
	}

	if err := http.ListenAndServe(addr, handler); err != nil {
		log.Fatal(err)
	}
}
