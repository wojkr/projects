interface LinkToLiveProps {
  currentPage: number;
  isActive: boolean;
}

const LinkGoBack: React.FC<LinkToLiveProps> = ({ currentPage, isActive }) => {
  const activeClass = "animation delay-500 flex flex-row justify-end";
  const inactiveClass = activeClass + " animation-small-from-top-inactive ";
  return (
    <div className={`${isActive ? activeClass : inactiveClass}`}>
      <a
        href="/#"
        className={`style-stack font-marker style-link-back-${currentPage}`}
      >
        Go
        <br /> Back
      </a>
    </div>
  );
};

export default LinkGoBack;
