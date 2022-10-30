import AuthWrapper from '../Auth';
import { Button, Form, InputRef } from 'antd';
import { router } from 'next/client';
import { routes } from '../../config/router.config';
import { RiFacebookLine } from 'react-icons/ri';
import { BsInstagram } from 'react-icons/bs';
import { ActivateInput } from '../../helpers/otp.input.helper';
import React, { useEffect } from 'react';
import { useVerifyMutation } from '../../services/endpoints/auth.endpoint';
import { loginRedirect } from '../../helpers/redirect.helper';
import { SuccessMessage } from '../shared/messages/SuccessMessage';
import { ErrorMessage } from '../shared/messages/ErrorMessage';

const VerifyForm = (): JSX.Element => {
  const [otp, setOtp] = React.useState('');
  const input1 = React.useRef<HTMLInputElement>(null);
  const input2 = React.useRef<HTMLInputElement>(null);
  const input3 = React.useRef<HTMLInputElement>(null);
  const input4 = React.useRef<HTMLInputElement>(null);
  const input5 = React.useRef<HTMLInputElement>(null);
  const input6 = React.useRef<HTMLInputElement>(null);
  const buttonRef = React.useRef<any>(null);

  useEffect(() => {
    ActivateInput(input1);
  }, []);

  const fillOtp = (e: any, index: number) => {
    const value = e.target.value;
    if (value.length > 1) {
      e.target.value = value[0];
    }
    if (value.length === 1) {
      switch (index) {
        case 1:
          input2.current?.focus();
          break;
        case 2:
          input3.current?.focus();
          break;
        case 3:
          input4.current?.focus();
          break;
        case 4:
          input5.current?.focus();
          break;
        case 5:
          input5.current?.focus();
          break;
        case 6:
          buttonRef.current?.focus();
          const otps = `${input1.current?.value}${input2.current?.value}${input3.current?.value}${input4.current?.value}${input5.current?.value}${input6.current?.value}`;
          setOtp(otps);
          break;
      }
    }
  };
  const [verify, { isLoading: loadingSuccess }] = useVerifyMutation();
  const onFinish = () => {
    if (otp.split('').length === 6) {
      verify({ otp })
        .unwrap()
        .then(res => {
          SuccessMessage(res.message);
          loginRedirect();
        })
        .catch(e => {
          ErrorMessage("something happened, we're working on it");
        });
    }
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
                  Verify Your Account
                  <span className="bg-[#d9e0e5] ml-2 h-0.5 w-7"></span>
                </h2>
                <h1 className="font-bold lg:text-4xl sm:text-2xl capitalize text-[#0d3856] pt-7 pb-3 leading-relaxed">
                  Verify Email
                </h1>
              </div>
            </div>
            <div className="login-divider bg-[#d9e0e5] h-0.5 w-full opacity-3 mb-4"></div>
          </div>
          <div className="w-full items-center pt-8">
            <div className="group-input-otp flex flex-col py-2 justify-start">
              <label htmlFor="email" className="text-[#8c98a0]">
                OTP
              </label>
              <div className="flex relative items-center mt-2">
                <Form.Item
                  name="username"
                  style={{ margin: 0 }}
                  className="flex gap-2 items-center"
                >
                  <input
                    className=" text-xl font-bold text-center pr-2 rounded-md h-12 w-12 focus:bg-white focus:outline-[#d51f97] bg-[#f1f6fa] w-full outline-none pl-2 login-input"
                    id="email"
                    name="username"
                    autoComplete="off"
                    type="number"
                    ref={input1}
                    onChange={e => fillOtp(e, 1)}
                  />
                  <input
                    className="text-xl font-bold text-center pr-2 rounded-md h-12 w-12 focus:bg-white focus:outline-[#d51f97] bg-[#f1f6fa] w-full outline-none pl-2 login-input"
                    id="email"
                    name="username"
                    autoComplete="off"
                    type="number"
                    ref={input2}
                    onChange={e => fillOtp(e, 2)}
                  />

                  <input
                    className=" text-xl font-bold text-center pr-2 rounded-md h-12 w-12 focus:bg-white focus:outline-[#d51f97] bg-[#f1f6fa] w-full outline-none pl-2 login-input"
                    id="email"
                    name="username"
                    autoComplete="off"
                    type="number"
                    ref={input3}
                    onChange={e => fillOtp(e, 3)}
                  />

                  <input
                    className="text-xl font-bold text-center pr-2 rounded-md h-12 w-12 focus:bg-white focus:outline-[#d51f97] bg-[#f1f6fa] w-full outline-none pl-2 login-input"
                    id="email"
                    name="username"
                    autoComplete="off"
                    type="number"
                    ref={input4}
                    onChange={e => fillOtp(e, 4)}
                  />

                  <input
                    className="text-xl font-bold text-center pr-2 rounded-md h-12 w-12 focus:bg-white focus:outline-[#d51f97] bg-[#f1f6fa] w-full outline-none pl-2 login-input"
                    id="email"
                    name="username"
                    autoComplete="off"
                    ref={input5}
                    type="number"
                    onChange={e => fillOtp(e, 5)}
                  />
                  <input
                    className="text-xl font-bold text-center pr-2 rounded-md h-12 w-12 focus:bg-white focus:outline-[#d51f97] bg-[#f1f6fa] w-full outline-none pl-2 login-input"
                    id="email"
                    name="username"
                    autoComplete="off"
                    ref={input6}
                    type="number"
                    onChange={e => fillOtp(e, 6)}
                  />
                </Form.Item>
              </div>
            </div>
            <Button
              loading={loadingSuccess}
              htmlType="submit"
              ref={buttonRef}
              className="btn_dark_red bg-[#d51f97] text-[#fff] px-4 py-3 font-bold text-lg tracking-widest rounded-3xl w-full mt-5"
            >
              verify
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
export default VerifyForm;
