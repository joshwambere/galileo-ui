import { Button, Form } from 'antd';
import { passwordValidation } from '../../shared/utils/validations/formValidation';
import { FiLock } from 'react-icons/fi';
import { routes } from '../../config/router.config';
import { RiFacebookLine } from 'react-icons/ri';
import { BsInstagram } from 'react-icons/bs';
import { useRouter } from 'next/router';
import AuthWrapper from '../Auth';
import { useResetPasswordMutation } from '../../services/endpoints/auth.endpoint';
import { ErrorMessage } from '../shared/messages/ErrorMessage';

const ResetPassword = () => {
  const router = useRouter();
  const [resetPassword, { isLoading: isLoading }] = useResetPasswordMutation();
  const { token } = useRouter().query;
  const onFinish = (values: any) => {
    resetPassword({ password: values?.password, token: token?.toString()! })
      .unwrap()
      .then((_res: any) => {
        router.replace(routes.login.url);
      })
      .catch((e: any) => {
        if (e.status === 'FETCH_ERROR') {
          ErrorMessage('Network Error');
        } else {
          ErrorMessage(
            e.data.message ? e.data.message : 'Error Resetting Password'
          );
        }
      });
  };
  return (
    <AuthWrapper>
      <Form
        name="Login"
        onFinish={onFinish}
        style={{
          padding: '0 1rem'
        }}
        className="login-form lg:px-2 sm:px-1 lg:w-1/3 sm:w-2/3 xs:w-full sm:mr-4  xs:mx-1 flex flex-col items-center"
      >
        <div className="lg:px-4 sm:px-2 h-full flex flex-col justify-center form-inputs lg:mb-6">
          <div>
            <div className="title-section lg:pb-7 sm:pb-3">
              <div className="flex flex-col pb-2">
                <h2 className="font-light pt-5 opacity-7 text-[#8c98a0] flex items-center">
                  Reset Password
                  <span className="bg-[#d9e0e5] ml-2 h-0.5 w-7"></span>
                </h2>
                <h1 className="font-bold lg:text-4xl sm:text-2xl capitalize text-[#0d3856] pt-7 pb-3 leading-relaxed">
                  Generate a new password
                </h1>
              </div>
            </div>
            <div className="login-divider bg-[#d9e0e5] h-0.5 w-full opacity-3 mb-4"></div>
          </div>
          <div className="w-full items-center lg:pt-8 xs:pt-4">
            <div className="group-input flex flex-col py-2">
              <label htmlFor="password" className="text-[#8c98a0] pt-4">
                New Password
              </label>
              <div className=" relative flex items-center bg-[#f1f6fa] rounded-3xl px-4 lg:py-2 sm:py-1 focus:bg-white input-group mt-2">
                <FiLock color="#8c98a0" />

                <Form.Item
                  name="password"
                  rules={passwordValidation}
                  style={{ margin: 0 }}
                >
                  <input
                    className="bg-transparent w-full outline-none pl-2 login-input"
                    type="password"
                    id="password"
                    name="password"
                  />
                </Form.Item>
              </div>
            </div>
            <Button
              loading={isLoading}
              htmlType="submit"
              className="btn_dark_red bg-[#d51f97] text-[#fff] px-4 py-3 font-bold text-lg tracking-widest rounded-3xl w-full mt-5"
            >
              Reset Password
            </Button>
          </div>
        </div>

        <div className=" flex pt-3 w-full px-3 items-center justify-center bg-[#d51f97] self-end bottom-section ">
          <span className=" h-0.5 bg-[#d9e0e5] w-1/4 mr-3"></span>
          <RiFacebookLine className="text-[#d9e0e5] text-lg mx-1" />
          <BsInstagram className="text-[#d9e0e5] text-md mx-1" />
          <span className=" h-0.5 bg-[#d9e0e5] w-1/4 ml-3"></span>
        </div>
      </Form>
    </AuthWrapper>
  );
};
export default ResetPassword;
