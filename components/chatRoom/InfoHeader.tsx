import { FiMoreHorizontal } from 'react-icons/fi';
import { generateHSL } from '../../shared/utils/avatar/AvatarColorUtil';
import { generateInitials } from '../../shared/utils/avatar/avatarInitial.util';
import React from 'react';
import { Room } from '../../shared/types/chatRoom.types';
import moment from 'moment';
type Props = {
  room: Room;
};
export const InfoHeader = ({ room }: Props): JSX.Element => {
  return (
    <div className="flex flex-col w-full px-2">
      <div className="more-info flex justify-end items-center">
        <FiMoreHorizontal />
      </div>
      <div className="profile flex flex-col justify-center items-center border-b-2">
        <div
          className=" w-20 h-20 rounded-full flex items-center justify-center text-4xl text-white"
          style={{ background: room && generateHSL(room._id) }}
        >
          {room && generateInitials(room.name)}
        </div>
        <div className="name flex flex-col justify-center">
          <h1 className="font-medium text-2xl text-center capitalize pt-2">
            {room.name}
          </h1>
          <span className="text-neutral-300 text-center pb-2">
            {moment(room.createdAt).format('Do MMM YYYY')}
          </span>
          <span className="text-neutral-300 text-center pb-2 font-xl">
            {' '}
            {room.creator &&
              room.creator.user_id &&
              `@ ${room.creator.user_id.userName}`}
          </span>
        </div>
      </div>
    </div>
  );
};
