import { motion } from "framer-motion";
import projects from "../data/projects";
import { FaGithub } from "react-icons/fa";
import { TbBrowserMaximize } from "react-icons/tb";

export const Projects = () => {
  projects.forEach((project) => {
    if (!project.name || !project.description) {
      console.error("Project data is incomplete:", project);
      return null;
    }
  });
  return (
    <div className="p-4 sm:p-8 py-10 sm:py-20 bg-base-200">
      <div className="text-3xl sm:text-6xl font-extrabold mb-8">PROJECTS</div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((project, index) => (
          <div className="mt-4" key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="border border-base-300 rounded-xl p-4 shadow-md transition"
              >
                <div className="relative">
                  <div className="flex gap-2 right-0 absolute p-2">
                    {project.repository && (
                      <div>
                        <a
                          href={project.repository}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="h-10 w-10 rounded-full bg-base-100 p-1 shadow flex items-center justify-center">
                            <FaGithub className="h-8 w-8" />
                          </div>
                        </a>
                      </div>
                    )}
                    {project.url ? (
                      <div>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="h-10 w-10 rounded-full bg-base-100 p-1 shadow flex items-center justify-center">
                            <TbBrowserMaximize className="h-8 w-8" />
                          </div>
                        </a>
                      </div>
                    ) : null}
                  </div>
                  <img
                    src={project.image ? project.image : "../svg/image.svg"}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover rounded-lg mb-2"
                  />
                  <div className="text-2xl sm:text-2xl font-bold">
                    {project.title}
                  </div>
                  <p className="font-extralight">{project.type} project</p>
                  <p className="text-sm sm:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.languages.map((language, langIndex) => (
                      <div key={langIndex} className="badge badge-soft">
                        {language}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
