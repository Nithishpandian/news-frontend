import { Route, Routes } from "react-router-dom"
import NavbarLayout from "./components/common/NavbarLayout"
import Home from "./pages/home/Index"
import Business from "./pages/business/Index"
import Entertainment from "./pages/Entertainment/Index"
import Health from "./pages/health/Index"
import Science from "./pages/science/Index"
import Sports from "./pages/sports/Index"
import Technology from "./pages/technology/Index"

function App() {

  return (
      <NavbarLayout>
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/business" element={<Business/>}/>
         <Route path="/entertainment" element={<Entertainment/>}/>
         <Route path="/health" element={<Health/>}/>
         <Route path="/science" element={<Science/>}/>
         <Route path="/sports" element={<Sports/>}/>
         <Route path="/technology" element={<Technology/>}/>
        </Routes> 
      </NavbarLayout>
  )
}

export default App
