// import { BrowserRouter } from "react-router-dom"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Routes go here */}
        <Route index element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
