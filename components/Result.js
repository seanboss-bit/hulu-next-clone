import ThumbNail from "./ThumbNail";
import FlipMove from "react-flip-move";

const Result = ({ movies }) => {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 ">
      {movies.results.map((movie) => (
        <ThumbNail key={movie.id} movie={movie} />
      ))}
    </FlipMove>
  );
};

export default Result;
