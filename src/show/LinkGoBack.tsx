interface LinkToLiveProps {
  currentPage: number;
  isActive: boolean;
}

const LinkGoBack: React.FC<LinkToLiveProps> = ({ currentPage, isActive }) => {
  const activeClass = `xs:flex-grow-[0] flex-grow-[1] animation delay-500 flex flex-row `;
  const inactiveClass = activeClass + " animation-small-from-top-inactive ";
  return (
    <div className={`${isActive ? activeClass : inactiveClass}`}>
      <a
        href="/projects/#"
        className={`w-auto flex-grow-[1] p-1 font-marker text-sm leading-relaxed xs:w-min xs:text-lg text-p${currentPage}-link-back hover:text-p${currentPage}-link-back-hover style-link-back style-link-back-${currentPage} flex items-center justify-center`}
      >
        Go Back
      </a>
    </div>
  );
};

export default LinkGoBack;
