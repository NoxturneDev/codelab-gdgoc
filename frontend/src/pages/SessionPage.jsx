"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import Sidebar from "@/components/Sidebar"
import TopBar from "@/components/Topbar"
import MarkdownViewer from "@/components/MarkdownViewer"
import { useSessionHistory } from "@/hooks/useSessionHistory"
import { API_ENDPOINTS } from "@/config/api"
import axios from "axios"

export default function SessionPage() {
  const { sessionName } = useParams()
  const navigate = useNavigate()
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [sessionData, setSessionData] = useState(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { addToHistory } = useSessionHistory()

  const getSessionData = async () => {
    try {
      const response = await axios.get(API_ENDPOINTS.sessions(sessionName))
      console.log(sessionName)

      setSessionData(response.data)

      // Save to history with the actual session title
      if (response.data?.title) {
        addToHistory(sessionName, response.data.title)
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getSessionData();
    document.title = sessionName;
  }, [])

  if (!sessionData) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4">Session not found</h1>
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    )
  }

  const currentStep = sessionData.steps[currentStepIndex]

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentStepIndex < sessionData.steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1)
    }
  }

  return (
    <div className="h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <TopBar
        sessionTitle={sessionData.title}
        onBack={() => navigate("/")}
        onToggleSidebar={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          steps={sessionData.steps}
          currentStepIndex={currentStepIndex}
          onSelectStep={setCurrentStepIndex}
          isOpen={isSidebarOpen}
          onToggle={setIsSidebarOpen}
        />

        <main className="flex-1 overflow-auto flex flex-col">
          <div className="flex-1 p-4 md:p-8 overflow-auto bg-white dark:bg-background-dark">
            <MarkdownViewer steps={currentStepIndex + 1} sessionName={sessionName} />
          </div>

          <div className="bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-700 p-4 md:p-6 flex justify-between items-center gap-2">
            <Button
              onClick={handlePrevious}
              disabled={currentStepIndex === 0}
              variant="outline"
              size="sm"
              className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed bg-transparent"
            >
              <ChevronLeft className="w-4 h-4 md:mr-2" />
              <span className="hidden md:inline">Previous</span>
            </Button>

            <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
              {currentStepIndex + 1}/{sessionData.steps.length}
            </div>

            <Button
              onClick={handleNext}
              disabled={currentStepIndex === sessionData.steps.length - 1}
              size="sm"
              className="bg-google-blue hover:opacity-90 transition-opacity text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="hidden md:inline">Next</span>
              <ChevronRight className="w-4 h-4 md:ml-2" />
            </Button>
          </div>
        </main>
      </div>
    </div>
  )
}
