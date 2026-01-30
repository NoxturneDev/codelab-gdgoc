// API Configuration
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080'

// API Endpoints
export const API_ENDPOINTS = {
  sessions: (sessionName) => `${API_URL}/api/sessions/${sessionName}`,
  sessionSteps: (sessionName, step) => `${API_URL}/api/sessions/${sessionName}/steps/${step}`,
}
