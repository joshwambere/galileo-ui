import { message } from 'antd';

export const ErrorMessage = (text: string | undefined) => {
  return (
    <>
      {
        console.log('=============')
      }
      {message.error({
        content: text ? text : 'Something went wrong. Please contact us',
        duration: 5,
        style: {
          marginTop: '5vh'
        }
      })}
    </>
  );
};
