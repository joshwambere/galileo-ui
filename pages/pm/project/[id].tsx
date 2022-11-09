import { generateInitials } from '../../../shared/utils/avatar/avatarInitial.util';
import { generateHSL } from '../../../shared/utils/avatar/AvatarColorUtil';
import { Button } from 'antd';
import { useOneProjectQuery } from '../../../services/endpoints/project.endpoint';
import { useRouter } from 'next/router';
import Modal from '../../../components/modals/Project';
import { useState } from 'react';
import Contributor from '../../../components/Forms/Contributor';
import PMPrivateRoute from '../../../components/wrappers/PmRoutes';
import { SideMenu } from "../../../components/dashboard/ui/sideMenu";

const ProjectDetails = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { id } = useRouter().query;
  const { data: project, isLoading: projectLoading } = useOneProjectQuery(id);
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className=" h-screen w-full px-4 py-4 flex">
      <Modal open={open} title="Project" onCancel={handleCancel}>
        <Contributor open={open} setOpen={setOpen} id={id} />
      </Modal>
      <SideMenu />
      <div className="flex-1 gap-2 px-3">
        <div className="project rounded-2xl flex flex-col  w-1/4 bg-[#f8f8f8] h-2/6 px-2 justify-center items-center">
          <div className="nav-top px-2 pt-4 flex justify-center items-center">
            <div
              style={{ background: generateHSL('name') }}
              className="projectBackground"
            >
              {generateInitials('Project Name')}
            </div>
            <div className="p-name pl-2">
              <h1 className="text-neutral-500 text-2xl m-0">
                {project && project.data.name}
              </h1>
            </div>
          </div>
          <div className="project-details px-2 pt-4">
            <div className="">
              <p className="px-2 text-gray-500">
                {project && project.data.description}
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              onClick={() => setOpen(true)}
              type="primary"
              className="btn_dark_red"
            >
              Add Contributors
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PMPrivateRoute(ProjectDetails);
