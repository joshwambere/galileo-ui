export const FRONT_END_URL = process.env.NEXT_PUBLIC_API_URL;
export const { NEXT_PUBLIC_SOCKET_URL } = process.env;
export const { NEXT_PUBLIC_API_SECRETE } = process.env;
export const { NEXT_PUBLIC_CLOUDINARY_URL } = process.env;
export const { NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET } = process.env;

export const STEPS = [
  {
    element: '.chat-section',
    intro: 'This is the chat section',
    position: 'right',
    tooltipClass: 'chat-section',
    highlightClass: 'ChatRooms'
  },
  {
    element: '.project-section',
    intro: 'This is the Project section',
    position: 'right',
    tooltipClass: 'chat-section',
    highlightClass: 'ChatRooms'
  },
  {
    element: '.rooms-section',
    intro: 'This is the All chat rooms section',
    position: 'right',
    tooltipClass: 'chat-section',
    highlightClass: 'ChatRooms'
  }
];
export const STEPS_USER = [
  {
    element: '.chat-section',
    intro: 'This is the chat section',
    position: 'right',
    tooltipClass: 'chat-section',
    highlightClass: 'ChatRooms'
  }
];
