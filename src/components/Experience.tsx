import React, { FC, ReactElement } from 'react'

import '../scss/experience.scss'

interface Exp {
  name: string
  duration: string
  content: string[]
}
interface ExperienceProps {
  data: Exp[]
}

const Experience: FC<ExperienceProps> = (
  props: ExperienceProps
): ReactElement => {
  const { data } = props

  return (
    <div className='my-5'>
      <h2 className='border-top border-secondary pt-3 mt-3'>{`Experience ${'&'} Education`}</h2>
      <div className='time-line'>
        {data.map(item => (
          // <div
          //   className={`time-spot ${
          //     index % 2 ? 'time-spot-odd' : 'time-spot-even'
          //   }`}
          //   key={item.name}
          // >
          <div className='time-spot' key={item.name}>
            <div className='time-content'>
              <h3 className='h5 font-weight-light'>
                {item.name}
                {' | '}
                {item.duration}
              </h3>
              <ul>
                {item.content.map(list => (
                  <li key={list}>{list}</li>
                ))}
              </ul>
            </div>
            <span className='time-sub-arrow' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
