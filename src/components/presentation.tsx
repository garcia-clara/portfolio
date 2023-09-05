import { FC } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import Theme from './theme-button'

const Presentation: FC = (): JSX.Element => {
   return (
      <div className='flex mt-8'>
         <div className='h-40 w-40 rounded-full bg-gradient-to-b from-pink-500 via-red-500 to-yellow-500'>
            <div className='w-40 h-40 p-1'>
               <img className='rounded-full' src='/pfp.jpg' alt='' />
            </div>
         </div>
         <div className='px-4'>
            <div className='flex justify-between items-center'>
               <h1 className='text-3xl font-bold'>CLARA GARCIA</h1>
               <Theme />
            </div>

            <div className='flex gap-2 mb-2'>
               <a href='https://www.linkedin.com/in/clara-garcia-9845891b8/' target='_blank'>
                  <div className='badge badge-primary gap-1'>
                     <div>Linkedin</div>
                     <div>
                        <FiArrowUpRight />
                     </div>
                  </div>
               </a>
               <a href='https://github.com/garcia-clara' target='_blank'>
                  <div className='badge badge-secondary gap-1'>
                     <div>Github</div>
                     <div>
                        <FiArrowUpRight />
                     </div>
                  </div>
               </a>
               <a href='https://www.artstation.com/tsuki1756' target='_blank'>
                  <div className='badge badge-accent gap-1'>
                     <div>Artstation</div>
                     <div>
                        <FiArrowUpRight />
                     </div>
                  </div>
               </a>
               <a
                  href='https://www.canva.com/design/DAFZJlCp6cY/rh9tsC0XuqFAvSn6O8sIhA/view?utm_content=DAFZJlCp6cY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink'
                  target='_blank'
               >
                  <div className='badge badge-neutral gap-1'>
                     <div>Resume</div>
                     <div>
                        <FiArrowUpRight />
                     </div>
                  </div>
               </a>
            </div>

            <p>
               Étudiante en informatique et amatrice de webdesign. Mes passions sont la
               programmation, le dessin mais aussi les jeux-vidéos rétro. Passionnée et curieuse, je
               cherche constamment à me tenir à jour et à acquérir de nouvelles compétences.
            </p>
         </div>
      </div>
   )
}

export default Presentation
