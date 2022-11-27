import ThumbNail from "./ThumbNail";
import FlipMove from "react-flip-move";
import { motion } from "framer-motion";

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
    
  };
  return (
    <FlipMove>
      <motion.div
        initial="initial"
        animate="animate"
        variants={stagger}
        className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 "
      >
        {movies.results.map((movie) => (
          <ThumbNail key={movie.id} movie={movie} stagger={fadeInUp} />
        ))}
      </motion.div>
    </FlipMove>
  );
};

export default Result;
