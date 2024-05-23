import React, { useEffect, useState, useCallback, useRef } from 'react';
import useSlackMessages from '@/hooks/useSlackMessages';
import useSession from '@/hooks/useSession';
import api from '@/utils/axios';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);
  const [text, setText] = useState('');
  const { sendMessage } = useSlackMessages();

  const fetchMessages = async () => {
    try {
      const response = await api.get('/api/slack/message', { withCredentials: true });
      setMessages(response.data.message.reverse());
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (text.trim()) {
      await sendMessage(text);
      setText('');
      fetchMessages();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className='relative h-[calc(100vh-11vh)]'>
      <div className='w-[100%] h-[calc(100vh-26vh)] flex justify-end overflow-y-auto px-[5rem] py-[1.5rem]'>
        <div className='flex flex-col items-end gap-[1.5rem] w-full'>
          {messages && messages.map((data) => (
            <div key={data.ts} className='bg-[#525252] px-[1rem] py-[1rem] rounded-tl-lg rounded-tr-lg rounded-bl-lg max-w-[50rem] w-fit'>
              <h2>{data.text}</h2>
            </div>
          ))}
          <div ref={messagesEndRef}></div>
        </div>
      </div>

      <div className="absolute flex bottom-[1rem] w-[100%] px-[5rem] min-h-[3.5rem] max-h-[10rem]">
        <div className="flex mx-auto justify-center items-center py-[.5rem] px-[.5rem] rounded-full bg-[#1C1C1C] w-[70%] max-h-[10rem]">
          <input
            placeholder="Message"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="rounded-lg bg-[#1C1C1C] w-[90%] min-h-[3.5rem] max-h-[10rem] outline-none px-[1rem]"
          />
          <button
            onClick={handleSendMessage}
            className="text-black bg-white rounded-full h-[3.5rem] w-[6rem] flex justify-center items-center"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
