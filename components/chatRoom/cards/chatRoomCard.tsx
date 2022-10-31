import { Room } from '../../../shared/types/chatRoom.types';
import { generateHSL } from '../../../shared/utils/avatar/AvatarColorUtil';
import { generateInitials } from '../../../shared/utils/avatar/avatarInitial.util';
import { BsDot } from 'react-icons/bs';
type Props = {
  room: Room;
};
const ChatRoomCard = ({ room }: Props): JSX.Element => {
  return (
    <div className="bg-[#e8eef2] rounded px-3 py-4 hover:bg-white hover:cursor-pointer border border-[#dfe9f1]">
      <div className="flex justify-between">
        <div className="flex justify-center items-center">
          <div
            className="Avatar justify-center border-2"
            style={{ background: generateHSL(room._id) }}
          >
            {generateInitials(room.name)}
          </div>
          <div className="flex justify-center flex-col">
            <h1 className="m-0">{room.name}</h1>
            <p className="m-0 text-[#c8c8c8]">{room.description}</p>
          </div>
        </div>
        <div className="flex">
          {room && room.status == 'ACTIVE' ? (
            <BsDot className="text-green-600 text-2xl" />
          ) : (
            <BsDot className="text-red-500 text-2xl" />
          )}
        </div>
      </div>
    </div>
  );
};
export default ChatRoomCard;
