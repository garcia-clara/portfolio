import { FC } from "react";
import { experiences } from "../data/experiences.json";

const Experiences: FC = (): JSX.Element => {
   return (
      <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-base-200 mt-4">
         <input type="checkbox" />
         <div className="collapse-title text-2xl font-bold uppercase bg-base-300">
            expériences professionnelles
         </div>
         <div className="collapse-content">
            {experiences.map((oneExperience) => (
               <div className="grid grid-cols-3">
                  <div className="mt-4 flex gap-2">
                     <div className="text-lg">✦</div>
                     <div>
                        <p className="uppercase font-bold text-lg">{oneExperience.libelle}</p>
                        <div className="flex text-sm gap-2">
                        <p className="font-bold uppercase">{oneExperience.entreprise}</p>
                           <p>|</p>
                           <p>{oneExperience.date}</p>
                        </div>
                     </div>
                  </div>
                  <div className="mt-4 col-start-2 col-end-4">
                     {oneExperience.description}
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Experiences;
