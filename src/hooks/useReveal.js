import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const els = [...document.querySelectorAll('.reveal')]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = '1'
            e.target.style.transform = 'translateY(0)'
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px' }
    )

    els.forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(48px)'
      el.style.transition =
        'opacity .95s cubic-bezier(.22,1,.36,1), transform .95s cubic-bezier(.22,1,.36,1)'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}
