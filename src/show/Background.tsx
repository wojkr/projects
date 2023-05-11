import React from "react";
import rings1 from "../assets/art-rings-1.png";
import circle1 from "../assets/art-circle-1.png";
import rings2 from "../assets/art-rings-2.png";
import circle2 from "../assets/art-circle-2.png";
import rings3 from "../assets/art-rings-3.png";
import circle3 from "../assets/art-circle-3.png";
import rings4 from "../assets/art-rings-4.png";
import circle4 from "../assets/art-circle-4.png";

interface BackgroundProps {
  activeBackgroundClassNames: string[];
  inactiveBackgroundClassNames: string[];
  isActive: boolean;
  currentPage: number;
}

const Background: React.FC<BackgroundProps> = ({
  activeBackgroundClassNames,
  inactiveBackgroundClassNames,
  isActive,
  currentPage,
}) => {
  const ringsActiveClass =
    "animation fixed left-[-15vh] top-[-10dvh] w-[40vh] ";
  const ringsInactiveClass =
    ringsActiveClass + "animation-from-left-100-inactive";
  const ringsActiveClass2 =
    "animation fixed left-[85vh] top-[-10dvh] w-[30vh] ";
  const ringsInactiveClass2 =
    ringsActiveClass2 + "animation-from-top-100-inactive";
  const circleActiveClass =
    "animation fixed left-[80dvw] top-[70dvh] w-[40vh] ";
  const circleInactiveClass =
    circleActiveClass + "animation-from-down-100-inactive";
  const circleArr = [circle1, circle2, circle3, circle4];
  const ringsArr = [rings1, rings2, rings3, rings4];
  const circle = circleArr[currentPage - 1];
  const rings = ringsArr[currentPage - 1];
  return (
    <>
      {/* TOP-LEFT  */}
      <div
        className={
          isActive
            ? activeBackgroundClassNames[0]
            : inactiveBackgroundClassNames[0]
        }
      ></div>
      {/* TOP-RIGHT  */}
      <div
        className={
          isActive
            ? activeBackgroundClassNames[1]
            : inactiveBackgroundClassNames[1]
        }
      ></div>
      {/* BOTTOM-LEFT  */}
      <div
        className={
          isActive
            ? activeBackgroundClassNames[2]
            : inactiveBackgroundClassNames[2]
        }
      ></div>
      {/* BOTTOM-RIGHT  */}
      <div
        className={
          isActive
            ? activeBackgroundClassNames[3]
            : inactiveBackgroundClassNames[3]
        }
      ></div>
      <img
        src={rings}
        alt=""
        className={isActive ? ringsActiveClass : ringsInactiveClass}
      />
      <img
        src={rings}
        alt=""
        className={isActive ? ringsActiveClass2 : ringsInactiveClass2}
      />
      <img
        src={circle}
        alt=""
        className={isActive ? circleActiveClass : circleInactiveClass}
      />
      <div></div>
    </>
  );
};

export default Background;
