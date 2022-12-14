import SearchBar from './ui/searchBar';
import Filter from './ui/Filter';
import Project from '../modals/Project';
import Projects from '../Forms/Projects';
import React, { useState } from 'react';
import { useProjectsQuery } from '../../services/endpoints/project.endpoint';
import ProjectList from './projects/ProjectList';
import MainLoader from '../shared/loaders/MainLoader';
import { SideMenu } from '../dashboard/ui/sideMenu';

export const Manage = (): JSX.Element => {
  const { data: projects, isLoading: projectsLoading } = useProjectsQuery();
  const [open, setOpen] = useState<boolean>(false);
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <div className="dashboard-cont flex bg-[#f9f9fb] min-h-screen">
      <div className="sticky top-0 dashboard-sidemenu">
        <SideMenu />
      </div>
      <div className="w-full px-7 py-2 flex-col">
        <SearchBar />
        <Filter setOpen={setOpen} />
        {projectsLoading ? (
          <MainLoader />
        ) : (
          projects && <ProjectList projects={projects} />
        )}

        <Project open={open} title="Project" onCancel={handleCancel}>
          <div className="flex flex-col">
            <Projects open={open} setOpen={setOpen} />
          </div>
        </Project>
      </div>
    </div>
  );
};
