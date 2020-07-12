import React from 'react'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/js/src/index'

// import styles from './styles.scss'
import data from './data/data'
import './scss/common.scss'
import Information from './components/Information'
import Introduction from './components/Introduction'
import Skills from './components/Skills'
import SideProject from './components/SideProject'
import Experience from './components/Experience'
import Works from './components/Works'

const App: React.FC = () => (
  <div className='bg-light py-5'>
    <div
      className='container pb-2 pt-5 px-5'
      style={{ backgroundColor: '#fff' }}
    >
      <Information data={data.information} />
      <Introduction data={data.introduction} />
      <Skills data={data.skills} />
      <Works data={data.works} />
      <SideProject data={data.sideProject} />
      <Experience data={data.experience} />
      {/* <h1 className={styles.mainBlock}>Hi JSX123！</h1> */}
    </div>
  </div>
)

export default App
