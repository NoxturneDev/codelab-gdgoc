"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function HomePage() {
  const [sessionName, setSessionName] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (sessionName.trim()) {
      navigate(`/${sessionName.trim()}`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Card className="bg-slate-800 border-slate-700 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">CodeLabs</h1>
            <p className="text-slate-400">Interactive learning experiences</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-200 mb-2">Session Name or Token</label>
              <Input
                type="text"
                placeholder="e.g., react-fundamentals"
                value={sessionName}
                onChange={(e) => setSessionName(e.target.value)}
                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-500"
              />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
              Enter Session
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-700">
            <p className="text-xs text-slate-500 text-center">
              Try: <code className="bg-slate-900 px-2 py-1 rounded text-slate-300">react-fundamentals</code>
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
