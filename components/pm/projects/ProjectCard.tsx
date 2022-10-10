import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { BsGrid, BsDot } from 'react-icons/bs';
import { IoIosAdd } from 'react-icons/io';
import { Project } from '../../../shared/types/project.types';
import moment from 'moment';

type Props = {
  data: Project;
};

const ProjectCard = ({ data }: Props) => {
  return (
    <div className="bg-[#fff] w-1/5 p-3 rounded-xl border-2 hover:cursor-pointer">
      <div className="flex items-center justify-between top">
        <div className="flex justify-between">
          <h1 className="m-0 font-medium">{data.name}</h1>
          <span className="text-[#8391a4] font-light ml-2">
            {moment(data.createdAt).format('MMM Do YY')}
          </span>
        </div>
        <span className="text-[#d51f97] flex items-center">
          <AiOutlineUsergroupAdd className="mr-1" />
          12
        </span>
      </div>
      <div className="flex justify-between py-3">
        <div className="flex flex-col w-3/4">
          <span className="text-[#8391a4]">{data.description}</span>
          <span className="flex items-center mt-2">
            <BsDot className="text-green-600" size={24} />
            <span className="text-[#8391a4] m-0 capitalize">
              {data.status.toLowerCase()}
            </span>
          </span>
        </div>
        <div className="w-1/4 flex justify-center">
          <BsGrid size={32} className="text-[#8391a4]" />
        </div>
      </div>
      <div>
        <span className="bg-[#d51f97] border-transparent border-2 text-white flex items-center w-1/2 justify-center py-1 rounded hover:text-[#d51f97] hover:bg-[#fff] hover:border-slate-800 ">
          <IoIosAdd className="mr-1" />
          Create Room
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
