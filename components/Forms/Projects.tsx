import { Button, Form, Input } from 'antd';
import React from 'react';
import { SuccessMessage } from '../shared/messages/SuccessMessage';
import { ErrorMessage } from '../shared/messages/ErrorMessage';
import { useProjectMutation } from '../../services/endpoints/project.endpoint';
import { requiredInput } from '../../shared/utils/validations/formValidation';

type Props = {
  open?: boolean;
  setOpen?: any;
};

const Projects = ({ open, setOpen }: Props): JSX.Element => {
  const [project, { isLoading: projectLoading, isSuccess: projectSuccess }] =
    useProjectMutation();
  const onFinish = (values: any) => {
    project({ name: values?.projectName, description: values?.description })
      .unwrap()
      .then((res: any) => {
        SuccessMessage(res.message);
        setOpen(false);
      })
      .catch((err: any) => {
        ErrorMessage(err?.data.message);
      });
  };
  return (
    <div className="flex flex-col">
      <Form onFinish={onFinish}>
        <div className="">
          <label htmlFor="name">Name</label>
          <Form.Item name="projectName" rules={requiredInput}>
            <Input name="name" id="projectName" />
          </Form.Item>
        </div>
        <div className="mt-2">
          <label htmlFor="name">Description</label>
          <Form.Item name="description" rules={requiredInput}>
            <Input.TextArea name="description" id="projectDescription" />
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
