import request from "../utils/request";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex px-10 md:px-20 text-2xl whitespace-nowrap space-x-10 md:space-x-20 overflow-x-scroll scrollbar-hide py-1">
        {Object.entries(request).map(([key, { title, url }]) => (
          <h2
            className="last:pr-24 capitalize cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
            key={key}
            onClick={() => {router.push(`/?genre=${key}`)}}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12" />
    </nav>
  );
};

export default Navbar;
