import { useEffect, useState } from 'react'

export default function Loader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    let timer
    const finish = () => {
      timer = setTimeout(() => setDone(true), 700)
    }
    if (document.readyState === 'complete') {
      finish()
    } else {
      window.addEventListener('load', finish, { once: true })
    }
    return () => {
      window.removeEventListener('load', finish)
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className={`loader${done ? ' done' : ''}`}>
      <div className="loader-core">
        <div className="loader-j">JB</div>
        <div className="loader-caption">visual / code / experience</div>
      </div>
    </div>
  )
}
