import React, { FC, ForwardedRef } from 'react';

type MessageListTypes = {
  children: React.ReactNode;
  ref: ForwardedRef<HTMLDivElement>;
};

// eslint-disable-next-line react/display-name
export const MessageList: FC<MessageListTypes> = React.forwardRef(
  ({ children }, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    return (
      <>
        <div ref={ref} className="messageList flex-1">
          {children}
        </div>
      </>
    );
  }
);
