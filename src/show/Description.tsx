import React from "react";

interface DescriptionProps {
  text: string;
  currentPage: number;
  isActive: boolean;
}

const Description: React.FC<DescriptionProps> = ({
  text,
  currentPage,
  isActive,
}) => {
  const activeClass = `animation delay-[400ms] my-[30px] xs:my-0 style-text style-text-${currentPage} text-p${currentPage}-text`;
  const inactiveClass = activeClass + " animation-small-from-top-inactive ";
  return <div className={isActive ? activeClass : inactiveClass}>{text}</div>;
};

export default Description;
