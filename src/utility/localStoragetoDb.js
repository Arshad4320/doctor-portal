import { toast } from "react-toastify";

const getDataIntoDb = () => {
  const data = localStorage.getItem("book");
  if (data) {
    const book = JSON.parse(data);
    return book;
  } else {
    return [];
  }
};
const setDataIntoDb = (id) => {
  const data = getDataIntoDb();
  if (data.includes(id)) {
    return toast.error("this appointment id is already exits");
  } else {
    data.push(id);
    const book = JSON.stringify(data);
    localStorage.setItem("book", book);
    return toast.success("your appointment successfully added");
  }
};
// const cancelIntoLocalStorage = (id) => {
//   const data = getDataIntoDb();
//   const filteredData = data.filter((item) => item !== id);
//   localStorage.setItem("book", JSON.stringify(filteredData));
//   toast.info("Appointment canceled successfully");
// };
const cancelIntoLocalStorage = (id) => {
  const data = getDataIntoDb();
  const filteredData = data.filter((item) => item !== id);
  // setDataIntoDb(filteredData);
  localStorage.setItem("book", JSON.stringify(filteredData));
  toast.warn("Appointment canceled successfully");
};

export { getDataIntoDb, setDataIntoDb, cancelIntoLocalStorage };
