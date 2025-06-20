import Model3D from "../components/Model3D";
import TypeWriter from "../components/Typewriter";

export const Header = () => {
  const typeWriter = ["Front-end Developer     ", "Product Owner     ", "IT Project Manager     ", "Web Designer     "];
  return (
    <div className="p-8 py-20 h-screen">
      <div className="absolute mt-50 ml-25">
        <div className="text-8xl font-bold">Hi, I'm Clara</div>
        <div className="text-2xl font-semibold mt-4">
          I am a <TypeWriter data={typeWriter} />
        </div>
      </div>
      <Model3D />
    </div>
  );
};
