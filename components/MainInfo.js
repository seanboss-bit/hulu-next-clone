import Image from "next/image";
import {
  PlayCircleIcon,
  PlusCircleIcon,
  CheckCircleIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";

const MainInfo = ({ movie }) => {
  console.log(movie);
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="md:flex container mx-auto">
      <Image
        src={`${BASE_URL}${movie.backdrop_path}`}
        width="1920"
        height={1080}
        alt="#"
        className="px-4 md:w-[640px] w-[1920px]"
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold pb-3 md:whitespace-nowrap">
          {movie.original_title || movie.title || movie.name}
        </h2>
        <div className="pb-4 flex items-center justify-between">
          <div>
            {movie?.genres?.map((item) => (
              <span className="text-sm font-medium pr-3" key={item.id}>{item.name}</span>
            ))}
          </div>
          <span className="font-bold">{movie.release_date}</span>
        </div>
        <p className="text-justify">{movie.overview}</p>
        <div className="flex items-center justify-between p-4">
          <PlayCircleIcon className="h-10 cursor-pointer md:hover:animate-bounce" />
          <PlusCircleIcon className="h-10  cursor-pointer md:hover:animate-bounce" />
          <CheckCircleIcon className="h-10  cursor-pointer md:hover:animate-bounce" />
          <HandThumbUpIcon className="h-10  cursor-pointer md:hover:animate-bounce" />
          <HandThumbDownIcon className="h-10  cursor-pointer md:hover:animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
