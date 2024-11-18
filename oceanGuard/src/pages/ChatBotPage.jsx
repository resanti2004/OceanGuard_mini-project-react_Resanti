import React from "react";
import Navigation from "../components/Navigation";
import GeminiAIComponent from "../components/GeminiAIComponent";
import FooterBar from "../components/FooterBar";

const ChatBotPage = () => {
  return (
    <>
      <Navigation />
      <GeminiAIComponent />
      <FooterBar />
    </>
  );
};

export default ChatBotPage;
