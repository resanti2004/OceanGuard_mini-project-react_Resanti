import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { FaPaperPlane, FaTrashAlt } from "react-icons/fa";
import ChatHistory from "./ChatHistory";
import Loading from "./Loading";

const GeminiAIComponent = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Inisialisasi Google Generative AI
  const genAI = new GoogleGenerativeAI(
    "AIzaSyBg-xo8PJ3wIM1AGPAbZ6rwDCL9N9M4jJk"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const handleUserInput = (e) => setUserInput(e.target.value);

  const sendMessage = async () => {
    if (userInput.trim() === "") return;

    setIsLoading(true);
    try {
      const themePrompt =
        "Act as a marine conservation expert and answer questions related to ocean protection, beach clean-ups, and sustainability: ";
      const themedInput = themePrompt + userInput;

      const result = await model.generateContent(themedInput);
      const response = await result.response;

      setChatHistory([
        ...chatHistory,
        { type: "user", message: userInput },
        { type: "bot", message: response.text() },
      ]);
    } catch {
      console.error("Error sending message");
    } finally {
      setUserInput("");
      setIsLoading(false);
    }
  };

  const clearChat = () => setChatHistory([]);

  return (
    <div className="container py-5 px-3 mt-20 mb-2">
      <div
        className="card shadow-lg border-0 mx-auto"
        style={{
          maxWidth: "600px",
          background: "linear-gradient(135deg, #90caf9 0%, #64b5f6 100%)",
          color: "#fff",
          borderRadius: "15px",
        }}
      >
        <div className="card-header bg-transparent border-0 text-center p-4 text-primary font-semibold text-xl">
          Ask Me Anything About Ocean Conservation!
        </div>
        <div
          className="card-body bg-white p-4 min-h-96"
          style={{
            borderRadius: "0 0 15px 15px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <div
            className="chat-history mb-3"
            style={{
              maxHeight: "400px",
              overflowY: "auto",
              borderRadius: "10px",
              padding: "10px",
              boxShadow: "inset 0 0 5px rgba(0,0,0,0.1)",
            }}
          >
            <ChatHistory chatHistory={chatHistory} />
            <Loading isLoading={isLoading} />
          </div>

          {/* Input dan Send Button */}
          <div className="flex gap-2 mt-3 ">
            <input
              type="text"
              className="flex-1 p-2 border border-blue-300 rounded-l-md focus:ring-2 focus:ring-blue-500 transition-all text-black"
              placeholder="Type your message here..."
              value={userInput}
              onChange={handleUserInput}
              disabled={isLoading}
            />
            <button
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-r-md flex items-center gap-2 transition-transform transform hover:scale-105 disabled:bg-gray-400"
              onClick={sendMessage}
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send"} <FaPaperPlane />
            </button>
          </div>

          {/* Tombol Clear Chat */}
          <div className="flex justify-center mt-3">
            <button
              className="bg-gray-300 font-bold py-2 px-4 rounded-md flex items-center gap-2 transition-colors duration-300 hover:bg-gray-500"
              onClick={clearChat}
            >
              <FaTrashAlt /> Clear Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeminiAIComponent;
