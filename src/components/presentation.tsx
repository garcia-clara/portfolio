import { FC } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Presentation: FC = (): JSX.Element => {
   return (
      <div className="flex">
         <div className="avatar">
            <div className="w-36 h-36 rounded-xl">
               <img
                  className="rounded-lg border"
                  src="../public/pfp.jpg"
                  alt=""
               />
            </div>
         </div>
         <div className="px-4">
            <h1 className="text-3xl font-bold">CLARA GARCIA</h1>
            <div className="flex gap-2 my-2">
               <a
                  href="https://www.linkedin.com/in/clara-garcia-9845891b8/"
                  target="_blank"
               >
                  <div className="badge badge-primary gap-1">
                     <div>Linkedin</div>
                     <div>
                        <FiArrowUpRight />
                     </div>
                  </div>
               </a>
               <a href="https://github.com/garcia-clara" target="_blank">
                  <div className="badge badge-secondary gap-1">
                     <div>Github</div>
                     <div>
                        <FiArrowUpRight />
                     </div>
                  </div>
               </a>
               <a href="https://www.artstation.com/tsuki1756" target="_blank">
                  <div className="badge badge-accent gap-1">
                     <div>Artstation</div>
                     <div>
                        <FiArrowUpRight />
                     </div>
                  </div>
               </a>
            </div>

            <p>
               Étudiante en informatique et amatrice de webdesign. Mes passions
               sont la programmation, le dessin mais aussi les jeux-vidéos
               rétro. Passionnée et curieuse, je cherche constamment à me tenir à
               jour et à acquérir de nouvelles compétences.
            </p>
         </div>
      </div>
   );
};

export default Presentation;
