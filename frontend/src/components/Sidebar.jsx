"use client"

import { cn } from "@/lib/utils"

export default function Sidebar({ steps, currentStepIndex, onSelectStep }) {
  return (
    <aside className="w-64 bg-slate-800 border-r border-slate-700 overflow-auto">
      <div className="p-4">
        <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wide mb-4">Steps</h2>
        <nav className="space-y-1">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => onSelectStep(index)}
              className={cn(
                "w-full text-left px-4 py-3 text-sm rounded-md transition-colors",
                currentStepIndex === index
                  ? "bg-blue-600 text-white font-medium"
                  : "text-slate-300 hover:bg-slate-700 hover:text-slate-100",
              )}
            >
              <div className="flex items-start gap-2">
                <span className="font-semibold text-xs mt-0.5 min-w-max">{String(index + 1).padStart(2, "0")}</span>
                <span className="line-clamp-2">{step.title}</span>
              </div>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  )
}
