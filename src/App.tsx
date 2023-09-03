import { useState } from "react";

import Navbar from "./components/navbar";
import Presentation from "./components/presentation";
import Footer from "./components/footer";
import Experiences from "./components/experiences";
import Education from "./components/education";
import Projects from "./components/projects"

import "./index.css";

function App() {

   return (
      <>
         <div className="grid grid-cols-4">
            <div className="col-start-2 col-end-4">
               <Navbar />
               <Presentation />
               <Experiences />
               <Education />
               <Projects />
               <Footer />
            </div>
         </div>
      </>
   );
}

export default App;
