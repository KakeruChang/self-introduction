import React, { FC, ReactElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
  faPhone,
  faLanguage
} from '@fortawesome/free-solid-svg-icons'

interface InformationProps {
  data: {
    name: string
    email: string
    tel: string
    language: string[]
    img: string
    link: { github: string; medium: string }
  }
}

const Information: FC<InformationProps> = (
  props: InformationProps
): ReactElement => {
  const { data } = props

  return (
    <div className='row'>
      <div className='col-sm-4 col-12 d-flex justify-content-center'>
        <img
          src={data.img}
          className='rounded-circle'
          alt=''
          style={{ maxHeight: 150, maxWidth: 120 }}
        />
      </div>
      <div className='col-sm-8 col-12'>
        <h1 className='h2'>{data.name}</h1>
        <div className='my-3'>
          <a
            className='text-decoration-none text-dark mr-2'
            href={data.link.github}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faGithub} size='2x' />
          </a>
          <a
            className='text-decoration-none text-dark mr-2'
            href={data.link.medium}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faMedium} size='2x' />
          </a>
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          <span className='ml-2'>{data.email}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} />
          <span className='ml-2'>{data.tel}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faLanguage} />
          {data.language.map((item) => (
            <span className='ml-2' key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Information
