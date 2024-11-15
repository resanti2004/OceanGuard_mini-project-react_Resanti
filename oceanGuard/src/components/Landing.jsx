import React from "react";
import bgLanding from "../assets/bgLanding.webp";
import logoSingleOCG from "../assets/logoSingleOCG.png";
import logo1 from "../assets/logo1.webp";
import logo2 from "../assets/logo2.webp";
import logo3 from "../assets/logo3.webp";
import logo4 from "../assets/logo4.webp";
import logo5 from "../assets/logo5.webp";
import logo6 from "../assets/logo6.webp";
import { FaExclamationTriangle, FaBell, FaGlobe } from "react-icons/fa";
import Activities from "./Activities";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-center w-full "
        style={{ backgroundImage: `url(${bgLanding})` }}
      >
        <div className="h-screen bg-black bg-opacity-10 flex flex-col justify-center items-center">
          <p className="text-9xl md:text-huge font-bold text-white drop-shadow-lg">
            OCEAN
          </p>
          <p className="text-6xl md:text-8xl font-light text-white drop-shadow-lg mb-10">
            GUARD
          </p>
          <p className="text-xl md:text-2xl font-light text-white drop-shadow-md">
            Your Action Starts Here
          </p>
          <button
            type="button"
            className="text-primary font-normal bg-secondary hover:bg-primary hover:text-white rounded-3xl px-8 py-3 mt-4 mb-6 text-center"
            onClick={() => navigate("/report")}
          >
            JOIN US
          </button>
        </div>
      </div>

      {/* Card Section */}
      <div className="relative shadow-custom -top-32 flex justify-center items-center mt-10 space-x-16 bg-white p-6 rounded-3xl md:max-w-2xl mx-auto">
        <div className="bg-softGrey p-6 rounded-lg shadow-md flex flex-col items-center space-y-2 w-32">
          <FaExclamationTriangle className="text-4xl text-primary" />
          <p className="text-center font-bold text-primary">REPORT</p>
        </div>
        <div className="bg-softGrey p-6 rounded-lg shadow-md flex flex-col items-center space-y-2 w-32">
          <FaBell className="text-4xl text-primary " />
          <p className="text-center font-bold text-primary">CONNECT</p>
        </div>
        <div className="bg-softGrey p-6 rounded-lg shadow-md flex flex-col items-center space-y-2 w-32">
          <FaGlobe className="text-4xl text-primary" />
          <p className="text-center font-bold text-primary">LEARN</p>
        </div>
      </div>

      <div className="relative -top-12 flex flex-col md:flex-row justify-center items-center gap-x-12 p-8 bg-white">
        {/* Mission Section */}
        <div className="text-center md:text-left max-w-md">
          <div className="w-[28rem] h-[50px] bg-softGrey mx-auto md:mx-0 flex-shrink-0 mb-4 mt-24"></div>
          <h2 className="text-4xl font-light text-blue-800 text-right">
            Our <span className="font-extrabold">MISSION</span>
          </h2>
          <hr className="border-t-2 border-gray-400 mb-6 mt-2" />
          <p className="text-gray-700 mt-4 text-right text-xl font-light ">
            We provide an open platform for Ocean caring people to connect,
            learn, and act. We also enable early innovators and entrepreneurs to
            develop and launch ocean-friendly solutions and start-ups.
          </p>
        </div>

        {/* Vision Section */}
        <div className="text-center md:text-left max-w-md">
          <h2 className="text-4xl font-light text-blue-800">
            Our <span className="font-extrabold">VISION</span>
          </h2>
          <hr className="border-t-2 border-gray-400 mb-6 mt-2" />
          <p className="text-gray-700 mt-4 text-xl font-light mb-4">
            A collaborative and united community transforming ideas into
            solutions that protect the ocean and contribute to thriving coastal
            communities and a prosperous blue economy.
          </p>
          <div className="w-[28rem] h-[90px] bg-softGrey mx-auto md:mx-0 flex-shrink-0 mb-20"></div>
        </div>
      </div>

      <Activities />

      <section className="mx-auto ">
        <div className="container px-5 mx-auto lg:px-24">
          <div className="flex flex-col w-full mb-4 text-left lg:text-center">
            <img src={logoSingleOCG} alt="" className="w-24 h-auto mx-auto" />
            <h1 className="mb-2 text-3xl font-bold text-primary md:text-4xl dark:text-white">
              OCGuard Community Partner
            </h1>
            <div className="w-32 h-1 bg-primary mx-auto mt-2 mb-10"></div>
          </div>
          <div className="grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-3">
            <div className="flex items-center justify-center">
              <img
                src={logo1}
                alt="Google Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={logo2}
                alt="Shopify Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={logo3}
                alt="Cloudflare Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={logo4}
                alt="Paypal Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={logo5}
                alt="Shopify Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={logo6}
                alt="Cloudflare Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
          </div>
        </div>
      </section>

      <div id="blog" className="mb-20 mt-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="mb-12 space-y-2 text-center">
            <h2 className="text-3xl font-bold text-primary md:text-4xl dark:text-white">
              Latest Articles
            </h2>
            <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
              Explore insightful articles on environmental conservation,
              community initiatives, and tips for protecting our beaches and
              oceans. Stay informed and inspired to make a difference!
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                  alt="art cover"
                  loading="lazy"
                  width="1000"
                  height="667"
                  className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 relative">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  De fuga fugiat lorem ispum laboriosam expedita.
                </h3>
                <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                  Voluptates harum aliquam totam, doloribus eum impedit atque!
                  Temporibus...
                </p>
                <a className="inline-block" href="#">
                  <span className="text-info dark:text-blue-300">
                    Read more
                  </span>
                </a>
              </div>
            </div>
            <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                  alt="art cover"
                  loading="lazy"
                  width="1000"
                  height="667"
                  className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 relative">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  De fuga fugiat lorem ispum laboriosam expedita.
                </h3>
                <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                  Voluptates harum aliquam totam, doloribus eum impedit atque!
                  Temporibus...
                </p>
                <a className="inline-block" href="#">
                  <span className="text-info dark:text-blue-300">
                    Read more
                  </span>
                </a>
              </div>
            </div>
            <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                  alt="art cover"
                  loading="lazy"
                  width="1000"
                  height="667"
                  className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 relative">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  De fuga fugiat lorem ispum laboriosam expedita.
                </h3>
                <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                  Voluptates harum aliquam totam, doloribus eum impedit atque!
                  Temporibus...
                </p>
                <a className="inline-block" href="#">
                  <span className="text-info dark:text-blue-300">
                    Read more
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full flex justify-center items-center ">
        <section>
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                ></path>
              </svg>
              <blockquote>
                <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
                  "Website Ocean Guard Community is incredible. It offers a
                  range of resources and easy-to-use reporting tools, from
                  environmental surveys to collaborative projects. The ideal
                  platform for making a positive impact on our beaches and
                  oceans."
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="profile picture"
                />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white">
                    Resanti
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                    CEO at Home
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
      </div>
    </>
  );
};

export default Landing;
