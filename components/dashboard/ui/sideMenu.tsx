import { FiInbox } from 'react-icons/fi';
import {
  AiOutlineLogout,
  AiOutlineProject,
  AiOutlineUsergroupAdd
} from 'react-icons/ai';
import { FcMenu } from 'react-icons/fc';
import { IoMdAdd } from 'react-icons/io';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../shared/redux/store';
import { token } from '../../../shared/types/token.types';
import { removeCredentials } from '../../../shared/redux/slices/auth.slice';
import { useUserLogoutMutation } from '../../../services/endpoints/auth.endpoint';
import { ErrorMessage } from '../../shared/messages/ErrorMessage';
import { useRouter } from 'next/router';

export const SideMenu = (): JSX.Element => {
  const token = useSelector((state: RootState) => state.auth.token);
  const localToken = localStorage.getItem('_galileo_tkn');
  const dispatch = useDispatch();
  const router = useRouter();

  const decodedToken: any = jwt.decode(token ? token! : localToken!);
  const { role } = decodedToken as JwtPayload & token;

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
    <div className="side-menu flex-col items-center h-screen border-r-2 py-4 px-3 relative">
      <div className="flex icon-group pt-6 pb-3">
        <div className="rounded-3xl bg-[#f3f3f5] p-2">
          <FcMenu
            className="hover:cursor-pointer hover:text-[#d51f97]"
            color="#8c98a0"
            size="20"
          />
        </div>
      </div>
      <div className="flex icon-group pt-5 justify-center">
        <FiInbox
          size={24}
          className="hover:cursor-pointer hover:text-[#d51f97]"
        />
      </div>
      {role && role === 'PM' && (
        <>
          <div className="flex icon-group pt-5 justify-center">
            <AiOutlineProject
              size={24}
              className="hover:cursor-pointer hover:text-[#d51f97]"
            />
          </div>
          <div className="flex icon-group pt-5 justify-center">
            <AiOutlineUsergroupAdd
              className="hover:cursor-pointer hover:text-[#d51f97]"
              size={24}
            />
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
        <AiOutlineLogout className="text-[#d51f97]" />
        <p className="text-[#8c98a0] text-sm pt-1 hover:text-[#d51f97]">
          Logout
        </p>
      </div>
    </div>
  );
};
