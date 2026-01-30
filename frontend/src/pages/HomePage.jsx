"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ThemeToggle } from "@/components/ThemeToggle"
import { useSessionHistory } from "@/hooks/useSessionHistory"
import { Clock, X } from "lucide-react"

export default function HomePage() {
  const [sessionName, setSessionName] = useState("")
  const navigate = useNavigate()
  const { history, addToHistory, clearHistory, removeFromHistory } = useSessionHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (sessionName.trim()) {
      const trimmedName = sessionName.trim()
      addToHistory(trimmedName)
      navigate(`/${trimmedName}`)
    }
  }

  const handleHistoryClick = (name) => {
    addToHistory(name)
    navigate(`/${name}`)
  }

  const handleRemoveFromHistory = (e, name) => {
    e.stopPropagation()
    removeFromHistory(name)
  }

  const formatTimestamp = (timestamp) => {
    const now = Date.now()
    const diff = now - timestamp
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)

    if (minutes < 1) return "Just now"
    if (minutes < 60) return `${minutes}m ago`
    if (hours < 24) return `${hours}h ago`
    if (days < 7) return `${days}d ago`
    return new Date(timestamp).toLocaleDateString()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-surface-light to-gray-100 dark:from-background-dark dark:via-surface-dark dark:to-background-dark flex items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="max-w-md w-full">
        <Card className="bg-white dark:bg-surface-dark border-gray-200 dark:border-gray-700 p-8 shadow-lg">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-text-light dark:text-text-dark mb-2">
              <span className="text-google-blue">Code</span>
              <span className="text-google-red">L</span>
              <span className="text-google-yellow">a</span>
              <span className="text-google-blue">b</span>
              <span className="text-google-green">s</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Interactive learning experiences</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Session Name or Token
              </label>
              <Input
                type="text"
                placeholder="e.g., react-fundamentals"
                value={sessionName}
                onChange={(e) => setSessionName(e.target.value)}
                className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-google-blue hover:opacity-90 transition-opacity text-white"
              size="lg"
            >
              Enter Session
            </Button>
          </form>

          {/* Session History */}
          {history.length > 0 && (
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Recent Sessions
                </h3>
                <button
                  onClick={clearHistory}
                  className="text-xs text-gray-500 dark:text-gray-400 hover:text-google-red dark:hover:text-google-red transition-colors"
                >
                  Clear all
                </button>
              </div>

              <div className="space-y-2 max-h-64 overflow-y-auto">
                {history.map((session) => (
                  <button
                    key={session.name}
                    onClick={() => handleHistoryClick(session.name)}
                    className="w-full flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group text-left"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                        {session.title}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {formatTimestamp(session.timestamp)}
                      </p>
                    </div>
                    <button
                      onClick={(e) => handleRemoveFromHistory(e, session.name)}
                      className="ml-2 p-1 rounded-md opacity-0 group-hover:opacity-100 hover:bg-gray-200 dark:hover:bg-gray-600 transition-opacity"
                      aria-label="Remove from history"
                    >
                      <X className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </button>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Example session hint (only show if no history) */}
          {history.length === 0 && (
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                Try: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-700 dark:text-gray-300">react-fundamentals</code>
              </p>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
