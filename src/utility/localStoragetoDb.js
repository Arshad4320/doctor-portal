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
  }
};
export { getDataIntoDb, setDataIntoDb };
