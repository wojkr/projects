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
  // const activeClass = `title w-min border-y-4 border-solid border-y-main-black px-2 py-1 text-3xl font-extrabold tracking-tight text-main-black sm:text-4xl md:text-5xl style-title-${currentPage} animation delay-200 `;
  const activeClass = `title w-min px-2 py-1 font-extrabold tracking-tight style-title-${currentPage} animation delay-200 `;
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
