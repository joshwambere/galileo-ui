import moment from 'moment/moment';
import { MessageTypes } from '../../../shared/types/message.types';
import { userResponse } from '../../../shared/types/user.types';

type Props = {
  audio: string;
  right: boolean;
  message: MessageTypes;
  user: userResponse;
};
export const AudioCard = ({
  audio,
  right,
  message,
  user
}: Props): JSX.Element => {
  return (
    <div
      className={
        right
          ? `right-bubble-cont mt-2  mb-4 relative`
          : `left-bubble-cont mt-2 mb-4 relative`
      }
    >
      <audio
        className={right ? `right-bubble text-[#d51f97]` : `left-bubble`}
        controls
        src={audio}
      />
      <cite>
        {message.sender !== user._id
          ? 'Dev'
          : moment(message.createdAt).format('LT')}{' '}
        -{' '}
        <span className="text-[#d51f97] font-medium">
          {message.sender != user._id ? message.sender : 'You'}
        </span>
      </cite>
    </div>
  );
};
