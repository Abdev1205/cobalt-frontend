import { useState, useEffect, useCallback } from 'react';
import api from '@/utils/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useSlackMessages = () => {
  const [messages, setMessages] = useState([]);
  const [shouldFetchMessages, setShouldFetchMessages] = useState(true);


  const sendMessage = async (text) => {
    try {
      await api.post('/api/slack/message', { text }, { withCredentials: true });
      setShouldFetchMessages(!shouldFetchMessages);
      toast.success("Message sent", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setShouldFetchMessages(true);
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };


  return {
    sendMessage,
    fetch: shouldFetchMessages
  };
};

export default useSlackMessages;
