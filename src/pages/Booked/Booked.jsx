// import { useEffect, useState } from "react";
// import { useLoaderData, useParams } from "react-router";
// import {
//   cancelIntoLocalStorage,
//   getDataIntoDb,
//   setDataIntoDb,
// } from "../../utility/localStoragetoDb";

// const Booked = () => {
//   const data = useLoaderData();
//   const [bookData, setBookData] = useState([]);

//   const handleCancelAppointment = (id) => {
//     cancelIntoLocalStorage(id);
//     const appointId = getDataIntoDb();
//     const updateData = appointId.filter((item) =>
//       getDataIntoDb().includes(item)
//     );

//     setBookData(updateData);
//   };
//   useEffect(() => {
//     const appointId = getDataIntoDb();
//     const findData = data.filter((item) => appointId.includes(item.id));
//     setBookData(findData);
//   }, [data]);

//   return (
//     <div>
//       <h2>My Today Appointments</h2>
//       <span>
//         Our platform connects you with verified, experienced doctors across
//         various specialties — all at your convenience.
//       </span>
//       {bookData.map((data) => (
//         <div
//           key={data.id}
//           className="flex flex-col lg:flex-row mx-4 lg:mx-0 lg:justify-between border my-4 rounded-full border-blue-400 p-4"
//         >
//           <div>
//             <p className="text-xl font-medium">{data.name}</p>
//             <p className="text-gray-600">{data.education}</p>
//           </div>
//           <span>Appointment Fee: {data.fee}</span>
//           <button
//             onClick={() => {
//               handleCancelAppointment(data.id);
//             }}
//             className="text-red-800  hover:bg-red-200 duration-500  my-4 bg-red-100 px-4 py-1  border border-red-800 rounded-full"
//           >
//             Cancel Appointment
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Booked;
import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import {
  cancelIntoLocalStorage,
  getDataIntoDb,
} from "../../utility/localStoragetoDb";

const Booked = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [bookData, setBookData] = useState([]);

  const handleCancelAppointment = (id) => {
    cancelIntoLocalStorage(id);

    const updatedIds = getDataIntoDb();
    const updatedData = data.filter((item) => updatedIds.includes(item.id));
    setBookData(updatedData);
  };

  useEffect(() => {
    const appointIds = getDataIntoDb();
    const findData = data.filter((item) => appointIds.includes(item.id));
    setBookData(findData);
  }, [data]);

  return (
    <div className="p-4">
      <h2 className="text-3xl text-center font-bold">My Today Appointments</h2>
      <p className="text-gray-500 mb-4 text-center text-3xl">
        Manage your booked doctor appointments easily below.
      </p>

      {bookData.length === 0 ? (
        <div className="flex justify-center">
          <div>
            <p className="text-gray-500 text-2xl ">
              No appointments booked yet.
            </p>
            <Link to="/">
              <button className="text-blue-800   hover:bg-blue-200 duration-500 my-4 bg-blue-100 px-4 py-1 border border-blue-800 rounded-full">
                Booked your appointment
              </button>
            </Link>
          </div>
        </div>
      ) : (
        bookData.map((doctor) => (
          <div
            key={doctor.id}
            className="flex flex-col lg:flex-row mx-4 lg:mx-0 lg:justify-between border my-4 rounded-full border-blue-400 p-4"
          >
            <div>
              <p className="text-xl font-medium">{doctor.name}</p>
              <p className="text-gray-600">{doctor.education}</p>
            </div>
            <span>Appointment Fee: {doctor.fee}</span>
            <button
              onClick={() => handleCancelAppointment(doctor.id)}
              className="text-red-800 hover:bg-red-200 duration-500 my-4 bg-red-100 px-4 py-1 border border-red-800 rounded-full"
            >
              Cancel Appointment
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Booked;
