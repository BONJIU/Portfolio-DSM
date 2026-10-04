import { useEffect, useRef } from 'react'
import { projects } from '../data/projects'

export default function Projects({ onOpenProject }) {
  const stageRef = useRef(null)
  const bgRef = useRef(null)
  const progressRef = useRef(null)
  const cardsRef = useRef([])
  const dotsRef = useRef([])

  useEffect(() => {
    const stage = stageRef.current
    const cards = cardsRef.current
    const dots = dotsRef.current
    const bg = bgRef.current
    const progress = progressRef.current

    const updateProjects = () => {
      const rect = stage.getBoundingClientRect()
      const total = stage.offsetHeight - window.innerHeight
      const passed = Math.min(Math.max(-rect.top, 0), total)
      const p = total ? passed / total : 0
      const idx = Math.min(cards.length - 1, Math.floor(p * cards.length))

      cards.forEach((c, i) => c.classList.toggle('active', i === idx))
      dots.forEach((d, i) => d.classList.toggle('on', i === idx))
      progress.style.width = ((idx + 1) / cards.length) * 100 + '%'

      const current = cards[idx]
      if (current) bg.style.background = current.dataset.bg
    }

    window.addEventListener('scroll', updateProjects, { passive: true })
    window.addEventListener('resize', updateProjects)
    updateProjects()

    const tiltHandlers = cards.map((card) => {
      const device = card.querySelector('.mock-device')
      const onMove = (e) => {
        if (!device || !card.classList.contains('active')) return
        const r = card.getBoundingClientRect()
        const dx = (e.clientX - (r.left + r.width / 2)) / r.width
        const dy = (e.clientY - (r.top + r.height / 2)) / r.height
        device.style.transform = `rotate(${dx * 5 - 4}deg) translate(${dx * 5}px,${dy * 5}px)`
      }
      const onLeave = () => {
        if (device) device.style.transform = ''
      }
      card.addEventListener('mousemove', onMove)
      card.addEventListener('mouseleave', onLeave)
      return { card, onMove, onLeave }
    })

    return () => {
      window.removeEventListener('scroll', updateProjects)
      window.removeEventListener('resize', updateProjects)
      tiltHandlers.forEach(({ card, onMove, onLeave }) => {
        card.removeEventListener('mousemove', onMove)
        card.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  const scrollToProject = (i) => {
    const stage = stageRef.current
    const start = stage.offsetTop
    const h = stage.offsetHeight - window.innerHeight
    const target = start + h * (i / (projects.length - 1))
    window.scrollTo({ top: target, behavior: 'smooth' })
  }

  return (
    <section className="projects" id="projetos">
      <div className="project-head reveal">
        <div className="kicker">05 · Projetos selecionados</div>
        <h2>Não são só projetos.<br /><em>são pedaços do processo.</em></h2>
        <p>
          Cada projeto guarda um pedaço diferente da minha trajetória: uma descoberta, uma dificuldade,
          uma ideia que ganhou forma e um pouco mais de confiança para o próximo passo.
        </p>
      </div>

      <div className="project-stage" ref={stageRef}>
        <div className="project-sticky">
          <div className="project-bg" ref={bgRef}></div>

          <div className="project-canvas">
            {projects.map((p, i) => (
              <article
                key={p.key}
                className={`project-card ${p.cardClass}${i === 0 ? ' active' : ''}`}
                data-index={i}
                data-bg={p.bg}
                ref={(el) => (cardsRef.current[i] = el)}
              >
                <div className="pc-visual">
                  <div className="pc-copy">
                    <div className="pc-number">{p.number}</div>
                    <div className="pc-title">{p.title}</div>
                    <div className="pc-desc">{p.desc}</div>
                    <div className="pc-mini">{p.tags.join(' · ')}</div>
                    {p.external ? (
                      <a className="pc-cta" href={p.repo} target="_blank" rel="noopener">Em breve ↗</a>
                    ) : (
                      <a className="pc-cta" href="#" onClick={(e) => { e.preventDefault(); onOpenProject(p.key) }}>abrir case ↗</a>
                    )}
                  </div>
                  <div className="pc-shot">
                    <div className={`mock-device${p.image ? ' has-img' : ''}`}>
                      {p.image && <img src={p.image} alt={`Screenshot do projeto ${p.title}`} />}
                      <div className="mock-label">{p.mockLabel}</div>
                    </div>
                  </div>
                </div>
              </article>
            ))}

            <div className="project-index">
              {projects.map((p, i) => (
                <span
                  key={p.key}
                  className={`p-dot${i === 0 ? ' on' : ''}`}
                  title={`Projeto ${i + 1}`}
                  onClick={() => scrollToProject(i)}
                  ref={(el) => (dotsRef.current[i] = el)}
                ></span>
              ))}
            </div>
            <div className="project-progress" ref={progressRef}></div>
            <div className="project-hint">Continue rolando · o projeto muda</div>
          </div>
        </div>
      </div>

      <div className="explore-line">
        <span><b>scroll narrative</b> · 05 projetos · 01 trajetória</span>
        <span>05 / portfolio</span>
      </div>
    </section>
  )
}
