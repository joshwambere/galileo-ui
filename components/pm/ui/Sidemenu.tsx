import { AiOutlineProject } from 'react-icons/ai';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { changeRoute } from '../../../helpers/routeHandler.helper';
import { routes } from '../../../config/router.config';

const SideMenu = (): JSX.Element => {
  return (
    <div className="border-r-2 h-screen w-1/6 py-2 px-2 bg-white">
      <div className="flex flex-col pl-2 pt-3">
        <div
          onClick={() => changeRoute(routes.pm.url)}
          className="menu-item flex items-center hover:text-[#d51f97] hover:cursor-pointer py-2"
        >
          <AiOutlineProject />
          <p className="m-0 pl-2 hover:cursor-pointer">Projects</p>
        </div>
        <div
          onClick={() => changeRoute(routes.chat.url)}
          className="menu-item flex items-center hover:text-[#d51f97] hover:cursor-pointer py-2"
        >
          <IoChatbubblesOutline />
          <p className="m-0 pl-2 hover:cursor-pointer">Chat</p>
        </div>
        <div
          onClick={() => changeRoute(routes.chatRoom.url)}
          className="menu-item flex items-center hover:text-[#d51f97] hover:cursor-pointer py-2"
        >
          <AiOutlineUsergroupAdd />
          <p className="m-0 pl-2">ChatRoom</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
