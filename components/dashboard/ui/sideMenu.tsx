import { FiInbox } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { FcMenu } from 'react-icons/fc';
import { IoMdAdd } from 'react-icons/io';

export const SideMenu = (): JSX.Element => {
  return (
    <div className="side-menu flex-col items-center h-screen border-r-2 py-4 px-3">
      <div className="flex icon-group pt-6 pb-3">
        <div className="rounded-3xl bg-[#f3f3f5] p-2">
          <FcMenu
            className="hover:cursor-pointer hover:text-[#d51f97]"
            color="#8c98a0"
            size="20"
          />
        </div>
      </div>
      <div className="flex icon-group pt-5 justify-center">
        <FiInbox
          size={24}
          className="hover:cursor-pointer hover:text-[#d51f97]"
        />
      </div>
      <div className="flex icon-group pt-5 justify-center">
        <AiOutlineStar
          size={24}
          className="hover:cursor-pointer hover:text-[#d51f97]"
        />
      </div>
      <div className="flex icon-group pt-5 justify-center">
        <BiUserCircle
          className="hover:cursor-pointer hover:text-[#d51f97]"
          size={24}
        />
      </div>
      <div className="flex icon-group pt-5 justify-center">
        <IoMdAdd
          className="hover:cursor-pointer hover:text-[#d51f97] hover:bg-[#f3f3f5] rounded-full"
          size={24}
        />
      </div>
    </div>
  );
};
