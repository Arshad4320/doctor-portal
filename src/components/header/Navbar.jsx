import React, { useState } from "react";
import { Link } from "react-router";
import { Turn as Hamburger } from "hamburger-react";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const links = (
    <>
      <Link className="text-blue-600 mr-4 text-xl" to="/">
        Home
      </Link>
      <Link className="text-blue-600 mr-4 text-xl" to="/about">
        About
      </Link>
      <Link className="text-blue-600 mr-4 text-xl" to="/blog">
        Blog
      </Link>
    </>
  );

  return (
    <>
      {" "}
      <div className="lg:flex justify-between p-4 hidden  shadow">
        <p className="text-3xl  font-bold ">Doctor Portal</p>
        <div className="">{links}</div>
        <button className="px-4  py-2 rounded-md text-white bg-blue-600 hover:text-blue-600 hover:border hover:border-blue-600 hover:bg-white hover:duration-500">
          Emergency
        </button>
      </div>
      <div className="lg:hidden  flex justify-between  bg-white p-4">
        <div className="bg-white">
          <Hamburger direction="right" toggled={isOpen} toggle={setOpen} />
          <div className="absolute   bg-white flex flex-col w-full p-3  ">
            {" "}
            {isOpen && links}
          </div>
        </div>
        <p className="text-3xl font-bold ">Doctor Portal</p>
      </div>
    </>
  );
};

export default Navbar;
