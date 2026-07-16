import React from "react";
import PropTypes from "prop-types";

const MessageBubble = ({
  message = {},
  showAvatar = true,
  showTime = true,
}) => {
  const {
    role = "assistant",
    text = "",
    time = "",
    status = "Delivered",
  } = message;

  const isUser = role === "user";

  const bubbleClass = isUser
    ? "message-bubble user-message"
    : "message-bubble ai-message";

  const avatar = isUser ? "👤" : "🤖";

  return (
    <div className={`message-container ${isUser ? "right" : "left"}`}>
      {showAvatar && (
        <div className="message-avatar">
          <span>{avatar}</span>
        </div>
      )}

      <div className={bubbleClass}>
        <div className="message-header">
          <span className="message-role">
            {isUser ? "You" : "AI Assistant"}
          </span>

          {showTime && (
            <span className="message-time">
              {time || "Just Now"}
            </span>
          )}
        </div>

        <div className="message-body">
          <p>{text}</p>
        </div>

        <div className="message-footer">
          <small>Status: {status}</small>
        </div>
      </div>
    </div>
  );
};

MessageBubble.propTypes = {
  message: PropTypes.shape({
    role: PropTypes.string,
    text: PropTypes.string,
    time: PropTypes.string,
    status: PropTypes.string,
  }),
  showAvatar: PropTypes.bool,
  showTime: PropTypes.bool,
};

export default MessageBubble;