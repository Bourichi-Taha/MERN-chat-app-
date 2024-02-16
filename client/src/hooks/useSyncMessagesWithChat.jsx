import { useEffect, useReducer } from 'react';
import { useGetMessagesQuery } from '../features/message/messageApiSlice';
import { useGetChatsQuery } from '../features/chat/chatApiSlice';

const initialState = {
  messages: [],
  prevMessages: [],
};
const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_MESSAGES':
        return {
          ...state,
          messages: action.payload,
        };
      case 'UPDATE_PREV_MESSAGES':
        return {
          ...state,
          prevMessages: state.messages,
        };
      default:
        return state;
    }
  };

const useSyncMessagesWithChat = ({ chatId }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { messages, prevMessages } = state;

  const { data: messagesData, isLoading: messagesLoading } = useGetMessagesQuery(chatId, {
    pollingInterval: 1000,
    skipPollingIfUnfocused: true,
  });

  const { refetch: refetchChats } = useGetChatsQuery(); // Assume you have a useGetChatsQuery hook

  useEffect(() => {
    if (!messagesLoading) {
      dispatch({ type: 'SET_MESSAGES', payload: messagesData || [] });
    }
  }, [messagesData, messagesLoading]);

  useEffect(() => {
    if (messages.length !== prevMessages.length) {
      refetchChats(); // Trigger refetch of chats if messages length changes
      dispatch({ type: 'UPDATE_PREV_MESSAGES' });
    }
  }, [messages, prevMessages, refetchChats]);

  return messages;
};

export default useSyncMessagesWithChat;
