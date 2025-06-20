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
      <div className="text-6xl font-extrabold">INTRODUCTION</div>
      <p className="mb-7 text-justify">
        I’m a passionate web developer specializing in{" "}
        <strong>front-end development</strong> with <strong>React</strong> and{" "}
        <strong>Next.js</strong>, with a strong interest in{" "}
        <strong>design</strong> and <strong>user experience</strong>.
        My enthusiasm for <strong>UI/UX</strong> led me to explore{" "}
        <strong>Figma</strong>, allowing me to design <strong>intuitive</strong>{" "}
        and <strong>engaging</strong> interfaces.
        My training in web development, enhanced by a specialization in{" "}
        <strong>digital transformation</strong>, has given me a cross-functional
        perspective, blending <strong>technical</strong> and{" "}
        <strong>strategic</strong> understanding of digital projects.
        During my work-study program, I contributed to various projects, taking
        on roles such as <strong>developer</strong>, <strong>designer</strong>,
        and <strong>project manager</strong>.
        This <strong>versatility</strong> allows me to approach every project
        with a <strong>global vision</strong>, combining attention to detail,
        creativity, and user-centered thinking.
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
            <img
              src={skill.image}
              alt={skill.title}
              width={70}
              height={70}
              className="rounded"
              style={{ objectFit: "contain" }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
