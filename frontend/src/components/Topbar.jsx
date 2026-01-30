"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Menu } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"

export default function TopBar({ sessionTitle, onBack, onToggleSidebar, isSidebarOpen }) {
  return (
    <div className="bg-white dark:bg-surface-dark border-b border-gray-200 dark:border-gray-700 px-4 md:px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2 md:gap-4">
        {/* Sidebar Toggle Button */}
        <Button
          onClick={() => onToggleSidebar(!isSidebarOpen)}
          variant="ghost"
          size="sm"
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:hidden"
          aria-label="Toggle sidebar"
        >
          <Menu className="w-5 h-5" />
        </Button>

        {/* Back Button */}
        <Button
          onClick={onBack}
          variant="ghost"
          size="sm"
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <ArrowLeft className="w-4 h-4" />
        </Button>

        {/* Title */}
        <h1 className="text-base md:text-lg font-semibold text-text-light dark:text-text-dark truncate">
          {sessionTitle}
        </h1>
      </div>

      {/* Theme Toggle */}
      <ThemeToggle />
    </div>
  )
}
