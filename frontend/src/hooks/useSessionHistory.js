import { useState, useEffect } from "react"

const STORAGE_KEY = "codelab-session-history"
const MAX_HISTORY_ITEMS = 8

export function useSessionHistory() {
  const [history, setHistory] = useState([])

  // Load history from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        setHistory(JSON.parse(stored))
      }
    } catch (error) {
      console.error("Failed to load session history:", error)
    }
  }, [])

  // Add a session to history
  const addToHistory = (sessionName, sessionTitle = null) => {
    try {
      const newEntry = {
        name: sessionName,
        title: sessionTitle || sessionName,
        timestamp: Date.now(),
      }

      setHistory((prev) => {
        // Remove duplicates and add new entry at the start
        const filtered = prev.filter((item) => item.name !== sessionName)
        const updated = [newEntry, ...filtered].slice(0, MAX_HISTORY_ITEMS)

        // Save to localStorage
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))

        return updated
      })
    } catch (error) {
      console.error("Failed to save session history:", error)
    }
  }

  // Clear all history
  const clearHistory = () => {
    try {
      localStorage.removeItem(STORAGE_KEY)
      setHistory([])
    } catch (error) {
      console.error("Failed to clear session history:", error)
    }
  }

  // Remove a specific session from history
  const removeFromHistory = (sessionName) => {
    try {
      setHistory((prev) => {
        const updated = prev.filter((item) => item.name !== sessionName)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
        return updated
      })
    } catch (error) {
      console.error("Failed to remove from session history:", error)
    }
  }

  return {
    history,
    addToHistory,
    clearHistory,
    removeFromHistory,
  }
}
