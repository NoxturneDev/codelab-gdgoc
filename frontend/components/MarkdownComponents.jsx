
export function Code({ inline, children, ...props }) {
  if (inline) {
    return (
      <code className="bg-slate-800 text-slate-100 px-1.5 py-0.5 rounded text-sm border border-slate-700" {...props}>
        {children}
      </code>
    )
  }
  return <code {...props}>{children}</code>
}

export function Pre({ children }) {
  return <pre className="bg-slate-800 border border-slate-700 rounded-lg p-4 overflow-x-auto">{children}</pre>
}
