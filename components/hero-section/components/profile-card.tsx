import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="relative flex justify-center items-center py-10 md:py-0  md:ml-10">
      <div className="absolute w-52 h-52 bg-blue-600 rounded-3xl rotate-45 shadow-2xl shadow-blue-500/50"></div>

      <div className="relative w-52 h-52 overflow-hidden rotate-45">
        <Image
          src="/avatar.png" // Make sure the image is in the public/ folder
          alt="Profile Picture"
          width={256}
          height={256}
          className="-rotate-45 object-cover"
        />
      </div>
    </div>
  );
};

export default ProfileCard;
