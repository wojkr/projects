interface TitleProps {
  text: string;
  currentPage: number;
  isActive: boolean;
}
const Title: React.FC<TitleProps> = ({ text, currentPage, isActive }) => {
  const activeClass = `title xs:w-min w-max xs:h-auto h-fit px-2 border-[0.7rem solid] py-1 text-p${currentPage}-title font-extrabold tracking-tight animation delay-200 `;
  const inactiveClass = activeClass + " animation-small-from-top-inactive ";

  return <h2 className={isActive ? activeClass : inactiveClass}>{text}</h2>;
};

export default Title;
