// next image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-screen-lg">
      <Image
        src={"/avatar.png"}
        width={737}
        height={678}
        alt="Avatar"
        className="translate-z-0 w-full h-full"
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
};

export default Avatar;
