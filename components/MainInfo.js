import Image from "next/image";
import {
  PlayCircleIcon,
  PlusCircleIcon,
  CheckCircleIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const MainInfo = ({ movie }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.35,
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
    <div className="md:grid container mx-auto md:grid-cols-2">
      <motion.div
        initial={{
          x: 100,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
      >
        <Image
          src={`${BASE_URL}${movie.backdrop_path}`}
          width="1920"
          height={1080}
          alt="#"
          className="px-4 md:w-[100%] w-[1920px]"
        />
      </motion.div>
      <motion.div
        className="p-4"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-2xl font-bold pb-3 md:whitespace-nowrap"
        >
          {movie.original_title || movie.title || movie.name}
        </motion.h2>
        <motion.div
          variants={fadeInUp}
          className="pb-4 flex items-center justify-between"
        >
          <motion.div variants={fadeInUp}>
            {movie?.genres?.map((item) => (
              <span className="text-sm font-medium pr-3" key={item.id}>
                {item.name}
              </span>
            ))}
          </motion.div>
          <span className="font-bold">{movie.release_date}</span>
        </motion.div>
        <motion.p variants={fadeInUp} className="text-justify">
          {movie.overview}
        </motion.p>
        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-between p-4"
        >
          <PlayCircleIcon className="h-10 cursor-pointer md:hover:animate-bounce" />
          <PlusCircleIcon className="h-10  cursor-pointer md:hover:animate-bounce" />
          <CheckCircleIcon className="h-10  cursor-pointer md:hover:animate-bounce" />
          <HandThumbUpIcon className="h-10  cursor-pointer md:hover:animate-bounce" />
          <HandThumbDownIcon className="h-10  cursor-pointer md:hover:animate-bounce" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MainInfo;
