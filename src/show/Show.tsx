import { projects } from "@/data";
import Title from "./Title";
import Description from "./Description";
import Stack from "./Stack";
import LinkToLive from "./LinkToLive";
import LinkGoBack from "./LinkGoBack";
import Picture from "./Picture";
import Background from "./Background";

interface ShowProps {
  currentPage: number;
  isActive: boolean;
}

const Show: React.FC<ShowProps> = ({ currentPage, isActive }) => {
  const backgroundLayout = projects.map((p) => p.backgroundLayout);
  const project = projects[currentPage - 1];
  const activeBackgroundClassNames = backgroundLayout[currentPage - 1]; //animatioin class sets up elemet properties when active
  const inactiveBackgroundClassNames = activeBackgroundClassNames.map(
    (a, index) => {
      const first = " animation-from-";
      const last = "-100-inactive";
      const from = ["top", "right", "left", "down"];
      return a + first + from[index] + last;
    }
  );
  const mainClass =
    "absolute left-0 top-0 z-10 min-h-[100dvh] w-[100dvw] flex flex-col justify-center xs:justify-between xs:flex-row pl-0 xs:pl-2 md:w-4/5 md:ml-[10%] xxl:w-3/5 xxl:ml-[20%] ";
  const inactiveMainClass = mainClass + " left-[-10000px]";

  return (
    <>
      {/* CONTENT */}
      <div className={isActive ? mainClass : inactiveMainClass}>
        {/* COLUMN LEFT */}
        <div className="h-100 mt-5 flex flex-col justify-evenly px-2 xs:mt-0 sm:w-2/5 xxxl:w-1/2">
          <div className="flex flex-row justify-between">
            <Title
              text={project.name}
              currentPage={currentPage}
              isActive={isActive}
            />
            <Stack
              stackList={project.stack}
              currentPage={currentPage}
              isActive={isActive}
            />
          </div>
          <Description
            text={project.description}
            currentPage={currentPage}
            isActive={isActive}
          />
          <div className="flex flex-col-reverse justify-between xs:flex-row">
            <LinkGoBack currentPage={currentPage} isActive={isActive} />
            <LinkToLive
              currentPage={currentPage}
              link={project.link}
              isActive={isActive}
            />
          </div>
        </div>
        {/* COLUMN RIGHT */}
        <div className="h-100 flex flex-col justify-evenly sm:w-3/5 xxxl:w-1/2">
          <Picture isActive={isActive} currentPage={currentPage} />
        </div>
      </div>
      {/* BACKGROUND */}
      <Background
        activeBackgroundClassNames={activeBackgroundClassNames}
        inactiveBackgroundClassNames={inactiveBackgroundClassNames}
        isActive={isActive}
        currentPage={currentPage}
      />
    </>
  );
};

export default Show;
