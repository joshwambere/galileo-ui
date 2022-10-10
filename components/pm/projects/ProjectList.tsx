import ProjectCard from './ProjectCard';
import { ProjectsResponse } from '../../../shared/types/project.types';
type Props = {
  projects: ProjectsResponse;
};
const ProjectList = ({ projects }: Props) => {
  return (
    <div className="flex  justify-around pt-4">
      {projects &&
        projects.data.map((project, index) => (
          <ProjectCard data={project} key={index} />
        ))}
    </div>
  );
};

export default ProjectList;
