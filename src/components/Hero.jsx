import { useEffect, useRef } from 'react'
import juliaImg from '../assets/imagem-Julia.jpeg'

export default function Hero() {
  const sunRef = useRef(null)
  const orbRef = useRef(null)
  const frameRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const y = Math.min(window.scrollY, 900)
      if (sunRef.current) sunRef.current.style.transform = `translate3d(0,${y * 0.12}px,0)`
      if (orbRef.current) orbRef.current.style.transform = `translate3d(0,${-y * 0.05}px,0)`
      if (frameRef.current && window.scrollY < 1000) {
        frameRef.current.style.transform = `translate3d(0,${Math.min(y * 0.025, 24)}px,0) rotate(3deg)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero-mesh">
        <div className="orb o1" ref={sunRef}></div>
        <div className="orb o2" ref={orbRef}></div>
        <div className="orb o3"></div>
        <div className="hero-light" id="heroLight"></div>
      </div>

      <div className="wrap hero-grid">
        <div className="hero-copy reveal">
          <div className="kicker">portfolio · 2026</div>
          <h1>Julia <em>Bongiovani</em></h1>
          <p className="hero-lead">
            <strong>Desenvolvedora Full Stack Júnior</strong> que gosta de estar exatamente onde código,
            UX, interface e ideia começam a se misturar.
          </p>
          <div className="hero-actions">
            <a className="btn main magnetic" href="#projetos">Ver projetos ↘</a>
            <a className="btn ghost magnetic" href="https://github.com/BONJIU" target="_blank" rel="noopener">Github ↗</a>
          </div>
          <div className="hero-facts">
            <div><strong>FATEC Zona Leste</strong><span>6º semestre · 2026</span></div>
            <div><strong>Riverkan</strong><span>Full Stack Júnior</span></div>
            <div><strong>São Paulo</strong><span>Brasil</span></div>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="frame" ref={frameRef}>
            <div className="frame-main">
              <img className="frame-photo" src={juliaImg} alt="Julia Bongiovani" />
            </div>
            <div className="note"><small>sempre</small><strong>construindo<br />coisas.</strong></div>
            <div className="sticker">design<br />×<br />code</div>
            <div className="stack-float"><b>stack atual</b>React · C# · .NET · SQL</div>
          </div>
        </div>
      </div>
    </section>
  )
}
