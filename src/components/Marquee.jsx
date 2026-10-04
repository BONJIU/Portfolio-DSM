import { Fragment } from 'react'

const items = ['frontend', 'backend', 'ux / ui', 'mobile', 'creative development']

export default function Marquee() {
  const track = [...items, ...items]
  return (
    <div className="marquee-zone">
      <div className="marquee">
        <div className="marquee-track">
          {track.map((item, i) => (
            <Fragment key={i}>
              <span>{item}</span><i>✦</i>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
