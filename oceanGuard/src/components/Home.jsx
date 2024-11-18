import React from "react";
import PageIllustration from "./PageIllustration";
("use client");
import { Button, Card } from "flowbite-react";
import FooterBar from "./FooterBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navigation from "./Navigation";
import IlusOCG from "../assets/ilusOCG.svg";

const Home = () => {
  const navigate = useNavigate();

  // State untuk mengontrol visibilitas chatbox
  const [isChatVisible, setIsChatVisible] = useState(false);

  // Fungsi untuk toggle chatbox
  const toggleChat = () => {
    setIsChatVisible(!isChatVisible);
  };

  return (
    <>
      {/* <NavigationBar /> */}
      <Navigation />
      <section className="relative">
        <PageIllustration />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Hero content */}
          <div className="pb-12 md:pb-20 md:pt-28">
            {/* Section header */}
            {/* <div className="pb-12 text-center md:pb-16">
              <h1
                className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
                data-aos="zoom-y-out"
                data-aos-delay={150}
              >
                Welcome Back to Your
                <br className="max-lg:hidden" />
                Ocean Impact Hub
              </h1>
              <div className="mx-auto max-w-3xl">
                <p
                  className="mb-8 text-lg text-gray-700"
                  data-aos="zoom-y-out"
                  data-aos-delay={300}
                >
                  Connect, collaborate, and take meaningful actions with our
                  community to protect and preserve the beauty of our coastlines
                  and marine life.
                </p>
              </div>
            </div> */}

            <div className="mx-auto max-w-6xl bg-gradient-to-r from-accent to-primary rounded-3xl h-56 mb-10 flex items-center px-10 shadow-lg">
              {/* Teks di sebelah kiri */}
              <div className="text-left text-white flex-1">
                <p className="text-4xl font-medium mb-4">
                  Hi,{" "}
                  <span className="font-bold text-primary border-b-2 border-white inline-block">
                    Resanti
                  </span>
                </p>
                <h1 className="text-3xl font-extrabold leading-tight">
                  Dive Into Your Ocean Impact Hub
                </h1>
                <p className="text-md opacity-90">
                  Collaborate, innovate, and make a positive impact on our
                  oceans.
                </p>
              </div>

              {/* Gambar SVG di sebelah kanan */}
              <div className="flex-1 text-right">
                <img
                  src={IlusOCG}
                  alt="Ocean Impact"
                  className="max-h-56 w-auto inline-block mb-8 drop-shadow-lg"
                />
              </div>
            </div>

            {/* Hero image */}
            <div className="space-y-6">
              {/* Tulisan di atas Card */}
              <h2 className="text-3xl font-semibold text-primary dark:text-white text-left border-b-2 border-gray-300 inline-block">
                Select Feature
              </h2>

              <div className="flex justify-left space-x-4">
                <Card className="max-w-72">
                  <h5 className="text-xl font-bold tracking-tight text-primary dark:text-white">
                    Make a Report
                  </h5>
                  <p className="font-light text-gray-700 dark:text-gray-400">
                    Share important insights and updates on coastal and marine
                    conservation efforts, helping us build a stronger, informed
                    community.
                  </p>
                  <Button onClick={() => navigate("/report")}>
                    Create New Report
                    <svg
                      className="-mr-1 ml-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Button>
                </Card>

                <Card className="max-w-72">
                  <h5 className="text-xl font-bold tracking-tight text-primary dark:text-white">
                    Report History
                  </h5>
                  <p className="font-light text-gray-700 dark:text-gray-400">
                    Review and track the progress of conservation efforts,
                    helping our community stay informed in protecting our
                    beaches and oceans.
                  </p>
                  <Button onClick={() => navigate("/history-report")}>
                    View Report
                    <svg
                      className="-mr-1 ml-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Button>
                </Card>

                <Card className="max-w-72">
                  <h5 className="text-xl font-bold tracking-tight text-primary dark:text-white">
                    Chat Bot AI
                  </h5>
                  <p className="font-light text-gray-700 dark:text-gray-400">
                    Review and track the progress of conservation efforts,
                    helping our community stay informed in protecting our
                    beaches and oceans.
                  </p>
                  <Button onClick={() => navigate("/chat-bot")}>
                    Ask Now
                    <svg
                      className="-mr-1 ml-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* Button Component */}
          <button
            className="fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-16 h-16 bg-black hover:bg-gray-700 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5 hover:text-gray-900"
            type="button"
            onClick={toggleChat}
            aria-haspopup="dialog"
            aria-expanded={isChatVisible}
            data-state={isChatVisible ? "open" : "closed"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white block border-gray-200 align-middle"
            >
              <path
                d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"
                className="border-gray-200"
              />
            </svg>
          </button>

          {/* Chatbox Component */}
          {isChatVisible && (
            <div
              style={{
                boxShadow:
                  "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)",
              }}
              className="fixed bottom-[calc(4rem+1.5rem)] right-0 mr-4 bg-white p-6 rounded-lg border border-[#e5e7eb] w-[440px] h-[634px]"
            >
              {/* Heading */}
              <div className="flex flex-col space-y-1.5 pb-6">
                <h2 className="font-semibold text-lg tracking-tight">
                  Chatbot
                </h2>
                <p className="text-sm text-[#6b7280] leading-3">
                  Powered by Mendable and Vercel
                </p>
              </div>

              {/* Chat Container */}
              <div
                className="pr-4 h-[474px]"
                style={{ minWidth: "100%", display: "table" }}
              >
                <div className="flex gap-3 my-4 text-gray-600 text-sm flex-1">
                  <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                    <div className="rounded-full bg-gray-100 border p-1">
                      <svg
                        stroke="none"
                        fill="black"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                        />
                      </svg>
                    </div>
                  </span>
                  <p className="leading-relaxed">
                    <span className="block font-bold text-gray-700">AI </span>
                    Hi, how can I help you today?
                  </p>
                </div>
              </div>

              {/* Input Box */}
              <div className="flex items-center pt-0">
                <form className="flex items-center justify-center w-full space-x-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
                    placeholder="Type your message"
                  />
                  <button className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2">
                    Send
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
      <FooterBar />
    </>
  );
};

export default Home;
