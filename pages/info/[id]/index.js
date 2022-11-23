import HeaderItem from "../../../components/HeaderItem";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import MainInfo from "../../../components/MainInfo";

const index = ({ movie }) => {
  return (
    <div>
      <Link href={"/"} className="p-4">
        <HeaderItem title="back" Icon={ArrowLeftIcon} />
      </Link>
      <MainInfo movie={movie}/>
    </div>
  );
};

export default index;

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${context.params.id}?api_key=7ee8353ee99349e4763fac695eeb02dc`
  );

  const movie = await res.json();

  return {
    props: {
      movie,
    },
  };
};
