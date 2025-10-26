import React, { useEffect, useState } from "react";
import AllDoctors from "../allDoctors/AllDoctors";

const BestDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <>
      <div className="py-16 text-center">
        <h1 className="text-4xl font-bold">We Provide Best Medical Services</h1>
        <span className="text-center text-xl">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4 lg:mx-0 gap-6">
        {doctors.slice(0, 6)?.map((doctor) => (
          <AllDoctors doctor={doctor} key={doctor.id} />
        ))}
      </div>
    </>
  );
};

export default BestDoctors;
