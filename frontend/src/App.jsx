import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SessionPage from "./pages/SessionPage"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:sessionName" element={<SessionPage />} />
      </Routes>
    </Router>
  )
}
