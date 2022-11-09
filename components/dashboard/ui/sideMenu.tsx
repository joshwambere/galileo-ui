import { FiInbox } from 'react-icons/fi';
import {
  AiOutlineLogout,
  AiOutlineProject,
  AiOutlineUsergroupAdd
} from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../shared/redux/store';
import { token } from '../../../shared/types/token.types';
import { removeCredentials } from '../../../shared/redux/slices/auth.slice';
import { useUserLogoutMutation } from '../../../services/endpoints/auth.endpoint';
import { ErrorMessage } from '../../shared/messages/ErrorMessage';
import { useRouter } from 'next/router';
import { changeRoute } from '../../../helpers/routeHandler.helper';
import { routes } from '../../../config/router.config';
import { generateHSL } from '../../../shared/utils/avatar/AvatarColorUtil';
import { generateInitials } from '../../../shared/utils/avatar/avatarInitial.util';
import React from 'react';
import Image from 'next/image';
import { Tooltip } from 'antd';

export const SideMenu = (): JSX.Element => {
  const token = useSelector((state: RootState) => state.auth.token);
  const localToken = localStorage.getItem('_galileo_tkn');
  const dispatch = useDispatch();
  const router = useRouter();

  const decodedToken: any = jwt.decode(token ? token! : localToken!);
  const { role, _id } = decodedToken as JwtPayload & token;
  const user = useSelector((state: any) => state.auth.user);

  const [userLogout, { isLoading: Loading }] = useUserLogoutMutation();

  const Logout = () => {
    userLogout()
      .unwrap()
      .then(_res => {
        localToken && localStorage.removeItem('_galileo_tkn');
        token && dispatch(removeCredentials());
        router.replace('/auth/login');
      })
      .catch(e => {
        ErrorMessage('something went wrong');
      });
  };

  return (
    <div className="side-menu  flex-col items-center h-screen border-r-2 py-4 px-3 relative">
      <div className="flex icon-group pt-6 pb-3">
        <div
          className="rounded-3xl bg-[#f3f3f5] p-2 flex  justify-center items-center hover:cursor-pointer"
          onClick={() => router.replace(routes.profile.url)}
        >
          {user ? (
            <Tooltip placement="right" title={'Account'}>
              <Image
                src={user.profileImage}
                width={20}
                height={20}
                className="rounded-full"
                alt="profile"
              />
            </Tooltip>
          ) : (
            <Tooltip placement="right" title={'Account'}>
              <div
                className="Avatar hover:cursor"
                style={{ background: _id && generateHSL(_id) }}
              >
                {user && generateInitials(user.userName)}
              </div>
            </Tooltip>
          )}
        </div>
      </div>
      <div
        className="flex icon-group pt-5 justify-center"
        onClick={() => changeRoute(routes.chat.url)}
      >
        <Tooltip placement="right" title={routes.chat.name}>
          <FiInbox
            size={24}
            className="hover:cursor-pointer hover:text-[#d51f97]"
          />
        </Tooltip>
      </div>
      {role && role === 'PM' && (
        <>
          <div
            className="flex icon-group pt-5 justify-center"
            onClick={() => changeRoute(routes.pm.url)}
          >
            <Tooltip placement="right" title={routes.pm.name}>
              <AiOutlineProject
                size={24}
                className="hover:cursor-pointer hover:text-[#d51f97]"
              />
            </Tooltip>
          </div>
          <div
            className="flex icon-group pt-5 justify-center"
            onClick={() => changeRoute(routes.chatRoom.url)}
          >
            <Tooltip placement="right" title={routes.chatRoom.name}>
              <AiOutlineUsergroupAdd
                className="hover:cursor-pointer hover:text-[#d51f97]"
                size={24}
              />
            </Tooltip>
          </div>
        </>
      )}
      <div className="flex icon-group pt-5 justify-center">
        <IoMdAdd
          className="hover:cursor-pointer hover:text-[#d51f97] hover:bg-[#f3f3f5] rounded-full"
          size={24}
        />
      </div>
      <div
        onClick={Logout}
        className="logout flex flex-col items-center absolute bottom-0 hover:cursor-pointer pb-3"
      >
        <Tooltip
          placement="right"
          title="Logout"
          className="flex justify-center flex-col items-center"
        >
          <AiOutlineLogout className="text-[#d51f97]" />
          <p className="text-[#8c98a0] text-sm pt-1 hover:text-[#d51f97]">
            Logout
          </p>
        </Tooltip>
      </div>
    </div>
  );
};
