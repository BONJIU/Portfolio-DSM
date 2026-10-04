import { useEffect, useRef } from 'react'

const phrase = 'Criar coisas que fazem sentido'

export default function ScrollyWord() {
  const wordRef = useRef(null)

  useEffect(() => {
    const el = wordRef.current
    const spans = [...el.querySelectorAll('span')]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const rect = entry.boundingClientRect
          const center = window.innerHeight * 0.52
          const distance = Math.abs(rect.top + rect.height / 2 - center)
          const threshold = Math.max(0, 1 - distance / (window.innerHeight * 0.65))
          spans.forEach((sp, i) => {
            const target = Math.min(1, Math.max(0, threshold - Math.abs(i - i) * 0.035))
            sp.classList.toggle('lit', target > 0.34)
          })
        })
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1] }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="scrolly-word">
      <div className="scrolly-word-bg"></div>
      <div className="word-wrap">
        <div className="word-small">02 · a ideia que move tudo</div>
        <div className="word" ref={wordRef} aria-label={phrase}>
          {phrase.split(' ').map((word, i) => (
            <span key={i} data-i={i}>{word}</span>
          ))}
        </div>
        <p className="word-note">
          Criar, para mim, é encontrar o ponto em que uma ideia ganha forma, intenção e significado.
          É transformar o que existe na cabeça em algo que outra pessoa consiga sentir, entender e usar.
        </p>
      </div>
    </section>
  )
}
