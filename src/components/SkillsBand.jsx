const skills = [
  'React', 'JavaScript', 'HTML', 'CSS', 'C#', '.NET',
  'REST APIs', 'Entity Framework', 'SQL', 'PostgreSQL', 'MongoDB', 'React Native',
  'Expo', 'Figma', 'Git', 'GitHub', 'Docker', 'Google Cloud',
  'WordPress', 'Elementor', 'Postman',
]

export default function SkillsBand() {
  return (
    <section className="skills-band">
      <div className="wrap">
        <div className="skills-head reveal">
          <div>
            <div className="kicker">06 · Ferramentas</div>
            <h2>Uma caixa de ferramentas <em>em expansão.</em></h2>
          </div>
          <p>
            Cada tecnologia que aparece aqui representa horas de estudo, prática, erros e tentativas que,
            aos poucos, deixaram de ser novidade e viraram repertório.
          </p>
        </div>
        <div className="skill-cloud reveal">
          {skills.map((s) => (
            <span className="skill" key={s}>{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
