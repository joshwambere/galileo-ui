import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const smallLoadingIcon = (
  <LoadingOutlined style={{ fontSize: 25, color: '#d51f97' }} spin />
);
const loadingIcon = (
  <LoadingOutlined style={{ fontSize: 24, color: '#d51f97' }} spin />
);

export const AppLoadingLoader = () => {
  const spinIcon = (
    <LoadingOutlined style={{ fontSize: 30, color: '#d51f97' }} spin />
  );
  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        position: 'relative'
      }}
    >
      <span className="red_text font-bold text-lg">EQUITY</span>
      <br />
      <div style={{ marginTop: '1em' }}>
        <Spin indicator={spinIcon} />
      </div>
    </div>
  );
};

export const SmallSpinLoader = () => {
  return <Spin indicator={smallLoadingIcon} />;
};
