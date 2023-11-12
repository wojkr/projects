import { projects } from "@/data";

const List = () => {
  if (window.location.href[window.location.href.length - 1] !== "#")
    window.location.href = window.location.origin + "/projects/#";
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
          href="https://wojkr.github.io/portfolio/#contact"
          target="_blank"
          className="style-link rounded-ss-full bg-secondary-500 p-3 pl-10 text-main-black hover:text-main-white"
        >
          CONTACT ME!
        </a>
      </div>
      <div className="my-10 space-y-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={"/projects" + project.url}
            rel="noopener noreferrer"
            className="block bg-white/60 px-2 py-4 font-normal transition duration-300 ease-in-out hover:bg-white xs:px-6 md:rounded-s-full md:p-0"
          >
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-shrink-0 justify-center p-0 md:block md:p-8 md:pr-0">
                <img
                  className="h-20 w-20 rounded-none object-contain md:rounded-full"
                  src={project.img}
                  alt=""
                />
              </div>
              <div className="mt-4 text-center md:ml-4 md:mt-8 md:text-left">
                <h3 className="text-lg font-medium leading-6 text-main-dark">
                  {project.name}
                </h3>
                <p className="text-base leading-6 ">
                  {project.shortDescription}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <hr />
      <div
        id=""
        className="letter mt-auto py-[20px] text-center text-xl tracking-wide"
      >
        &copy;Wojciech Krupa 2023{" "}
        <a
          href="https://wojkr.github.io/portfolio-page/"
          className=" font-title tracking-widest text-secondary-500"
        >
          @wojkr
        </a>
      </div>
    </div>
  );
};

export default List;
