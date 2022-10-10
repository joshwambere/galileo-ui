import { BaseApi } from '../api/api';
import {
  ChatRoomRequest,
  ChatRoomResponse,
  ChatRoomsResponse
} from '../../shared/types/chatRoom.types';

const chatRoomEndpoint = BaseApi.injectEndpoints({
  endpoints: builder => ({
    charRooms: builder.query<ChatRoomsResponse, void>({
      query: () => ({
        url: 'chatRoom',
        method: 'GET'
      }),
      providesTags: ['ChatRoom']
    }),
    chatRoom: builder.mutation<ChatRoomResponse, ChatRoomRequest>({
      query: credentials => ({
        url: `chatRoom`,
        method: 'POST',
        body: credentials,
        credentials: 'include'
      }),
      invalidatesTags: ['ChatRoom']
    })
  })
});

export const { useChatRoomMutation, useCharRoomsQuery } = chatRoomEndpoint;
