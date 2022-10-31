import { BaseApi } from '../api/api';
import {
  ChatRoomMessageRequest,
  ChatRoomMessageResponse,
  ChatRoomRequest,
  ChatRoomResponse,
  ChatRoomsResponse
} from '../../shared/types/chatRoom.types';

const chatRoomEndpoint = BaseApi.injectEndpoints({
  endpoints: builder => ({
    chatRooms: builder.query<ChatRoomsResponse, void>({
      query: () => ({
        url: 'chatRoom/usersRoom',
        method: 'GET',
        credentials: 'include'
      }),
      providesTags: ['ChatRoom']
    }),
    chatMessages: builder.query<
      ChatRoomMessageResponse,
      ChatRoomMessageRequest
    >({
      query: room => ({
        url: `chatRoom/messages/${room.chatRoomId}`,
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

export const {
  useChatRoomMutation,
  useLazyChatRoomsQuery,
  useChatMessagesQuery
} = chatRoomEndpoint;
