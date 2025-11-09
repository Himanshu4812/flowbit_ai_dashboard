import { useState } from 'react';
import ChatMessage from '@/components/chat/ChatMessage';
import ChatInput from '@/components/chat/ChatInput';
import { ChatMessageData } from '@/lib/types';
import ThinkingIndicator from '@/components/chat/ThinkingIndicator';
import { chatMessages as mockApiResponse } from '@/lib/mockData';
import { Bot } from 'lucide-react';

const Chat = () => {
  const [messages, setMessages] = useState<ChatMessageData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSendMessage = async (message: string) => {
    const userMessage: ChatMessageData = { sender: 'user', content: message };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate API call to Vanna/Groq backend
    try {
      // In a real app, you would use fetch:
      // const response = await fetch(import.meta.env.VITE_API_URL, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ question: message }),
      // });
      // if (!response.ok) {
      //   throw new Error('Network response was not ok');
      // }
      // const aiMessage: ChatMessageData = await response.json();

      // For demonstration, we simulate the API call.
      // The artificial delay is removed to prevent a recurring runtime error in this environment.
      const aiMessage = mockApiResponse.find(m => m.sender === 'ai');

      if (aiMessage) {
        setMessages(prev => [...prev, aiMessage]);
      } else {
        throw new Error("No mock AI response found.");
      }

    } catch (error) {
      console.error("Failed to get response from AI", error);
      const errorMessage: ChatMessageData = { sender: 'ai', content: 'Sorry, something went wrong. Please try again.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 space-y-6 overflow-y-auto pr-4">
        {messages.length === 0 && !isLoading ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="rounded-full bg-primary/10 p-4 text-primary">
                    <Bot size={40} />
                </div>
                <h2 className="mt-4 text-2xl font-semibold">Flowbit AI</h2>
                <p className="mt-2 text-muted-foreground">Ask questions about your invoice data in natural language.</p>
            </div>
        ) : (
            messages.map((msg, index) => (
                <ChatMessage key={index} message={msg} />
            ))
        )}
        {isLoading && <ThinkingIndicator />}
      </div>
      <div className="mt-auto pt-4">
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Chat;
