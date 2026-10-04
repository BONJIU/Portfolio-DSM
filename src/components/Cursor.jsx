import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (!matchMedia('(pointer:fine)').matches) return undefined

    const dot = dotRef.current
    const ring = ringRef.current
    let mx = 0
    let my = 0
    let rx = 0
    let ry = 0
    let raf

    const onMouseMove = (e) => {
      mx = e.clientX
      my = e.clientY
      dot.style.left = mx + 'px'
      dot.style.top = my + 'px'
      const light = document.getElementById('heroLight')
      if (light) {
        light.style.left = mx + 'px'
        light.style.top = my + 'px'
      }
    }

    const cursorLoop = () => {
      rx += (mx - rx) * 0.15
      ry += (my - ry) * 0.15
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      raf = requestAnimationFrame(cursorLoop)
    }

    window.addEventListener('mousemove', onMouseMove)
    cursorLoop()

    const hoverEls = [...document.querySelectorAll('a,button,.node,.skill,.project-card')]
    const activate = () => document.body.classList.add('cursor-active')
    const deactivate = () => document.body.classList.remove('cursor-active')
    hoverEls.forEach((el) => {
      el.addEventListener('mouseenter', activate)
      el.addEventListener('mouseleave', deactivate)
    })

    const magneticEls = [...document.querySelectorAll('.magnetic')]
    const magneticMove = (el) => (e) => {
      const r = el.getBoundingClientRect()
      const dx = e.clientX - (r.left + r.width / 2)
      const dy = e.clientY - (r.top + r.height / 2)
      el.style.transform = `translate(${dx * 0.18}px,${dy * 0.18}px)`
    }
    const magneticLeave = (el) => () => {
      el.style.transform = ''
    }
    const magneticHandlers = magneticEls.map((el) => {
      const move = magneticMove(el)
      const leave = magneticLeave(el)
      el.addEventListener('mousemove', move)
      el.addEventListener('mouseleave', leave)
      return { el, move, leave }
    })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(raf)
      hoverEls.forEach((el) => {
        el.removeEventListener('mouseenter', activate)
        el.removeEventListener('mouseleave', deactivate)
      })
      magneticHandlers.forEach(({ el, move, leave }) => {
        el.removeEventListener('mousemove', move)
        el.removeEventListener('mouseleave', leave)
      })
      document.body.classList.remove('cursor-active')
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dotRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
    </>
  )
}
