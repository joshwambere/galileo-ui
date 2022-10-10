import { message } from 'antd';

export const SuccessMessage = (text: string | undefined) => {
  return (
    <>
      {message.success({
        content: text ? text : 'Something went wrong. Please contact us',
        duration: 5,
        style: {
          marginTop: '5vh'
        }
      })}
    </>
  );
};
