const MessageBubble = ({ message }) => {
  return (
    <div className={message.role === "user" ? "user" : "ai"}>
      {message.text}
    </div>
  );
};

export default MessageBubble;