import React from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import reser from "../assets/bg-login.webp";

const activities = [
  {
    title: "CLEAN UP",
    image: "https://example.com/cleanup-image.jpg", // Ganti dengan URL gambar yang benar
    description:
      "Join us to clean up the beaches and help protect marine life.",
  },
  {
    title: "RESERVATION",
    image: { reser }, // Ganti dengan URL gambar yang benar
    description:
      "Reserve spots for events and participate in ocean conservation.",
  },
  {
    title: "PLANTING",
    image: "https://example.com/planting-image.jpg", // Ganti dengan URL gambar yang benar
    description: "Help us plant mangroves and restore coastal ecosystems.",
  },
];

const ActivityCard = ({ title, image, description }) => (
  <Flipper flipKey={title}>
    <Flipped flipId="card">
      <div className="card">
        <Flipped inverseFlipId="card">
          <div className="relative w-64 h-80 cursor-pointer">
            <Flipped flipId="front">
              <div className="card-front w-full h-full absolute inset-0 rounded-lg shadow-lg overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h3 className="text-white font-bold text-lg">{title}</h3>
                </div>
              </div>
            </Flipped>
            <Flipped flipId="back">
              <div className="card-back w-full h-full absolute inset-0 rounded-lg shadow-lg bg-blue-800 text-white flex flex-col items-center justify-center p-4 opacity-0">
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-center text-sm">{description}</p>
              </div>
            </Flipped>
          </div>
        </Flipped>
      </div>
    </Flipped>
  </Flipper>
);

const Activities = () => {
  return (
    <div className="bg-custom-gradient p-8 mb-16">
      <div className="text-center mb-12">
        <p className="text-3xl font-bold text-primary md:text-4xl mb-2">
          Discover the Activity
        </p>
        {/* <p className="text-primary font-light text-2xl ">of OCGuard</p> */}
        <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
          Explore our community activities and environmental projects designed
          to protect and preserve our coastal ecosystems. Join us in making a
          real impact!
        </p>
      </div>
      <div className="flex justify-center gap-4 flex-wrap">
        {activities.map((activity) => (
          <ActivityCard
            key={activity.title}
            title={activity.title}
            image={activity.image}
            description={activity.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Activities;
