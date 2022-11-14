import React, { FC, ForwardedRef, useEffect } from 'react';

type MessageListTypes = {
  children: React.ReactNode;
  ref: ForwardedRef<HTMLDivElement>;
};

// eslint-disable-next-line react/display-name
export const MessageList: FC<MessageListTypes> = React.forwardRef(
  ({ children }, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const scrollToBottom = () => {
      // @ts-ignore
      ref.current.scrollIntoView({ behavior: 'smooth' });
    };
    useEffect(scrollToBottom, [children]);
    return <div className="messageList flex-1 min-h-full">{children}</div>;
  }
);
