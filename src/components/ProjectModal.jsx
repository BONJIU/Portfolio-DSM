import { useEffect } from 'react'
import { projects } from '../data/projects'

export default function ProjectModal({ projectKey, onClose }) {
  const project = projects.find((p) => p.key === projectKey)

  useEffect(() => {
    if (!project) return undefined
    document.body.classList.add('lock')
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('lock')
      document.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  return (
    <div
      className={`modal${project ? ' open' : ''}`}
      id="modal"
      onClick={(e) => {
        if (e.target.id === 'modal') onClose()
      }}
    >
      <div className="modal-box">
        <button className="close" onClick={onClose} aria-label="Fechar">×</button>
        {project && (
          <>
            <div className="kicker">{project.kicker}</div>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="modal-tags">
              {project.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <p className="modal-role"><b style={{ color: 'var(--blue)' }}>Minha participação:</b><br /><span>{project.role}</span></p>
            <a className="btn main" href={project.repo} target="_blank" rel="noopener">abrir GitHub ↗</a>
          </>
        )}
      </div>
    </div>
  )
}
