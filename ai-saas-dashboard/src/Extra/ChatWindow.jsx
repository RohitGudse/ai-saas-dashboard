import React from "react";
import PropTypes from "prop-types";
import MessageBubble from "./MessageBubble";

/**
 * ---------------------------------------------------------
 * ChatWindow Component
 * ---------------------------------------------------------
 * This component is responsible for displaying all chat
 * messages inside the conversation window.
 *
 * Features:
 * ✔ Displays all chat messages
 * ✔ Handles empty chat state
 * ✔ Uses unique keys
 * ✔ Scrollable chat container
 * ✔ Easy to maintain
 * ✔ GitHub project ready
 * ---------------------------------------------------------
 */

const ChatWindow = ({ messages = [] }) => {
  /**
   * Check if chat has any messages
   */
  const hasMessages = Array.isArray(messages) && messages.length > 0;

  /**
   * Render Empty State
   */
  const renderEmptyState = () => {
    return (
      <div className="chat-empty-state">
        <div className="empty-icon">💬</div>

        <h2>No Messages Yet</h2>

        <p>
          Start your conversation by sending your first message.
        </p>
      </div>
    );
  };

  /**
   * Render Messages
   */
  const renderMessages = () => {
    return messages.map((message, index) => {
      return (
        <MessageBubble
          key={message.id || index}
          message={message}
        />
      );
    });
  };

  return (
    <section className="chat-window-container">

      <header className="chat-header">
        <h2>Chat Conversation</h2>
      </header>

      <main className="chat-window">

        {hasMessages ? (
          renderMessages()
        ) : (
          renderEmptyState()
        )}

      </main>

    </section>
  );
};

ChatWindow.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
      text: PropTypes.string,
      sender: PropTypes.string,
      time: PropTypes.string,
    })
  ),
};

export default ChatWindow;