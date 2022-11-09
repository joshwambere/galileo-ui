export const MediaType = (message: string) => {
  const regex = /https?:\/\/\S+\/([A-Za-z0-9]*)\.([A-Za-z]*)/;
  const match = message.match(regex)![2];
  switch (match) {
    case 'jpg':
    case 'jpeg':
    case 'png':
    case 'gif':
      return 'IMAGE';
    case 'webm':
      return 'AUDIO';
    default:
      return 'FILE';
  }
};

export const MessageType = (message: string) => {
  const regex = /https?:\/\/\S+\/([A-Za-z0-9]*)\.([A-Za-z]*)/gm;
  const match = message.match(regex);
  if (match) {
    return MediaType(message);
  } else {
    return 'TEXT';
  }
};
