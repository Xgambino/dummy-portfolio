// links
import Link from "next/link";

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiGithubFill,
  RiBehanceLine,
  RiTwitterLine,
  RiLinkedinLine ,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={"https://www.linkedin.com/in/denismugambimuthuri"}className="hover:text-accent transition-all duration-300">
      <RiLinkedinLine />
      </Link>
      <Link href={"https://github.com/Xgambino"}className="hover:text-accent transition-all duration-300">
      <RiGithubFill />
      </Link>
      <Link href={"https://www.youtube.com/@mugambimuthuri7442"} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine />
      </Link>
      <Link href={"https://www.facebook.com/mv.gambi"} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link href={"https://www.instagram.com/_x_gambino_/"} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={"https://www.behance.net/denismugambi1"} className="hover:text-accent transition-all duration-300">
        <RiBehanceLine />
      </Link>
      <Link href={"https://x.com/_x_gambino_x_"} className="hover:text-accent transition-all duration-300">
        <RiTwitterLine />
      </Link>
      
    </div>
  );
};

export default Socials;
