import React from "react";
import logoSingleOCG from "../assets/logoSingleOCG.png";
import logo1 from "../assets/logo1.webp";
import logo2 from "../assets/logo2.webp";
import logo3 from "../assets/logo3.webp";
import logo4 from "../assets/logo4.webp";
import logo5 from "../assets/logo5.webp";
import logo6 from "../assets/logo6.webp";
import { FaExclamationTriangle, FaBell, FaGlobe } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PageIllustration from "./PageIllustration";
import ImgTrash from "../assets/imgTrash.jpg";
import ImgBeach from "../assets/imgBeach.jpg";
import ImgOcean from "../assets/imgOcean.jpg";

const Landing2 = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Clean Up",
      description:
        "Join us to clean up the beaches and help protect marine life.",
      link: "#",
    },
    {
      title: "Observation",
      description:
        "Reserve spots for events and participate in ocean conservation.",
      link: "#",
    },
    {
      title: "Planting",
      description: "Help us plant mangroves and restore coastal ecosystems.",
      link: "#",
    },
  ];

  return (
    <>
      <section className="relative">
        <PageIllustration />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Hero content */}
          <div className=" pt-10 md:pt-40">
            {/* Section header */}
            <div className="pb-12 text-center md:pb-2">
              <h1
                className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
                data-aos="zoom-y-out"
                data-aos-delay={150}
              >
                Welcome to
                <br className="max-lg:hidden" />
                Your Ocean Impact Hub
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
                <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                  <div
                    className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                    data-aos="zoom-y-out"
                    data-aos-delay={450}
                  >
                    <a
                      className=" text-center text-xl font-semibold btn w-full text-primary sm:ml-4 sm:w-auto"
                      href="#0"
                    >
                      Join Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 mb-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
            <div className="mt-10 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-3 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-3">
              {[
                {
                  img: "https://www.svgrepo.com/show/164986/logo.svg",
                  title: "Report",
                  description:
                    "A platform to report coastal and marine conditions to help preserve the environment.",
                },
                {
                  img: "https://www.svgrepo.com/show/120853/logo.svg",
                  title: "Connect",
                  description:
                    "A platform to connect communities dedicated to protecting coastal and marine ecosystems.",
                },
                {
                  img: "https://www.svgrepo.com/show/120852/logo.svg",
                  title: "Learn",
                  description:
                    "An educational platform to raise awareness and knowledge about ocean conservation.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-primary transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 "
                >
                  <div className="relative space-y-4 py-8 p-12">
                    <img
                      src={item.img}
                      loading="lazy"
                      width="200"
                      height="200"
                      className="w-12 h-12 rounded-full"
                      style={{ color: "transparent" }}
                      alt={item.title}
                    />
                    <div className="space-y-2">
                      <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                        {item.title}
                      </h5>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row justify-center items-center gap-x-12 p-8 mt-16 mb-16">
          {/* Mission Section */}
          <div className="text-center md:text-left max-w-md">
            {/* <div className="w-[28rem] h-[50px] bg-softGrey mx-auto md:mx-0 flex-shrink-0 mb-4"></div> */}
            <h2 className="text-4xl font-light text-primary text-right">
              Our <span className="font-extrabold">MISSION</span>
            </h2>
            <hr className="border-t-2 border-gray-400 mb-6 mt-2" />
            <p className="text-gray-700 mt-4 text-right text-xl font-light ">
              We provide an open platform for Ocean caring people to connect,
              learn, and act. We also enable early innovators and entrepreneurs
              to develop and launch ocean-friendly solutions and start-ups.
            </p>
          </div>

          {/* Vision Section */}
          <div className="text-center md:text-left max-w-md">
            <h2 className="text-4xl font-light text-primary">
              Our <span className="font-extrabold">VISION</span>
            </h2>
            <hr className="border-t-2 border-gray-400 mb-6 mt-2" />
            <p className="text-gray-700 mt-4 text-xl font-light">
              A collaborative and united community transforming ideas into
              solutions that protect the ocean and contribute to thriving
              coastal communities and a prosperous blue economy.
            </p>
            {/* <div className="w-[28rem] h-[90px] bg-softGrey mx-auto md:mx-0 flex-shrink-0"></div> */}
          </div>
        </div>

        <div className=" py-8 px-40 mb-16">
          <div className="text-center mb-12">
            <p className="text-3xl font-bold text-primary md:text-4xl mb-2">
              Discover the Activity
            </p>
            {/* <p className="text-primary font-light text-2xl ">of OCGuard</p> */}
            <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
              Explore our community activities and environmental projects
              designed to protect and preserve our coastal ecosystems. Join us
              in making a real impact!
            </p>
          </div>
          <div className="container mx-auto pt-4 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden"
                >
                  <div className="p-6">
                    <h2 className="text-xl  font-semibold text-gray-800 mb-4">
                      {feature.title}
                    </h2>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                  <div className="bg-gray-100 px-6 py-4">
                    <a
                      href={feature.link}
                      className="text-primary font-medium hover:text-blue-800"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
              Ocean Insights
            </h2>
            <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
              Dive into articles on ocean conservation, beach clean-up
              initiatives, and community actions to protect our seas. Get
              inspired to join the movement and make a positive impact on our
              marine ecosystems!
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={ImgTrash}
                  alt="art cover"
                  loading="lazy"
                  width="1000"
                  height="667"
                  className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 relative">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  The Hidden Impact of Plastic on Marine Life
                </h3>
                <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                  Learn how plastic waste affects ocean ecosystems and what we
                  can do to reduce pollution and protect marine biodiversity.
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
                  src={ImgBeach}
                  alt="art cover"
                  loading="lazy"
                  width="1000"
                  height="667"
                  className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 relative">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Community Efforts to Save Our Beaches
                </h3>
                <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                  Discover inspiring stories of local communities working
                  together to keep beaches clean and safe for everyone.
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
                  src={ImgOcean}
                  alt="art cover"
                  loading="lazy"
                  width="1000"
                  height="667"
                  className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 relative">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Simple Actions to Protect Ocean Habitats
                </h3>
                <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                  Explore practical tips for individuals and families to
                  contribute to ocean conservation efforts in everyday life.
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

export default Landing2;
