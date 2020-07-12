import React, { FC, ReactElement } from 'react'

interface Project {
  title: string
  content: string[]
  img: string[]
  demo: string
  demoPlace: string
  source: string
}
interface SideProjectProps {
  data: Project[]
}

const SideProject: FC<SideProjectProps> = (
  props: SideProjectProps
): ReactElement => {
  const { data } = props

  return (
    <div className='my-5'>
      <h2 className='border-top border-secondary pt-3 mt-3'>Side Project</h2>
      {data.map((project, index) => (
        <div className='card  border-primary my-3' key={project.title}>
          <div className='card-header text-center'>
            <div style={{ fontSize: 32 }} className='font-weight-light'>
              {project.title}
            </div>
          </div>
          <div className={`row ${index % 2 > 0 ? 'flex-row-reverse' : ''}`}>
            <div className='col-md-8 col-12 d-flex flex-column align-items-center'>
              {project.img.map((image) => (
                <img className='img-fluid' src={image} alt='' key={image} />
              ))}
            </div>
            <div className='col-md-4 col-12 d-flex align-items-center'>
              <div className='card-body'>
                <ul>
                  {project.content.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className='card-footer d-flex justify-content-around'>
            <a
              href={project.demo}
              className='btn btn-outline-primary'
              target='_blank'
              rel='noopener noreferrer'
            >
              demo
              {`(${project.demoPlace})`}
            </a>
            <a
              href={project.source}
              className='btn btn-outline-primary'
              target='_blank'
              rel='noopener noreferrer'
            >
              source
            </a>
          </div>
        </div>
        // <div
        //   className={`row ${
        //     index % 2 > 0 ? 'flex-row-reverse' : ''
        //   } border-top border-secondary mt-3 pt-3`}
        //   key={project.title}
        // >
        //   <div className='col-md-8 col-12 d-flex align-items-center'>
        //     {project.img.map(image => (
        //       <img className='img-fluid' src={image} alt='' key={image} />
        //     ))}
        //   </div>
        //   <div className='col-md-4 col-12'>
        //     <div
        //       style={{ fontSize: 32 }}
        //       className='font-weight-light pt-3 mt-3'
        //     >
        //       {project.title}
        //     </div>
        //     <ul>
        //       {project.content.map(item => (
        //         <li key={item}>{item}</li>
        //       ))}
        //     </ul>
        //   </div>
        // </div>
      ))}
    </div>
  )
}

export default SideProject
