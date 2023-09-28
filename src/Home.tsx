import Presentation from './components/presentation'
import Footer from './components/footer'
import Experiences from './components/experiences'
import Education from './components/education'
import Projects from './components/projects'

import './index.css'

function Home() {
   return (
      <>
         <div className='flex w-full justify-center'>
         
            <div className='max-w-3xl mx-auto px-4'>
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
