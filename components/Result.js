import ThumbNail from "./ThumbNail";
import FlipMove from "react-flip-move";
import { AnimatePresence, motion } from "framer-motion";

const Result = ({ movies }) => {
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
    exit: {
      y: -60,
      opacity: 0,
      transition: {
        duration: 3,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };
  return (
    <AnimatePresence exitBeforeEnter>
      <FlipMove>
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          exit='exit'
          className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 "
        >
          {movies.results.map((movie) => (
            <ThumbNail key={movie.id} movie={movie} stagger={fadeInUp} />
          ))}
        </motion.div>
      </FlipMove>
    </AnimatePresence>
  );
};

export default Result;
