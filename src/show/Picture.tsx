import React from "react";
import pic1 from "../assets/nomad-comp.png";
import pic2 from "../assets/sweet-comp.png";
import pic3 from "../assets/block-comp-phone.png";
import pic4 from "../assets/solar-comp.png";
import pic5 from "../assets/rideMockup1200.webp";
import noPic from "../assets/no-pic.jpg";

interface PictureProps {
  isActive: boolean;
  currentPage: number;
}

const getPic = (currentPage: number) => {
  if (currentPage === 1) return pic1;
  if (currentPage === 2) return pic2;
  if (currentPage === 3) return pic3;
  if (currentPage === 4) return pic4;
  if (currentPage === 5) return pic5;
  return noPic;
};

const Picture: React.FC<PictureProps> = ({ isActive, currentPage }) => {
  const pic = getPic(currentPage);

  const activeClass = "animation delay-600";
  const inactiveClass = activeClass + " animation-small-from-top-inactive ";
  return (
    <div className={isActive ? activeClass : inactiveClass}>
      <img src={pic} alt="" className="" />
    </div>
  );
};

export default Picture;
