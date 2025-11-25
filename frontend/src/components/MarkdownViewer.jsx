import ReactMarkdown from "react-markdown"
import { Code, Pre } from "@/components/MarkdownComponents"
import { useState, useEffect } from "react";
import axios from "axios";

export default function MarkdownViewer({ steps, sessionName }) {
  const [content, setContent] = useState(null);

  const getSessionContent = async () => {
    try {
      const response = await axios.get('https://codelab.noxturne.my.id/api/sessions/' + sessionName + '/steps/' + steps);

      setContent(response.data.content);
      console.log(response.data.content);
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getSessionContent();
  }, [steps])

  return (
    <article className="markdown text-white">
      <ReactMarkdown
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

