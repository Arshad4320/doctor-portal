import React from "react";

const AllDoctors = ({ doctor }) => {
  console.log(doctor);
  const {
    doctorImage,
    education,
    experience,
    name,
    registrationNumber,
    speciality,
  } = doctor;
  return (
    <div>
      <img src={doctorImage} alt="" />
      <div className="flex justify-center gap-2 py-4">
        <button className="px-3 py-1 rounded-full text-center bg-green-100 text-green-600 border border-green-600">
          Available
        </button>
        <button className="px-4 py-1 rounded-full text-center bg-blue-100 text-blue-600 border border-blue-600">
          {experience} experience
        </button>
      </div>
    </div>
  );
};

export default AllDoctors;
