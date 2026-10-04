export default function Courses() {
  return (
    <section className="courses" id="formacao">
      <div className="wrap">
        <div className="kicker">07 · Formação + extensão</div>
        <h2>Aprendendo também <em>fora da sala.</em></h2>

        <div style={{ marginTop: '60px', borderTop: '1px solid var(--line)' }}>
          <div className="course reveal">
            <strong>Desenvolvimento de Software Multiplataforma</strong>
            <span>FATEC Zona Leste · início 2024.1</span>
            <small>6º sem. · conclusão 2026.2</small>
          </div>
          <div className="course reveal">
            <strong>Técnico em Eventos</strong>
            <span>ETEC Parque Belém</span>
            <small>2019 — 2021</small>
          </div>
        </div>
      </div>
    </section>
  )
}
