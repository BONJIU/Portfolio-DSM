export default function Constellation() {
  return (
    <section className="constellation">
      <div className="wrap const-grid">
        <div className="const-copy reveal">
          <div className="kicker">03 · Meu universo técnico</div>
          <h2>Tudo conversa com alguma coisa.</h2>
          <p>
            Meu perfil não é uma linha reta. É uma rede: interface encontra experiência,
            backend encontra produto, dados encontram decisão e Figma encontra código.
          </p>
        </div>

        <div className="const-map reveal">
          <div className="linkline l1"></div><div className="linkline l2"></div><div className="linkline l3"></div>
          <div className="linkline l4"></div><div className="linkline l5"></div><div className="linkline l6"></div>
          <div className="const-center">FULL STACK<small>em construção</small></div>
          <div className="node n1">FRONTEND<small>React · CSS</small></div>
          <div className="node n2">BACKEND<small>C# · .NET</small></div>
          <div className="node n3">MOBILE<small>Expo · RN</small></div>
          <div className="node n4">DADOS<small>SQL · Postgres</small></div>
          <div className="node n5">UX / UI<small>Figma</small></div>
          <div className="node n6">DEVOPS<small>Docker · Cloud</small></div>
        </div>
      </div>
    </section>
  )
}
