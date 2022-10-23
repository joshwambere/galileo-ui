import { Room } from "../../../shared/types/chatRoom.types";
import { generateHSL } from '../../../shared/utils/avatar/AvatarColorUtil';
import { generateInitials } from '../../../shared/utils/avatar/avatarInitial.util';
import { FiUsers } from 'react-icons/fi';

type Props = {
  chatRoom: Room;
  activeRoomHandler: any;
};
export const MessageCard = ({
  chatRoom,
  activeRoomHandler
}: Props): JSX.Element => {
  return (
    <div
      className="message-Card bg-[#f9f9f9] hover:bg-white hover:cursor-pointer border-b-2"
      onClick={() => activeRoomHandler(chatRoom)}
    >
      <div className="topRow flex items-center p-2 justify-between">
        <div className="flex">
          <div
            className="Avatar"
            style={{ background: generateHSL(chatRoom._id) }}
          >
            {generateInitials(chatRoom.name)}
          </div>
          <p className="font-bold  pl-2 text-[#6f7074] m-0">
            {chatRoom.name}
          </p>
        </div>
        <div className="flex items-center">
          <FiUsers className="text-[#6f7074]" />
          <p className="pl-1 m-0 text-[#6f7074]">12</p>
        </div>
      </div>
      <div className="ChatRoomDetails py-2 px-4">
        <p className="text-[#6f7074]">
          {chatRoom.description}
        </p>
      </div>
    </div>
  );
};
