import { backgroundLayout, projects } from "@/data";
import Title from "./Title";
import Description from "./Description";
import Stack from "./Stack";
import LinkToLive from "./LinkToLive";
import pic1 from "../assets/sweet-comp.png";
import pic2 from "../assets/sweet-comp.png";
import pic3 from "../assets/block-comp.png";
import pic4 from "../assets/solar-comp.png";
import LinkGoBack from "./LinkGoBack";

interface ShowProps {
  currentPage: number;
  isActive: boolean;
}

const getPic = (currentPage: number) => {
  if (currentPage === 1) return pic1;
  if (currentPage === 2) return pic2;
  if (currentPage === 3) return pic3;
  if (currentPage === 4) return pic4;
};

const Show: React.FC<ShowProps> = ({ currentPage, isActive }) => {
  const pic = getPic(currentPage);
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
    "absolute left-0 top-0 z-10 min-h-[100dvh] w-[100dvw] flex flex-col justify-between xs:flex-row px-2 xs:w-4/5 xs:ml-[10%] md:w-3/5 md:ml-[20%]";
  const inactiveMainClass = mainClass + " left-[-10000px]";

  return (
    <>
      {/* CONTENT */}
      <div className={isActive ? mainClass : inactiveMainClass}>
        {/* COLUMN LEFT */}
        <div className="h-100 flex flex-col justify-evenly px-2 sm:w-1/2">
          <div className="flex flex-row justify-between sm:mb-12">
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
          <div className="flex flex-row justify-between">
            <LinkGoBack currentPage={currentPage} isActive={isActive} />
            <LinkToLive
              currentPage={currentPage}
              link={project.link}
              isActive={isActive}
            />
          </div>
        </div>
        {/* COLUMN RIGHT */}
        <div className="h-100 flex flex-col justify-evenly px-2 sm:w-1/2">
          <img src={pic} alt="" />
        </div>
      </div>

      {/* BACKGROUND */}
      {/* TOP-LEFT  */}
      <div
        className={
          isActive
            ? activeBackgroundClassNames[0]
            : inactiveBackgroundClassNames[0]
        }
      ></div>
      {/* TOP-RIGHT  */}
      <div
        className={
          isActive
            ? activeBackgroundClassNames[1]
            : inactiveBackgroundClassNames[1]
        }
      ></div>
      {/* BOTTOM-LEFT  */}
      <div
        className={
          isActive
            ? activeBackgroundClassNames[2]
            : inactiveBackgroundClassNames[2]
        }
      ></div>
      {/* BOTTOM-RIGHT  */}
      <div
        className={
          isActive
            ? activeBackgroundClassNames[3]
            : inactiveBackgroundClassNames[3]
        }
      ></div>
    </>
  );
};

export default Show;
