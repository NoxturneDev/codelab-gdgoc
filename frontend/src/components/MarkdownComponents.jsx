import { useState, useRef } from "react"
import { Check, Copy } from "lucide-react"

export function Code({ inline, children, ...props }) {
  if (inline) {
    return (
      <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm border border-gray-200 dark:border-gray-700" {...props}>
        {children}
      </code>
    )
  }
  return <code {...props}>{children}</code>
}

export function Pre({ children }) {
  const [copied, setCopied] = useState(false)
  const preRef = useRef(null)

  const handleCopy = () => {
    const text = preRef.current?.textContent || ""
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-1.5 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 opacity-0 group-hover:opacity-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
        aria-label="Copy to clipboard"
      >
        {copied ? (
          <Check className="w-4 h-4 text-google-green" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </button>
      <pre
        ref={preRef}
        className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 pr-10 overflow-x-auto"
      >
        {children}
      </pre>
    </div>
  )
}
