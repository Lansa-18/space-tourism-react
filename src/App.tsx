// import { BrowserRouter } from "react-router-dom"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Crew from "./pages/Crew"
import Destination from "./pages/Destination"
import Technology from "./pages/Technology"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Routes go here */}
        <Route index element={<Homepage />} />
        <Route path='destination' element={<Destination />} />
        <Route path='crew' element={<Crew />} />
        <Route path='technology' element={<Technology />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
