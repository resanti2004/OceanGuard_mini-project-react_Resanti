import React from "react";
import logoSingle from "../assets/logoSingleOCG.png";

const AboutUs = () => {
  return (
    <>
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-2">
            <img
              src={logoSingle}
              alt="Ocean Guard Logo"
              className="mx-auto w-16 h-16"
            />
          </div>
          <h2 className="text-4xl font-light text-primary">
            Our <span className="font-bold">STORY</span>
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto mt-1 mb-10"></div>
          <p className="mt-8 text-gray-600 text-xl">
            Our journey began with a simple vision: to protect and restore the
            beauty of our beaches and oceans. We saw the rising pollution, the
            harm to marine life, and felt called to act. So, we built this
            platform to unite passionate individuals—volunteers, advocates, and
            environmental enthusiasts— committed to making a difference.
          </p>
          <p className="mt-8 mb-10 text-gray-600 text-xl">
            Through cleanups, conservation projects, and community education, we
            empower people to take small actions that create big waves of
            change. Together, we’re working for cleaner shores, healthier
            oceans, and a sustainable future. Join us, and let’s turn the tide
            for our planet.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
