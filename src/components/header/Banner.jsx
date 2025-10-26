import React from "react";
import img from "../../assets/banner-img-1.png";
import img2 from "../../assets/doctor-sample.png";
const Banner = () => {
  return (
    <>
      <div className="p-8 lg:py-16 lg:pb-5">
        <h1 className="text-4xl lg:text-5xl mb-4 font-medium lg:font-semibold text-center text-gray-800">
          Dependable Care, Backed by Trusted Professionals
        </h1>
        <p className="text-center  text-xl ">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          check-up or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-4 lg:mx-0">
        <div className="w-full h-[350px] lg:h-[450px] overflow-hidden rounded-2xl">
          <img
            src={img2}
            alt="Image 1"
            className="w-full h-full object-cover hover:scale-105  transition-transform duration-500"
            loading="lazy"
          />
        </div>

        <div className="w-full h-[350px] lg:h-[450px] overflow-hidden rounded-2xl">
          <img
            src={img}
            alt="Image 2"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
