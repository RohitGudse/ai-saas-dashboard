import { useState } from "react";

const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    onSend(input);
    setInput("");
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatInput;