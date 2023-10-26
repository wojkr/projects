const splitName = (name: string, isFirst = true) => {
  const [first, rest] = name.split(" ");
  if (isFirst) return first;
  return rest;
};

interface TitleProps {
  text: string;
  currentPage: number;
  isActive: boolean;
}
const Title: React.FC<TitleProps> = ({ text, currentPage, isActive }) => {
  const activeClass = `title w-min px-2 border-[0.7rem solid] py-1 text-p${currentPage}-title font-extrabold tracking-tight animation delay-200 `;
  const inactiveClass = activeClass + " animation-small-from-top-inactive ";

  return (
    <h2 className={isActive ? activeClass : inactiveClass}>
      {splitName(text)}
      <br />
      {splitName(text, false)}
    </h2>
  );
};

export default Title;
