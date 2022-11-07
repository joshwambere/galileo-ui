import { IMember } from '../../../shared/types/chatRoom.types';
import { generateHSL } from '../../../shared/utils/avatar/AvatarColorUtil';
import { generateInitials } from '../../../shared/utils/avatar/avatarInitial.util';
import React from 'react';
import { RiRadioButtonLine } from 'react-icons/ri';

type Props = {
  member: IMember;
};
export const RoomMember = ({ member }: Props): JSX.Element => {
  return (
    <div className="flex p-2">
      <div className="member-avatar flex  items-center w-full ">
        <div
          className=" w-10 h-10 rounded-full flex items-center justify-center text-xl text-white"
          style={{ background: member && generateHSL(member.user_id._id) }}
        >
          {member && generateInitials(member.user_id.userName)}
        </div>
        <div className="infos justify-around pl-3">
          <h1>{member.user_id.userName}</h1>
          <span className="text-neutral-400">{member.user_id.email}</span>
        </div>
        <div className="flex ml-auto">
          {member.user_id && member.user_id.online ? (
            <RiRadioButtonLine className={`text-red-400 text-neutral-400`} />
          ) : null}
        </div>
      </div>
    </div>
  );
};
