import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const data = useLoaderData();
  const [details, setDetails] = useState([]);
  console.log(details);
  const { id } = useParams();

  useEffect(() => {
    const findData = data.find((data) => data.id === parseInt(id));
    setDetails(findData);
  }, []);

  return (
    <div className="rounded-md p-12 my-10 bg-gray-100 z-20">
      <div className="flex flex-col lg:flex-row gap-7">
        <img
          className="rounded-md w-full mb-6 lg:w-[450px]"
          src={details.doctorImage}
          alt=""
        />

        <div>
          <p className="text-5xl lg:text-6xl font-semibold text-gray-300">
            {details.name}
          </p>
          <p className="text-gray-700">{details.education}</p>
          <p className="text-gray-700 text-lg">{details.speciality}</p>
          <p className=" text-lg font-medium">
            <span className="text-gray-500"> Working at</span> <br />
            <span className="text-black"> {details.clinicName}</span>
          </p>
          {details.availableDays?.map((day, i) => (
            <p key={i}>{day}</p>
          ))}
          <p>{details.registrationNumber}</p>
          <p>{details.fee}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
