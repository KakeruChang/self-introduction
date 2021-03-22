import React, { FC, ReactElement } from 'react'

interface Works {
  title: string
  img: string[]
  company: string
  link: string[]
  type: string
  framework?: string
}
interface WorksProps {
  data: Works[]
}

const Works: FC<WorksProps> = (props: WorksProps): ReactElement => {
  const { data } = props

  return (
    <div className='my-5'>
      <h2>Works</h2>
      {data.map((project) => (
        <div className='card  border-primary my-3' key={project.title}>
          <div className='card-header text-center'>
            <div style={{ fontSize: 32 }} className='font-weight-light'>
              {`${project.title}( ${project.company} )`}
            </div>
          </div>
          <div className='row  m-0'>
            <div className='col-12 row m-0'>
              <h4 className='col-6 my-2 text-center'>
                <span className='badge badge-pill badge-primary'>
                  {project.type}
                </span>
              </h4>
              <h4 className='col-6 my-2 text-center'>
                <span className='badge badge-pill badge-primary'>
                  {project.framework}
                </span>
              </h4>
            </div>
            {project.img.map((image, i) => (
              <div className='col row m-0 align-items-center' key={image}>
                <img
                  className='img-fluid py-1 px-0 col-12'
                  src={image}
                  alt=''
                  key={image}
                />
                <div className='col-12 pb-1 d-flex justify-content-center'>
                  <a
                    href={project.link[i]}
                    className='btn btn-primary'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {`link${i + 1}`}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Works
