import React from "react";
interface StackProps {
  stackList: string[];
  currentPage: number;
  isActive: boolean;
}

const Stack: React.FC<StackProps> = ({ stackList, currentPage, isActive }) => {
  const activeClass =
    `xs:text-lg text-sm leading-relaxed animation delay-300 text-right font-marker style-stack` +
    ` text-p${currentPage}-stack`;
  const inactiveClass = activeClass + " animation-small-from-top-inactive";
  return (
    <div className={isActive ? activeClass : inactiveClass}>
      {stackList.map((s, index) => (
        <p key={`stack-${index}-${s}`}>{s}</p>
      ))}
    </div>
  );
};

export default Stack;
