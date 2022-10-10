import { Button } from 'antd';
import { IoIosAdd } from 'react-icons/io';
type Props = {
  setOpen: (value: boolean) => void;
};
const Filter = ({ setOpen }: Props): JSX.Element => {
  return (
    <div className="flex items-center py-7 justify-between border-b px-2">
      <div className="flex">
        <h1 className="font-medium text-2xl m-0">Projects</h1>
        <div className="flex items-center">
          <span
            className="
           py-2 px-4 bg-[#d51f97]
           mx-2 rounded
           text-white tracking-wide
           hover:cursor-pointer
           hover:bg-white
           hover:text-[#d51f97]
           "
          >
            Arrival
          </span>
          <span
            className="
          py-2 px-4 bg-[#d51f97]
          mx-2 rounded text-white
          tracking-wide
          hover:cursor-pointer
          hover:bg-white
          hover:text-[#d51f97]
            "
          >
            Suspended
          </span>
          <span
            className="
          py-2 px-4 bg-[#d51f97]
          mx-2 rounded text-white
          tracking-wide
          hover:cursor-pointer
          hover:bg-white
          hover:text-[#d51f97]
        "
          >
            Completed
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <Button
          type="primary"
          className="btn_dar_red_icons"
          onClick={() => setOpen(true)}
        >
          <IoIosAdd size={24} className="mr-1" />
          Create Project
        </Button>
      </div>
    </div>
  );
};

export default Filter;
