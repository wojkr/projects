import linkPic from "@/assets/art-pic-link.webp";
import useTailwind from "@/hook/useTailwind";
//@ts-ignore
import { hexToFilterFunc } from "@/helpers/hexToFilter.js";
import { useState } from "react";
import { projects } from "@/data";
import Modal from "./Modal";
// import getTailwindConfig from "@/helpers/getTailwindConfig";

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
  //@ts-ignore
  const colors = useTailwind().theme.colors;
  const colorLink = colors[`p${currentPage}-link`];
  const colorLinkHover = colors[`p${currentPage}-link-hover`];

  const activeClass = `text-lg leading-relaxed animation delay-500 flex flex-row justify-end text-p${currentPage}-link-text`;
  const inactiveClass = activeClass + " animation-small-from-top-inactive ";

  //logic to change icon color
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const [showModal, setShowModal] = useState(false);

  const linkStyle = {
    width: "100%",
    height: "100%",
    filter: hexToFilterFunc(isHovered ? colorLinkHover : colorLink),
  };
  return (
    <>
      {showModal && <Modal link={link} setShowModal={setShowModal} />}
      <a
        className={`${isActive ? activeClass : inactiveClass}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          if (projects[currentPage - 1]?.serverUrl) {
            setShowModal(true);
          } else {
            window.open(link);
          }
        }}
      >
        <div className="hidden w-[58px] cursor-pointer place-content-center pr-[0.4rem] xs:grid">
          <img src={linkPic} alt="" style={linkStyle} />
        </div>
        <p
          className={` style-link-text style-link-text-${currentPage} font-marker text-p${currentPage}-link-text cursor-pointer`}
        >
          This project
          <br /> is
          <span className="text-[#000]" style={linkStyle}>
            {" "}
            LIVE
          </span>
        </p>
      </a>
    </>
  );
};

export default LinkToLive;
