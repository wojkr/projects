interface LinkToLiveProps {
  currentPage: number;
  link: string;
  isActive: boolean;
}

const LinkToLive: React.FC<LinkToLiveProps> = ({
  currentPage,
  link,
  isActive,
}) => {
  const activeClass = "animation delay-500 flex flex-row justify-end";
  const inactiveClass = activeClass + " animation-small-from-top-inactive ";
  return (
    <div className={`${isActive ? activeClass : inactiveClass}`}>
      <p className={`style-link font-marker style-link-text-${currentPage}`}>
        This project
        <br /> is
        <a href={link} target="_blank" className={`style-link-${currentPage}`}>
          {" "}
          LIVE
        </a>
      </p>
    </div>
  );
};

export default LinkToLive;
