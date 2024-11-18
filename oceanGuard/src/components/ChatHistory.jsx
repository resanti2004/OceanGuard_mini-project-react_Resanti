import React from "react";
import ReactMarkdown from "react-markdown";

const ChatHistory = ({ chatHistory }) => {
  return (
    <div className="chat-history">
      {chatHistory.map((message, index) => (
        <div
          key={index}
          className={`d-flex mb-3 ${
            message.type === "user"
              ? "justify-content-end"
              : "justify-content-start"
          }`}
        >
          <div
            className={`p-2 rounded shadow ${
              message.type === "user"
                ? "bg-primary text-white text-end"
                : "bg-softGrey text-black"
            }`}
            style={{
              maxWidth: "100%",
              borderRadius:
                message.type === "user"
                  ? "15px 15px 0 15px"
                  : "15px 15px 15px 0",
            }}
          >
            {message.type === "user" && (
              <div
                className="text-end"
                style={{ fontSize: "0.9em", fontWeight: "bold" }}
              ></div>
            )}
            <ReactMarkdown>{message.message}</ReactMarkdown>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
