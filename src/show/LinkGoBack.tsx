interface LinkToLiveProps {
  currentPage: number;
  isActive: boolean;
}

const LinkGoBack: React.FC<LinkToLiveProps> = ({ currentPage, isActive }) => {
  const activeClass = `animation delay-500 flex flex-row justify-end`;
  const inactiveClass = activeClass + " animation-small-from-top-inactive ";
  return (
    <div className={`${isActive ? activeClass : inactiveClass}`}>
      <a
        href="/projects/#"
        className={`font-marker text-lg leading-relaxed text-p${currentPage}-link-back hover:text-p${currentPage}-link-back-hover style-link-back style-link-back-${currentPage} `}
      >
        Go
        <br /> Back
      </a>
    </div>
  );
};

export default LinkGoBack;
