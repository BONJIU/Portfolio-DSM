const langs = [
  { name: 'Português', width: '100%', level: 'nativo' },
  { name: 'Inglês', width: '35%', level: 'básico' },
  { name: 'Espanhol', width: '68%', level: 'intermediário' },
]

export default function Final() {
  return (
    <section className="final">
      <div className="wrap final-grid">
        <div className="reveal">
          <div className="kicker light">08 · idiomas</div>
          <h2>linguagem também é <em>interface.</em></h2>

          <div className="lang-list">
            {langs.map((l) => (
              <div className="lang" key={l.name}>
                <strong>{l.name}</strong>
                <div className="lang-bar"><span style={{ width: l.width }}></span></div>
                <small>{l.level}</small>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-box reveal" id="contato">
          <div>
            <div className="kicker">09 · contato</div>
            <h3>vamos criar<br />alguma coisa?</h3>
            <p>
              Código, design, produto, ideias ou uma oportunidade profissional.
            </p>
          </div>
          <div className="contact-links">
            <a href="mailto:santos.bongiovani@gmail.com">e-mail ↗</a>
            <a href="https://github.com/BONJIU" target="_blank" rel="noopener">github ↗</a>
            <a href="https://www.linkedin.com/in/julia-santos-bongiovani-de-oliveira-614516171?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener">linkedin ↗</a>
          </div>
        </div>
      </div>
    </section>
  )
}
