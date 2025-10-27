import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { getDataIntoDb, setDataIntoDb } from "../../utility/localStoragetoDb";

const Booked = () => {
  const { id } = useParams();

  const data = useLoaderData();
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    const appointId = getDataIntoDb();

    const filteredData = data?.filter((book) => appointId.includes(book.id));
    setBookData(filteredData);
  }, []);

  return (
    <div>
      <h2>My Today Appointments</h2>
      <span>
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.
      </span>
      {bookData.map((data) => (
        <div
          key={data.id}
          className="flex flex-col lg:flex-row mx-4 lg:mx-0 lg:justify-between border my-4 rounded-full border-blue-400 p-4"
        >
          <div>
            <p className="text-xl font-medium">{data.name}</p>
            <p className="text-gray-600">{data.education}</p>
          </div>
          <span>Appointment Fee: {data.fee}</span>
          <button className="text-red-800  hover:bg-red-200 duration-500  my-4 bg-red-100 px-4 py-1  border border-red-800 rounded-full">
            Cancel Appointment
          </button>
        </div>
      ))}
    </div>
  );
};

export default Booked;
