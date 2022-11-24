import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";
import { motion } from "framer-motion";

const ThumbNail = forwardRef(({ movie, stagger }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <motion.div
      variants={stagger}
      whileInView={stagger}
      className="group cursor-pointer p-3 transition duration-200 ease-in transform md:hover:scale-105 hover:z-50"
    >
      <Link
        href={`/info/${movie.id}`}
        ref={ref}
        className="group cursor-pointer p-3 transition duration-200 ease-in transform md:hover:scale-105 hover:z-50"
      >
        <Image
          height={1080}
          width={1920}
          src={`${BASE_URL}${movie.backdrop_path} `}
          alt="#"
        />

        <div className="p-2">
          <p className="truncate max-w-md">{movie.overview}</p>
          <h2 className="mt-1 text-2xl text-white transition-all duration-150 ease-in-out group-hover:font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="flex items-center opacity-0 group-hover:opacity-100 duration-150">
            {movie.release_date || movie.first_air_date}.
            <HandThumbUpIcon className="h-5 mx-2" />
            {movie.vote_count}
          </p>
        </div>
      </Link>
    </motion.div>
  );
});

export default ThumbNail;
