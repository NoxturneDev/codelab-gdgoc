"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function TopBar({ sessionTitle, onBack }) {
  return (
    <div className="bg-slate-800 border-b border-slate-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Button
          onClick={onBack}
          variant="ghost"
          size="sm"
          className="text-slate-400 hover:text-slate-200 hover:bg-slate-700"
        >
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <h1 className="text-lg font-semibold text-white">{sessionTitle}</h1>
      </div>
    </div>
  )
}
