import LoginPage from "./Pages/LoginPage"
import DashboardComponent from "./Components/DashboardComponent"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
