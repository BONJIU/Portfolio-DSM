export default function Experience() {
  return (
    <section className="experience" id="experiencia">
      <div className="exp-orb"></div>
      <div className="wrap experience-inner">
        <div className="kicker light">04 · Experiência</div>
        <h2>Onde a teoria encontra o <em>desafios reais.</em></h2>
        <p className="exp-intro">
          Projetos reais mudam a forma de pensar. Cada desafio traz uma nova camada de aprendizado,
          responsabilidade e repertório que não existe do mesmo jeito quando estamos apenas estudando.
        </p>

        <div className="exp-list">
          <article className="exp reveal">
            <div className="exp-date">2025 — atual</div>
            <div>
              <h3>Riverkan</h3>
              <div className="exp-role">Desenvolvedora Full Stack Júnior</div>
              <p>
                Desenvolvimento e manutenção de soluções web e mobile, criação e refinamento de interfaces,
                prototipação, integração frontend/backend, criação de plataformas como CRM e soluções para logística
                de empresas, além da participação em processos de publicação de aplicativos.
              </p>
            </div>
            <div className="exp-side">
              <b>tecnologias</b><br />
              React · JavaScript · CSS · C# · .NET · SQL · PostgreSQL · React Native · Expo · Figma · WordPress
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
