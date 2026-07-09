import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50)
  }
  window.addEventListener("scroll", handleScroll)
  return () => window.removeEventListener("scroll", handleScroll)
}, [])

  return (
    <nav className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
  scrolled? "text-white" : "text-gray-600"} 
    ? "bg-black/80 backdrop-blur-md border-white/10" 
    : "bg-white border-gray-200"
}`} >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo + identité */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 text-sm font-bold text-white shadow-lg shadow-indigo-500/20">
            HB
          </div>

          <div className="flex flex-col leading-tight">
            <span className="font-semibold ">Hawa Bah</span>
            <span className="text-xs text-gray-400">Développeuse & Chef de projet junior</span>
          </div>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-500 font-semibold">
          <li>
            <Link to="/" className="transition hover:text-white">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/presentation" className="transition hover:text-white">
              Présentation
            </Link>
          </li>
          <li>
            <Link to="/competences" className="transition hover:text-white">
              Compétences
            </Link>
          </li>
          <li>
            <Link to="/realisations" className="transition hover:text-white">
              Réalisations
            </Link>
          </li>
          <li>
            <Link to="/parcours" className="transition hover:text-white">
              Parcours
            </Link>
          </li>
          <li>
            <Link to="/contact" className="transition hover:text-white">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar