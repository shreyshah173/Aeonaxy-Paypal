import React from "react";

const Navbar = () => {
  return (
    <div className=" w-full flex justify-between items-center">
      <div className="flex">
        <img className="w-1/12" src="https://pngimg.com/d/paypal_PNG7.png" alt="paypla_logo"></img>
        <button className="p-4 text-blue-800 font-bold">Personal</button>
        <button className="p-4 text-blue-800 font-bold">Busniess</button>
        <button className="p-4 text-blue-800 font-bold">Developer</button>
        <button className="p-4 text-blue-800 font-bold">Help</button>
      </div>
      <div className="flex pr-2 mr-2 h-12">
        <button className="border border-blue-950 w-28 text-blue-950 rounded-3xl">Log In</button>
        <button className="border border-blue-600 w-28 rounded-3xl text-white  bg-blue-950 ml-4">Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
