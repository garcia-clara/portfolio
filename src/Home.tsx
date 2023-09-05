import Presentation from './components/presentation'
import Footer from './components/footer'
import Experiences from './components/experiences'
import Education from './components/education'
import Projects from './components/projects'

import './index.css'

function Home() {
   return (
      <>
         <div className='grid grid-cols-4'>
            <div className='col-start-2 col-end-4'>
               <Presentation />
               <Experiences />
               <Education />
               <Projects />
               <Footer />
            </div>
         </div>
      </>
   )
}

export default Home
