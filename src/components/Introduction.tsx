import React, { FC, ReactElement } from 'react'

interface IntroductionProps {
  data: {
    English: string
    Chinese: string
  }
}

const Introduction: FC<IntroductionProps> = (
  props: IntroductionProps
): ReactElement => {
  const { data } = props

  return (
    <div className='my-5'>
      <h2>Introduction</h2>
      <p style={{ textIndent: 34 }}>{data.Chinese}</p>
      <p style={{ textIndent: 34 }}>{data.English}</p>
    </div>
  )
}

export default Introduction
