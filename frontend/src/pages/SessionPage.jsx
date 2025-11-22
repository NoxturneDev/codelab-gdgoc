"use client"

import { useState, useMemo, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import Sidebar from "@/components/Sidebar"
import TopBar from "@/components/Topbar"
import MarkdownViewer from "@/components/MarkdownViewer"
import axios from "axios";

export default function SessionPage() {
  const { sessionName } = useParams()
  const navigate = useNavigate()
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [sessionData, setSessionData] = useState(null);

  const getSessionData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/sessions/' + sessionName);
      console.log(sessionName);

      setSessionData(response.data);
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getSessionData();
  }, [])

  if (!sessionData) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Session not found</h1>
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="border-slate-600 text-slate-200 hover:bg-slate-800"
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
    <div className="h-screen flex flex-col bg-slate-900">
      <TopBar sessionTitle={sessionData.title} onBack={() => navigate("/")} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar steps={sessionData.steps} currentStepIndex={currentStepIndex} onSelectStep={setCurrentStepIndex} />

        <main className="flex-1 overflow-auto flex flex-col">
          <div className="flex-1 p-8 overflow-auto">
            <MarkdownViewer steps={currentStepIndex + 1} sessionName={sessionName} />
          </div>

          <div className="bg-slate-800 border-t border-slate-700 p-6 flex justify-between items-center">
            <Button
              onClick={handlePrevious}
              disabled={currentStepIndex === 0}
              variant="outline"
              className="border-slate-600 text-slate-200 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed bg-transparent"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            <div className="text-sm text-slate-400">
              Step {currentStepIndex + 1} of {sessionData.steps.length}
            </div>

            <Button
              onClick={handleNext}
              disabled={currentStepIndex === sessionData.steps.length - 1}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </main>
      </div>
    </div>
  )
}
