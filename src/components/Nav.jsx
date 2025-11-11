import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  const linkBase = 'text-sm tracking-wide uppercase text-gray-900 hover:text-black transition-colors'
  const active = ({ isActive }) => `${linkBase} ${isActive ? 'text-black' : 'text-gray-500'}`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold tracking-widest uppercase text-gray-900">Ihsan Fauzi</Link>
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={active}>Home</NavLink>
            <NavLink to="/portfolio" className={active}>Portfolio</NavLink>
            <NavLink to="/about" className={active}>About</NavLink>
            <NavLink to="/contact" className={active}>Contact</NavLink>
          </nav>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            <Menu size={20} />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/90 backdrop-blur">
          <div className="px-4 py-3 flex flex-col gap-3">
            <NavLink onClick={() => setOpen(false)} to="/" className={active}>Home</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/portfolio" className={active}>Portfolio</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/about" className={active}>About</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contact" className={active}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
