import React, { useState, useRef, useEffect } from "react";

const ChatInput = ({
  onSendMessage,
  placeholder = "Type your message here...",
  maxLength = 300,
}) => {
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;

    if (value.length <= maxLength) {
      setMessage(value);
      setError("");
    }
  };

  const sendMessage = async () => {
    const text = message.trim();

    if (!text) {
      setError("Please enter a message.");
      return;
    }

    setIsSending(true);

    try {
      if (onSendMessage) {
        await onSendMessage(text);
      }

      setMessage("");
      setError("");
    } catch (error) {
      setError("Unable to send message.");
    } finally {
      setIsSending(false);
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  const clearInput = () => {
    setMessage("");
    setError("");
    inputRef.current.focus();
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "700px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ marginBottom: "15px" }}>Chat Assistant</h2>

      <textarea
        ref={inputRef}
        rows={4}
        value={message}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        style={{
          width: "100%",
          padding: "12px",
          resize: "none",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <small>
          {message.length}/{maxLength} Characters
        </small>

        {error && (
          <small style={{ color: "red" }}>
            {error}
          </small>
        )}
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "15px",
        }}
      >
        <button
          onClick={sendMessage}
          disabled={isSending || !message.trim()}
          style={{
            padding: "10px 25px",
            border: "none",
            background: "#007bff",
            color: "#fff",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          {isSending ? "Sending..." : "Send"}
        </button>

        <button
          onClick={clearInput}
          style={{
            padding: "10px 25px",
            border: "none",
            background: "#dc3545",
            color: "#fff",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default ChatInput;