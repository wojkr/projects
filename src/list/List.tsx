import { projects } from "@/data";

const List = () => {
  return (
    <div className="z-[100] mx-auto flex min-h-[100dvh] w-full flex-col justify-evenly px-2 py-12 xs:w-4/5 xs:py-24 md:w-3/5 md:px-8 md:py-32">
      <div
        className="flex flex-row justify-between align-middle
      "
      >
        <h2 className="text-3xl font-extrabold tracking-tight xs:text-4xl md:text-5xl">
          My Projects
        </h2>
        <a
          href="https://wojkr.github.io/portfolio-page/#contact"
          target="_blank"
          className="style-link rounded-ss-full bg-secondary-500 p-3 pl-10 text-main-black hover:text-main-white"
        >
          CONTACT ME!
        </a>
      </div>
      <div className="mt-10 space-y-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            rel="noopener noreferrer"
            className="block bg-white/60  font-normal transition duration-300 ease-in-out hover:bg-white md:rounded-s-full"
          >
            <div className={`flex`}>
              <div className="flex-shrink-0">
                <img
                  className="h-20 w-20 rounded-none object-contain md:rounded-full"
                  src={project.img}
                  alt=""
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium leading-6 text-main-dark">
                  {project.name}
                </h3>
                <p className="mt-2 text-base leading-6 ">
                  {project.shortDescription}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <hr />
      <div id="" className="mt-auto text-center text-xl">
        &copy; Wojciech Krupa 2023{" "}
        <a
          href="https://wojkr.github.io/portfolio-page/"
          className=" font-title text-main-dark"
        >
          @wojkr
        </a>
      </div>
    </div>
  );
};

export default List;
