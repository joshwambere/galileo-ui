import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ChatRoom } from '../../types/chatRoom.types';

const initialState: ChatRoom = {
  chatRoom: {
    id: '',
    name: ''
  },
  messages: [],
  members: []
};
const chatRoomSlice = createSlice({
  name: 'chatRoom',
  initialState,
  reducers: {
    activateChatRoom(state, action: PayloadAction<ChatRoom>) {
      state = action.payload;
    }
  }
});

export const { activateChatRoom } = chatRoomSlice.actions;
export default chatRoomSlice.reducer;
