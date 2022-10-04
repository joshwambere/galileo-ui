import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { Input } from 'antd';
import { MessageCard } from '../cards/MessageCard';
import { ChatRoom } from '../../../shared/types/chatRoom.types';


type Props = {
  charRooms: ChatRoom[];
};
export const MessageMenu = ({ charRooms }: Props): JSX.Element => {
  return (
    <div className="flex flex-col w-1/5 border-r-2">
      <div className="back-icon flex justify-end pt-3">
        <MdOutlineKeyboardArrowLeft className="text-[#717377]" size={24} />
        <MdOutlineKeyboardArrowLeft
          className="text-[#717377] backout"
          size={24}
        />
      </div>
      <div className="flex px-4 py-4 justify-between items-center">
        <h2 className="font-bold text-2xl">Message</h2>
        <span className="text-[#717377]">Recent</span>
      </div>
      <div className="search px-2">
        <Input.Search className="searchInput" placeholder="search" />
      </div>
      <div className="border-t-2 mt-3">
        {charRooms &&
          charRooms.map((item, index) => {
            return <MessageCard chatRoom={item} key={index} />;
          })}
      </div>
    </div>
  );
};
