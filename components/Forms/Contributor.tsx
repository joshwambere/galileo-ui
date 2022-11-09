import { Button, Form, Input } from 'antd';
import React from 'react';
import { SuccessMessage } from '../shared/messages/SuccessMessage';
import { ErrorMessage } from '../shared/messages/ErrorMessage';
import { useInviteMutation } from '../../services/endpoints/project.endpoint';
import { usernameValidation } from '../../shared/utils/validations/formValidation';

type Props = {
  open?: boolean;
  setOpen?: any;
  id?: any;
};

const Projects = ({ open, setOpen, id }: Props): JSX.Element => {
  const [invite, { isLoading: projectLoading }] = useInviteMutation();
  const onFinish = (values: any) => {
    invite({ email: values?.email, projectId: id })
      .unwrap()
      .then((res: any) => {
        SuccessMessage(res.message);
        setOpen(false);
      })
      .catch((err: any) => {
        ErrorMessage(
          err?.data.message ? err?.data.message : 'Error inviting user'
        );
      });
  };
  return (
    <div className="flex flex-col">
      <Form onFinish={onFinish}>
        <div className="">
          <label htmlFor="email">Contributor Email</label>
          <Form.Item name="email" rules={usernameValidation}>
            <Input name="email" id="email" />
          </Form.Item>
        </div>
        <div className="pt-2 flex justify-end">
          <Button
            loading={projectLoading}
            htmlType="submit"
            type="primary"
            className="btn_dark_red"
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Projects;
