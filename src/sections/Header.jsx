import Model3D from "../components/Model3D";
import TypeWriter from "../components/Typewriter";

export const Header = () => {
  const typeWriter = [
    "Front-end Developer     ",
    "Product Owner     ",
    "IT Project Manager     ",
    "Web Designer     ",
  ];
  return (
    <div className=" sm:p-10 py-20 min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-8">
      <div className=" flex flex-col items-center md:items-start">
        <div className="text-6xl sm:text-6xl md:text-7xl font-bold text-center md:text-left">
          Hi, I'm Clara
        </div>
        <div className="text-lg sm:text-2xl font-semibold mt-4 text-center md:text-left">
          I am a <TypeWriter data={typeWriter} />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center md:mb-0">
        <Model3D />
      </div>
    </div>
  );
};
