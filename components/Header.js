import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  BoltIcon,
  CheckBadgeIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  RectangleStackIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="flex flex-col items-center md:flex-row md:justify-between md:items-center m-5">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="home" Icon={HomeIcon} />
        <HeaderItem title="verified" Icon={CheckBadgeIcon} />
        <HeaderItem title="collection" Icon={RectangleStackIcon} />
        <HeaderItem title="trending" Icon={BoltIcon} />
        <HeaderItem title="search" Icon={MagnifyingGlassIcon} />
        <HeaderItem title="user" Icon={UserIcon} />
      </div>
      <Image
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        className="object-contain"
        alt="#"
      />
    </header>
  );
};

export default Header;
