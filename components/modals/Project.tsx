import { Modal } from 'antd';
import React from 'react';

type Props = {
  children: React.ReactNode;
  open?: boolean;
  confirmLoading?: boolean;
  onCancel?: any;
  title?: string;
};
const Project = ({ children, open, title, onCancel }: Props): JSX.Element => {
  return (
    <Modal
      onCancel={onCancel}
      closable={true}
      title={title}
      open={open}
      footer={null}
    >
      {children}
    </Modal>
  );
};

export default Project;
