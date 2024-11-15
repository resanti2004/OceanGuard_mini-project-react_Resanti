import React from "react";
import PageIllustration from "./PageIllustration";
("use client");
import { Button, Card } from "flowbite-react";
import NavigationBar from "./NavigationBar";
import FooterBar from "./FooterBar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavigationBar />
      <section className="relative">
        <PageIllustration />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Hero content */}
          <div className="pb-12 pt-10 md:pb-20 md:pt-16">
            {/* Section header */}
            <div className="pb-12 text-center md:pb-16">
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
                <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                  <div
                    className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                    data-aos="zoom-y-out"
                    data-aos-delay={450}
                  >
                    <a
                      className=" text-center btn w-full text-primary sm:ml-4 sm:w-auto"
                      href="#0"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Hero image */}
            <div className="flex justify-center space-x-4">
              <Card className="max-w-72">
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
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
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Report History
                </h5>
                <p className="font-light text-gray-700 dark:text-gray-400">
                  Review and track the progress of conservation efforts, helping
                  our community stay informed in protecting our beaches and
                  oceans.
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
            </div>
          </div>
        </div>
      </section>
      <FooterBar />
    </>
  );
};

export default Home;
