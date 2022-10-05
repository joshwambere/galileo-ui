import React from 'react';

export const useChatScroll = (
  dep: any,
): React.MutableRefObject<HTMLDivElement> => {
  const ref = React.useRef<HTMLDivElement>();
  React.useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [dep]);
  // @ts-ignore
  return ref;
};
