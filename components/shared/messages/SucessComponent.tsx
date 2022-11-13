import { Button } from 'antd';
import React from 'react';
import { useRouter } from 'next/router';
import { routes } from '../../../config/router.config';

const SuccessComponent = () => {
  const router = useRouter();
  return (
    <div className="flex flex-nowrap flex-col">
      <div className="box">
        <div className="success alert">
          <div className="alert-body">Success !</div>
        </div>
      </div>
      <div>
        <div>
          <Button
            loading={false}
            htmlType="submit"
            onClick={() => router.replace(routes.login.url)}
            className="btn_dark_red bg-[#d51f97] text-[#fff] px-4 py-3 font-bold text-lg tracking-widest rounded-3xl w-full mt-5"
          >
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessComponent;
