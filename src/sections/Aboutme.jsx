import { motion } from "framer-motion";
import skills from "../data/skills.json";

const skillVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export const Aboutme = () => {
  return (
    <div className="p-8 py-20 bg-base-200">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold">
        INTRODUCTION
      </div>
      <p className="mb-7 text-justify mt-4 font-light text-xl">
        I’m Clara Garcia, a passionate and detail-oriented <strong>web developer</strong> specializing in <strong>front-end technologies</strong>. Curious by nature, I constantly update my skills to stay at the cutting edge of web development. My interest in <strong>design</strong> and <strong>user experience</strong> naturally led me to dive into modern frameworks such as <strong>React</strong> and <strong>Next.js</strong>. I love crafting interfaces that are not only functional but also visually engaging. Whether I’m coding, designing, or drawing, I bring <strong>creativity</strong> and <strong>precision</strong> to everything I do.
      </p>



      <div className="flex gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 mb-6"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={skillVariants}
          >
            <div class="card flex flex-wrap h-1 w-17 md:h-25 md:w-25">
              <div class="card-inner">
                <div class="card-front p-2">
                  <img
                    src={skill.image}
                    alt={skill.title}
                    width={70}
                    height={70}
                    className="rounded"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div class="card-back bg-secondary">{skill.title}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
