import { projects } from "@/data";

const List = () => {
  return (
    <div className="z-[100] mx-auto w-full px-2 py-12 xs:w-4/5 xs:py-24 md:w-3/5 md:px-8 md:py-32">
      <h2 className="text-3xl font-extrabold tracking-tight xs:text-4xl md:text-5xl">
        My Projects
      </h2>
      <div className="mt-10 space-y-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            rel="noopener noreferrer"
            className="block font-normal transition duration-300 ease-in-out hover:bg-gray-200"
          >
            <div className={`flex`}>
              <div className="flex-shrink-0">
                <img
                  className="h-20 w-20 rounded-full object-contain"
                  src={project.img}
                  alt=""
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium leading-6 text-main-dark">
                  {project.name}
                </h3>
                <p className="text-main mt-2 text-base leading-6">
                  {project.shortDescription}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default List;
