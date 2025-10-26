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
        <img className="w-full lg:h-[55%]" src={img2} alt="" />
        <img className="w-full lg:h-[55%]" src={img} alt="" />
      </div>
    </>
  );
};

export default Banner;
