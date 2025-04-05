import React, { useEffect, useRef, useState } from 'react';
import ChatContainer from '../components/ChatContainer';
import { createActor, canisterId } from '../../../declarations/backend';
import { RiRobot3Fill } from 'react-icons/ri';
import { BsFillSendFill, BsTrash } from 'react-icons/bs';

interface Chat {
  type: 'user' | 'ai';
  content: string;
  timestamp?: Date;
}

type Mode = 'chat';

const Chat: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [currentChats, setCurrentChats] = useState<Chat[]>([]);
  const [userInput, setUserInput] = useState('');
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [currentChats]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  async function fetchAIResponse(message: string): Promise<string> {
    try {
      const response = await fetch('https://studious-orbit-r4pj5pg7r64xfxx4r-3000.app.github.dev/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();
      console.log("AI Response:", data); // This logs the full response object
  
      // Extracting the prompt content from the response
      const aiReply = data.prompt || 'Sorry, I couldn’t understand the response.';
      return aiReply;
    } catch (error) {
      console.error('Error fetching AI response:', error);
      return 'Sorry, I encountered an error processing your request.';
    }
  }
  

  const handleUserSubmit = async () => {
    const trimmedInput = userInput.trim();
    if (!trimmedInput || loading) return;

    const userChat: Chat = { type: 'user', content: trimmedInput, timestamp: new Date() };
    setCurrentChats((prevChats) => [...prevChats, userChat, { type: 'ai', content: 'Thinking...', timestamp: new Date() }]);
    setLoading(true);
    setUserInput('');

    try {
      const aiResponse = await fetchAIResponse(trimmedInput);
      setCurrentChats((prevChats) => {
        const newChats = [...prevChats];
        newChats.pop();
        newChats.push({ type: 'ai', content: aiResponse, timestamp: new Date() });
        return newChats;
      });
    } catch (error) {
      setCurrentChats((prevChats) => {
        const newChats = [...prevChats];
        newChats.pop();
        newChats.push({ type: 'ai', content: 'Sorry, I could not generate a response.', timestamp: new Date() });
        return newChats;
      });
    } finally {
      setLoading(false);
      if (inputRef.current) inputRef.current.focus();
    }
  };

  return (
    <main style={{ 
      width: '75%', 
      background: 'linear-gradient(to right, #8C0CE8, #140A9D)'
    }} className="flex flex-col items-center h-screen min-w-screen pt-12 bg-gray-100 rounded-md max-w-4xl mx-auto font-sans tracking-tight">
      <h1 className="text-center font-sans tracking-tighter text-white flex items-center gap-2 text-4xl font-semibold my-4">
        <RiRobot3Fill size={24} className="text-purple-500" /> chain-ED Chat
      </h1>

      <div className="relative h-3/4 border border-gray-400 bg-white rounded-md w-full max-w-3xl overflow-hidden">
        <div ref={chatContainerRef} className="h-[calc(100%-80px)] overflow-y-auto p-4 flex flex-col">
          {currentChats.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-xl text-gray-400">Send a message to start the conversation</p>
            </div>
          )}
          <div className="flex-grow space-y-2 pb-4">
            {currentChats.map((item, index) => (
              <ChatContainer key={index} chat={item} />
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center absolute bottom-0 border-t border-gray-400 px-8 w-full h-20 bg-white">
          <input
            ref={inputRef}
            className="w-full text-lg mx-4 focus:outline-none p-2"
            placeholder="Type a message..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleUserSubmit()}
            disabled={loading}
          />
          <button
            className="ml-2 rounded-lg px-4 py-2 bg-purple-500 text-white hover:bg-purple-600"
            onClick={handleUserSubmit}
            disabled={loading || !userInput.trim()}
          >
            <BsFillSendFill  size={20} />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Chat;
