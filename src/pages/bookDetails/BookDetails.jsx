import React, { useEffect, useState } from "react";
import { FaRegRegistered } from "react-icons/fa6";
import { Link, useLoaderData, useParams } from "react-router";
import { setDataIntoDb } from "../../utility/localStoragetoDb";
import { toast } from "react-toastify";

const BookDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const findData = data?.find((data) => data?.id === parseInt(id));
    setDetails(findData);
  }, []);

  return (
    <div className="rounded-md p-12 my-10 bg-gray-100 z-20">
      <div className="flex flex-col lg:flex-row gap-7">
        <img
          className="rounded-md w-full h-[350px] mb-6 lg:w-[350px]"
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
          <p className="text-lg text-gray-600 my-2 py-1 border-y-2 border-dashed border-gray-600 flex items-center gap-1">
            <FaRegRegistered /> Reg No.{details.registrationNumber}
          </p>
          <div className="flex justify-center gap-4 py-2">
            {details.availableDays?.map((day, i) => (
              <span
                className="bg-orange-100 border px-4  rounded-full border-orange-400 text-orange-400"
                key={i}
              >
                {day}
              </span>
            ))}
          </div>
          <div className="text-blue-500 py-2 flex gap-16 justify-center">
            <span>Taka : {details.fee}</span> <span>Per consultation</span>
          </div>
          <Link
            onClick={() => setDataIntoDb(details.id)}
            to={`/doctor/my-booked/${details.id}`}
          >
            <button className="text-white text-xl bg-blue-600 hover:border hover:border-blue-600 duration-300 px-4 py-2 rounded-full w-full hover:bg-white hover:text-blue-600">
              Book Appointment Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
