import { FC } from 'react'
import { projects } from '../data/projects.json'

const Experiences: FC = (): JSX.Element => {
   return (
      <div tabIndex={0} className='collapse collapse-open border border-base-300 bg-base-200 mt-4'>
         <input type='checkbox' />
         <div className='collapse-title text-2xl font-bold uppercase bg-base-300'>projets</div>
         <div className='collapse-content'>
            
         {projects.map((oneProject) => (
            <a href={oneProject.link} target='_blank'>
               <div className='mt-4 py-2 hover:bg-base-300 rounded-xl'>
                  <div className='flex gap-2'>
                     <div className='ml-4'>
                        <p className='uppercase font-bold text-lg'>{oneProject.libelle}</p>
                        <div className='flex text-sm gap-2'>
                           <p className='font-bold uppercase'>{oneProject.languages}</p>
                           <p>|</p>
                           <p>{oneProject.date}</p>
                        </div>
                        <div>{oneProject.description}</div>
                     </div>
                  </div>
               </div>
            </a>
            ))}
         </div>
      </div>
   )
}

export default Experiences
