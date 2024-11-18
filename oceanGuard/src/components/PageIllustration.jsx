import React from "react";
import Stripes from "../assets/stripes.svg";

const PageIllustration = () => {
  return (
    <>
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
        aria-hidden="true"
      >
        {/* <Image
          className="max-w-none"
          src={Stripes}
          width={768}
          alt="Stripes"
          priority
        /> */}
      </div>
      {/* Circles */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 ml-[580px] -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500 opacity-50 blur-[160px]" />
      </div>
    </>
  );
};

export default PageIllustration;
