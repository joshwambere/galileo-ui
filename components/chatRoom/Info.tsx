import { InfoHeader } from './InfoHeader';
import { Room } from '../../shared/types/chatRoom.types';
import { MembersList } from './MembersList';

type Props = {
  chatRoom: Room;
};

export const Info = ({ chatRoom }: Props): JSX.Element => {
  return (
    <div className="w-full pt-3 sticky top-0 ">
      <InfoHeader room={chatRoom} />
      <MembersList members={chatRoom.members} />
    </div>
  );
};
