import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import { Code, Pre } from "@/components/MarkdownComponents"
import { useState, useEffect } from "react"
import { API_ENDPOINTS } from "@/config/api"
import axios from "axios"
import "highlight.js/styles/github-dark.css"

export default function MarkdownViewer({ steps, sessionName }) {
  const [content, setContent] = useState(null)

  const getSessionContent = async () => {
    try {
      const response = await axios.get(API_ENDPOINTS.sessionSteps(sessionName, steps))

      setContent(response.data.content)
      console.log(response.data.content)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getSessionContent()
  }, [steps])

  return (
    <article className="markdown">
      <ReactMarkdown
        rehypePlugins={[rehypeHighlight]}
        components={{
          code: Code,
          pre: Pre,
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  )
}

