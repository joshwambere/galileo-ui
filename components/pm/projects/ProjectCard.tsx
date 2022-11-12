import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { BsGrid, BsDot } from 'react-icons/bs';
import { IoIosAdd } from 'react-icons/io';
import { Project } from '../../../shared/types/project.types';
import moment from 'moment';
import { useChatRoomMutation } from '../../../services/endpoints/chatRoom.endpoint';
import { SuccessMessage } from '../../shared/messages/SuccessMessage';
import { ErrorMessage } from '../../shared/messages/ErrorMessage';
import { Button } from 'antd';
import { changeRoute } from '../../../helpers/routeHandler.helper';
import { routes } from '../../../config/router.config';

type Props = {
  data: Project;
};

const ProjectCard = ({ data }: Props) => {
  const [chatRoom, { isLoading, isError }] = useChatRoomMutation();
  const handelCreatChatRoom = (projectId: string) => {
    chatRoom({ projectId: projectId })
      .unwrap()
      .then((res: any) => {
        SuccessMessage(res.message);
      })
      .catch((err: any) => {
        ErrorMessage(err?.data.message);
      });
  };
  return (
    <div className=" project-card bg-[#fff] lg:w-1/5 sm:w-1/2 p-3 rounded-xl border-2 hover:cursor-pointer">
      <div
        onClick={() =>
          changeRoute({ pathname: routes.project.url, query: { id: data._id } })
        }
      >
        <div className="flex items-center justify-between top">
          <div className="flex justify-between">
            <h1 className="m-0 font-medium">{data.name}</h1>
            <span className="text-[#8391a4] font-light ml-2">
              {moment(data.createdAt).format('MMM Do YY')}
            </span>
          </div>
        </div>
        <div className="flex justify-between py-3">
          <div className="flex flex-col w-3/4">
            <span className="text-[#8391a4]">{data.description}</span>
            <span className="flex items-center mt-2">
              <BsDot className="text-green-600" size={24} />
              <span className="text-[#8391a4] m-0 capitalize">
                {data && data.status && data.status.toLowerCase()}
              </span>
            </span>
          </div>
          <div className="w-1/4 flex justify-center">
            <BsGrid size={32} className="text-[#8391a4]" />
          </div>
        </div>
      </div>
      {data.room ? null : (
        <div>
          <Button
            loading={isLoading}
            onClick={() => handelCreatChatRoom(data._id)}
            className="bg-[#d51f97] border-transparent border-2 text-white flex items-center w-1/2 justify-center py-1 rounded hover:text-[#d51f97] hover:bg-[#fff] hover:border-slate-800 room_btn "
          >
            <IoIosAdd className="mr-1" />
            Create Room
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
