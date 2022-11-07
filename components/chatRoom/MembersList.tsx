import { RoomMember } from './cards/RoomMember';
import { IMember } from '../../shared/types/chatRoom.types';
import { useContext, useState } from 'react';
import { SocketContext } from '../../contexts/socket.context';
type Props = {
  members: IMember[];
};

export const MembersList = ({ members }: Props): JSX.Element => {
  const socket = useContext(SocketContext);
  const [onlineMembers, setOnlineMembers] = useState(members);
  socket.on('online', data => {
    setOnlineMembers(data);
  });

  return (
    <>
      <span className="text-[#d51f97] font-bold pt-2 pl-2 underline-offset-3 underline">
        Participants
      </span>
      {onlineMembers &&
        onlineMembers.map(member => (
          <RoomMember key={member.user_id._id} member={member} />
        ))}
    </>
  );
};
