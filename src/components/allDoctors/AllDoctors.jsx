import React from "react";
import { FaRegRegistered } from "react-icons/fa6";
import { Link } from "react-router";
const AllDoctors = ({ doctor }) => {
  const {
    id,
    doctorImage,
    education,
    experience,
    name,
    registrationNumber,
    speciality,
  } = doctor;
  return (
    <div className=" p-5 bg-gray-100 rounded-md">
      <div className="h-[250px] overflow-hidden rounded-md">
        <img
          className="w-full hover:scale-110 duration-500  h-full  rounded-md"
          src={doctorImage}
          alt=""
        />
      </div>
      <div className="flex justify-center gap-2 py-4">
        <button className="px-3 py-1 rounded-full text-center bg-green-100 text-green-600 border border-green-600">
          Available
        </button>
        <button className="px-3 py-1 rounded-full text-center bg-blue-100 text-blue-600 border border-blue-600">
          {experience} experience
        </button>
      </div>
      <>
        <h3 className="text-xl font-medium">{name}</h3>
        <p className="text-lg text-gray-600 mt-1">{education}</p>
        <p className="text-lg text-gray-600 py-1">{speciality}</p>
        <p className="text-lg text-gray-600 pt-1 border-t-2 border-dashed border-gray-600 flex items-center gap-1">
          <FaRegRegistered /> Reg No.{registrationNumber}
        </p>
        <Link to={`doctor-details/${id}`}>
          <button className="px-3 py-2 my-2 rounded-full text-center hover:bg-blue-100 duration-200 text-blue-600 border border-blue-600 w-full text-xl">
            View Details
          </button>
        </Link>
      </>
    </div>
  );
};

export default AllDoctors;
