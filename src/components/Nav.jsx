import { useEffect, useRef, useState } from 'react'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#formacao', label: 'Formação' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const linksRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 25)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = ['sobre', 'experiencia', 'projetos', 'formacao', 'cursos', 'contato']
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    const navItems = [...linksRef.current.querySelectorAll('a[href]')]
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          navItems.forEach((a) => a.classList.remove('active'))
          const a = linksRef.current.querySelector(`a[href="#${entry.target.id}"]`)
          if (a) a.classList.add('active')
        })
      },
      { threshold: 0.3 }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="wrap nav-in">
        <a className="brand" href="#inicio">
          <span className="brand-mark"><span>JB</span></span>
          Julia Bongiovani
        </a>
        <button className="menu" onClick={() => setOpen((o) => !o)} aria-label="Abrir menu">☰</button>
        <div className={`nav-links${open ? ' open' : ''}`} ref={linksRef}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#contato" className="nav-talk" onClick={() => setOpen(false)}>Vamos conversar ↗</a>
        </div>
      </div>
    </nav>
  )
}
