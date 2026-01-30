"use client"

import { cn } from "@/lib/utils"

export default function Sidebar({ steps, currentStepIndex, onSelectStep, isOpen, onToggle }) {
  const handleStepClick = (index) => {
    onSelectStep(index)
    if (window.innerWidth < 768) {
      onToggle(false)
    }
  }

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 md:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => onToggle(false)}
      />

      {/* Sidebar */}
      <aside
        className={cn(
          "bg-surface-light dark:bg-surface-dark border-r border-gray-200 dark:border-gray-700 overflow-auto transition-all duration-300 ease-in-out",
          "fixed inset-y-0 left-0 z-40 shadow-xl",
          "md:relative md:shadow-none",
          isOpen ? "w-64 translate-x-0" : "w-0 md:w-64 -translate-x-full md:translate-x-0"
        )}
      >
        <div className="p-4 w-64">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
              Steps
            </h2>
            {/* Mobile Close Icon */}
            <button
              onClick={() => onToggle(false)}
              className="md:hidden text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Close sidebar"
            >
              <XIcon className="w-5 h-5" />
            </button>
          </div>

          <nav className="space-y-1">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => handleStepClick(index)}
                className={cn(
                  "w-full text-left px-4 py-3 text-sm rounded-md transition-colors",
                  currentStepIndex === index
                    ? "bg-google-blue text-white font-medium"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100"
                )}
              >
                <div className="flex items-start gap-2">
                  <span className="font-semibold text-xs mt-0.5 min-w-max">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="line-clamp-2">{step.title}</span>
                </div>
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </>
  )
}

function XIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}
