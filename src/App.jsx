import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import { Aboutme } from "./sections/Aboutme";
import { Projects } from "./sections/Projects";
import { WorkExperience } from "./sections/WorkExperience";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { Navbar } from "./sections/Navbar";
import Loader from "./components/Loader";

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="font-outfit">
      <Navbar />
      <Header />
      <motion.section
        id="introduction"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Aboutme />
      </motion.section>
      <motion.section
        id="work-experience"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <WorkExperience />
      </motion.section>
      <motion.section
        id="projects"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Projects />
      </motion.section>
      <motion.section
        id="contact"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Contact />
      </motion.section>
      <Footer />
    </div>
  );
}

export default App;
