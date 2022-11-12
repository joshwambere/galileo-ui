import ProjectCard from './ProjectCard';
import { ProjectsResponse } from '../../../shared/types/project.types';
type Props = {
  projects: ProjectsResponse;
};
const ProjectList = ({ projects }: Props) => {
  return (
    <div className="flex gap-2 pt-4 flex-wrap">
      {projects &&
        projects.data.map((project, index) => (
          <ProjectCard data={project} key={index} />
        ))}
    </div>
  );
};

export default ProjectList;
