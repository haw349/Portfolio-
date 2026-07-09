import { Routes, Route } from"react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Competences from "./pages/Competences"
import Contact from "./pages/Contact"
import Parcours from "./pages/Parcours"
import Presentation from "./pages/Presentation"
import Realisations from "./pages/Realisations"
import CompetenceDetail from "./pages/CompetenceDetail"
import RealisationDetail from "./pages/RealisationDetail"




function App() {
  return (
   <div className="min-h-screen bg-white text-gray-900">

<Navbar />

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/competences" element={<Competences />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/parcours" element={<Parcours />} />
  <Route path="/presentation" element={<Presentation />} />
  <Route path="/realisations" element={<Realisations />} />
  <Route path="/competences/:slug" element={<CompetenceDetail />} />
  <Route path="/realisation/:slug" element={<RealisationDetail />} />
  
</Routes>

     
    </div>
  )
}

export default App