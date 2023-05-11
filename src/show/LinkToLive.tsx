import linkPic1 from "../assets/art-link-1.png";
import linkPic2 from "../assets/art-link-2.png";
import linkPic3 from "../assets/art-link-3.png";
import linkPic4 from "../assets/art-link-4.png";

interface LinkToLiveProps {
  currentPage: number;
  link: string;
  isActive: boolean;
}

const LinkToLive: React.FC<LinkToLiveProps> = ({
  currentPage,
  link,
  isActive,
}) => {
  const pics = [linkPic1, linkPic2, linkPic3, linkPic4];
  const linkPic = pics[currentPage - 1];

  const activeClass = "animation delay-500 flex flex-row justify-end";
  const inactiveClass = activeClass + " animation-small-from-top-inactive ";
  return (
    <a
      href={link}
      target="_blank"
      className={`${isActive ? activeClass : inactiveClass}`}
    >
      <div className="hidden w-[4vw] cursor-pointer place-content-center pr-[0.4rem] xs:grid">
        <img src={linkPic} alt="" className="" />
      </div>
      <p
        className={`style-link font-marker style-link-text-${currentPage} cursor-pointer`}
      >
        This project
        <br /> is
        <span className={`style-link-${currentPage}`}> LIVE</span>
      </p>
    </a>
  );
};

export default LinkToLive;
