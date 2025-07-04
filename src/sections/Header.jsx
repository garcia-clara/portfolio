import Model3D from "../components/Model3D";
import TypeWriter from "../components/Typewriter";
import { BsBadge3dFill } from "react-icons/bs";

export const Header = () => {
  const typeWriter = [
    "I am a Web Developer     ",
  ];
  return (
    <>
      <div className=" sm:p-10 py-20 min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-8">
        <div className=" flex flex-col items-center md:items-start">
          <div className="text-6xl sm:text-6xl md:text-7xl font-bold text-center md:text-left">
            Hi, I'm Clara
          </div>
          <div className="text-lg sm:text-2xl font-semibold mt-4 text-center md:text-left">
            <TypeWriter data={typeWriter} />
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center md:mb-0">
          <Model3D />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="btn btn-circle p-2 m-2"
          onClick={() => document.getElementById("my_modal").showModal()}
        >
          <BsBadge3dFill className="h-8 w-8"/>
        </button>
        <dialog id="my_modal" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Laptop 3D Model</h3>
            <p className="py-4">This work is based on <b>"laptop with code"</b> <a className="link" href="https://sketchfab.com/3d-models/laptop-with-code-0a06208ac22b45c4814dea46b6fc6b0a">(https://sketchfab.com/3d-models/laptop-with-code-0a06208ac22b45c4814dea46b6fc6b0a)</a> 
            by <b>zam205</b> <a className="link" href="https://sketchfab.com/zam205">(https://sketchfab.com/zam205)</a> 
            licensed under CC-BY-4.0 <a className="link" href="http://creativecommons.org/licenses/by/4.0/">(http://creativecommons.org/licenses/by/4.0/)</a></p>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </>
  );
};
