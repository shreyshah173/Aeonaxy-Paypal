import React from "react";

const BottomFooter = () => {
  return (
    <div>
      <div className="w-12/12 h-[8vw] overflow-hidden">
        <img
          className="h-[12vw] ml-10"
          src="https://miro.medium.com/v2/resize:fit:500/0*KB1H5SWaCcsx2sXy.png"
          alt="paypal"
        ></img>
      </div>
      <div className="">
        <div className="text-blue-600 pt-10 border-2 border-gray-400 border-t-0 mx-10 border-l-0 border-r-0 text-sm font-bold pb-2 flex justify-between">
          <div className="flex w-7/12">
            <p className="text-sm text-blue-800 font bold mr-8">Help</p>
            <p className="text-sm text-blue-800 font bold mr-8">Contact</p>
            <p className="text-sm text-blue-800 font bold mr-8">Fess</p>
            <p className="text-sm text-blue-800 font bold mr-8">Security</p>
            <p className="text-sm text-blue-800 font bold mr-8">Apps</p>
            <p className="text-sm text-blue-800 font bold mr-8">Shop</p>
            <p className="text-sm text-blue-800 font bold mr-8">Enterprise</p>
            <p className="text-sm text-blue-800 font bold mr-8">Partners</p>
            <p className="text-sm text-blue-800 font bold mr-8">Feedback</p>
            </div> 
            <div className="h-[1.5vw] overflow-hidden">
            <div className="w-[2vw]">
                <img src="https://img.freepik.com/premium-vector/american-flag-independence-day-fourth-july_506530-1495.jpg?size=626&ext=jpg" alt="usa" />
            </div>
            </div>
            
        </div>
        <div className="text-blue-600 pt-5 pb-10  mx-10  text-sm  pb-2 flex justify-between">
          <div className="flex w-7/12">
            <p className="text-sm text-blue-800 font-bold mr-8">About</p>
            <p className="text-sm text-blue-800 font-bold mr-8">Newsroom</p>
            <p className="text-sm text-blue-800 font-bold mr-8">Jobs</p>
            <p className="text-sm text-blue-800 font-bold mr-8">Investor Relations</p>
            <p className="text-sm text-blue-800 font-bold mr-8">Values In Action</p>
            <p className="text-sm text-blue-800 font-bold mr-8">Public Policy</p>
            <p className="text-sm text-blue-800 font-bold mr-8">Sitemap</p>
            </div> 
            <div className="flex">
                <p className="text-gray-500 ">©️ 1999-2022</p>
                <p className="text-sm text-blue-800 font-bold ml-10">Accessibility</p>
                <p className="text-sm text-blue-800 font-bold ml-10">Privacy</p>
                <p className="text-sm text-blue-800 font-bold ml-10">Cookies</p>
                <p className="text-sm text-blue-800 font-bold ml-10">Legal</p>

            </div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
