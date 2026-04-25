import { useState } from "react";
import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";
import { sendMessageToAI } from "../api/openai";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = async (text) => {
    const userMsg = { role: "user", text };
    setMessages((prev) => [...prev, userMsg]);

    const reply = await sendMessageToAI(text);

    const aiMsg = { role: "ai", text: reply };
    setMessages((prev) => [...prev, aiMsg]);
  };

  return (
    <div>
      <ChatWindow messages={messages} />
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default Chat;