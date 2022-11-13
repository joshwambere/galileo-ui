import { Button, Form } from 'antd';
import { RiFacebookLine } from 'react-icons/ri';
import { BsInstagram } from 'react-icons/bs';
import AuthWrapper from '../Auth';
import React from 'react';

import { usernameValidation } from '../../shared/utils/validations/formValidation';
import { TiUserOutline } from 'react-icons/ti';
import { useForgotPasswordMutation } from '../../services/endpoints/auth.endpoint';
import { useRouter } from 'next/router';
import { routes } from '../../config/router.config';
import { ErrorMessage } from "../shared/messages/ErrorMessage";

const ForgotPassword = () => {
  const [forgotPassword, { isLoading: isLoading }] =
    useForgotPasswordMutation();
  const router = useRouter();
  const onFinish = (value: any) => {
    forgotPassword({ email: value?.email })
      .unwrap()
      .then(res => {
        router.push(routes.forgotPasswordSuccess.url);
      })
      .catch(e => {
        ErrorMessage(e.message ? e.message : 'Error sending email');
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
        className="login-form px-2 lg:w-1/3 sm:w-2/3 sm:mr-4  flex flex-col items-center"
      >
        <div className="px-4 h-full flex flex-col justify-center form-inputs lg:mb-6">
          <div>
            <div className="title-section lg:pb-7 sm:pb-3">
              <div className="flex flex-col pb-2">
                <h2 className="font-light pt-5 opacity-7 text-[#8c98a0] flex items-center">
                  Forgot Your Password?
                  <span className="bg-[#d9e0e5] ml-2 h-0.5 w-7"></span>
                </h2>
                <h1 className="font-bold lg:text-4xl sm:text-2xl capitalize text-[#0d3856] pt-7 pb-3 leading-relaxed">
                  Get a new Password
                </h1>
              </div>
              <div className="">
                <div className="group-input flex flex-col py-2">
                  <label htmlFor="password" className="text-[#8c98a0] pt-4">
                    Email
                  </label>
                  <div className=" relative flex items-center bg-[#f1f6fa] rounded-3xl px-4 lg:py-2 sm:py-1 focus:bg-white input-group mt-2">
                    <TiUserOutline color="#8c98a0" size="20" />

                    <Form.Item
                      name="email"
                      rules={usernameValidation}
                      style={{ margin: 0 }}
                    >
                      <input
                        className="bg-transparent w-full outline-none pl-2 login-input"
                        type="text"
                        id="email"
                        name="email"
                      />
                    </Form.Item>
                  </div>
                </div>
                <div>
                  <span
                    className="flex justify-end text-[#8c98a0] pt-2 hover:text-[#d51f97] hover:cursor-pointer"
                    onClick={() => router.replace(routes.login.url)}
                  >
                    Login
                  </span>
                </div>
              </div>
              <Button
                loading={isLoading}
                htmlType="submit"
                className="btn_dark_red bg-[#d51f97] text-[#fff] px-4 py-3 font-bold text-lg tracking-widest rounded-3xl w-full mt-5"
              >
                Send
              </Button>
            </div>
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

export default ForgotPassword;
