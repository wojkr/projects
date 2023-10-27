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
  const activeClass = `xs:text-lg text-sm leading-relaxed animation delay-[400ms] mt-[10px] xs:my-0 style-text style-text-${currentPage} text-p${currentPage}-text`;
  const inactiveClass = activeClass + " animation-small-from-top-inactive ";
  return <div className={isActive ? activeClass : inactiveClass}>{text}</div>;
};

export default Description;
