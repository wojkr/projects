import React from "react";
import ring from "@/assets/art-rings.webp";
import circle from "@/assets/art-circle.webp";
// @ts-ignore
import { hexToFilterFunc } from "@/helpers/hexToFilter.js";
import { projects } from "@/data";

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
  const colors = projects.map((p) => p.circleColor);

  const ringsActiveClass =
    "animation fixed left-[-15vh] top-[-10dvh] w-[40vh] ";
  const ringsInactiveClass =
    ringsActiveClass + " animation-from-left-100-inactive";
  const ringsActiveClass2 =
    "animation fixed left-[85vh] top-[-10dvh] w-[30vh] " +
    hexToFilterFunc(colors[currentPage - 1].colorR2);
  const ringsInactiveClass2 =
    ringsActiveClass2 + " animation-from-top-100-inactive";
  const circleActiveClass =
    "animation fixed left-[80dvw] top-[70dvh] w-[40vh] " +
    hexToFilterFunc(colors[currentPage - 1].colorC1);
  const circleInactiveClass =
    circleActiveClass + " animation-from-down-100-inactive";
  return (
    <>
      {/* TOP-LEFT  */}
      <div
        className={
          isActive
            ? activeBackgroundClassNames[0] + ` bg-p${currentPage}-bg-1`
            : inactiveBackgroundClassNames[0]
        }
      ></div>
      {/* TOP-RIGHT  */}
      <div
        className={
          isActive
            ? activeBackgroundClassNames[1] + ` bg-p${currentPage}-bg-2`
            : inactiveBackgroundClassNames[1]
        }
      ></div>
      {/* BOTTOM-LEFT  */}
      <div
        className={
          isActive
            ? activeBackgroundClassNames[2] + ` bg-p${currentPage}-bg-3`
            : inactiveBackgroundClassNames[2]
        }
      ></div>
      {/* BOTTOM-RIGHT  */}
      <div
        className={
          isActive
            ? activeBackgroundClassNames[3] + ` bg-p${currentPage}-bg-4`
            : inactiveBackgroundClassNames[3]
        }
      ></div>
      {/* /RING 1  */}
      <img
        src={ring}
        alt=""
        className={
          isActive
            ? ringsActiveClass + ` style-link-${currentPage}`
            : ringsInactiveClass
        }
        style={{ filter: hexToFilterFunc(colors[currentPage - 1].colorR1) }}
        aria-hidden
      />
      {/* /RING 2  */}
      <img
        src={ring}
        alt=""
        className={
          isActive
            ? ringsActiveClass2 + ` style-link-${currentPage}`
            : ringsInactiveClass2
        }
        style={{ filter: hexToFilterFunc(colors[currentPage - 1].colorR2) }}
        aria-hidden
      />
      {/* CIRCLE 1 */}
      <img
        src={circle}
        alt=""
        className={
          isActive
            ? circleActiveClass + ` style-link-${currentPage}`
            : circleInactiveClass
        }
        style={{ filter: hexToFilterFunc(colors[currentPage - 1].colorC1) }}
        aria-hidden
      />
    </>
  );
};

export default Background;
