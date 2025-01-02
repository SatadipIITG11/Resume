import { projects } from "../data";
import { FaGithub, FaGlobe } from "react-icons/fa";
function Projects() {
  return (
    <div>
      <div className="w-full border-b-[1px] border-black mt-6 text-2xl mb-2">
        PROJECTS
      </div>
      {projects.map((project, index) => (
        <div key={index} className="mt-4">
          <div className="flex justify-between mb-2">
            <div>
              <li className="font-semibold">{project.name}</li>
              <p>{project.group}</p>
            </div>
            <div className="flex flex-col items-end">
              <p>{project.duration}</p>
              <div className="flex items-center gap-2">
                <a
                  href={project.links.github}
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <FaGithub />
                  <span>Github</span>
                </a>
                <a
                  href={project.links.live}
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <FaGlobe />
                  <span>Live</span>
                </a>
              </div>
            </div>
          </div>
          <div className="ml-4">
            {project.description.map((point,index)=>(
                <div key={index} className="flex items-center">
                    <span className="text-3xl mr-3">-</span>
                    <p>{point}</p>
                </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
