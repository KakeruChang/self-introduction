import React, { FC, ReactElement } from 'react'

interface Skill {
  title: string
  content: string[]
}
interface SkillsProps {
  data: Skill[]
}

const Skills: FC<SkillsProps> = (props: SkillsProps): ReactElement => {
  const { data } = props

  return (
    <div className='my-5'>
      <h2>Skills</h2>
      <div className='row'>
        {data.map(skill => (
          <div className='col-md-4 col-12' key={skill.title}>
            <>
              <div
                style={{ fontSize: 32 }}
                className='font-weight-light border-top border-secondary pt-3 mt-3'
              >
                {skill.title}
              </div>
              <ul>
                {skill.content.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
