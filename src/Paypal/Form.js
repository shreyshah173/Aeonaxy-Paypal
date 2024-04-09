import React from "react";

const Form = () => {
  return (
    <div className=" w-6/12">
      <div className="flex flex-wrap justify-center">
        <form className=" relative bottom-[10vw]  border border-gray-300 shadow-lg w-8/12 bg-white rounded-lg">
          <div className="mx-6">
            <h2 className="text-[200%] pt-8">Get Started</h2>
            <p className="text-lg py-2 w-11/12">
              Tell us a little about busniss so we can connect you with the
              right people
            </p>
            <input
              className="border-2 border-gray-400 w-full h-10 rounded-md border-b-0 mb-2  "
              type="text"
              placeholder="First name*"
            ></input>
            <input
              className="border-2 border-gray-400 w-full h-10 rounded-md border-t-0 my-2 "
              type="text"
              placeholder="Last Name*"
            ></input>
            <input
              className="border-2 border-gray-400 w-full h-10 rounded-md border-t-gray-200 my-2 "
              type="text"
              placeholder="Work Email*"
            ></input>
            <input
              className="border-2 border-gray-400 w-full h-10 rounded-md  my-2 "
              type="text"
              placeholder="Phone Number*"
            ></input>
            <input
              className="border-2 border-gray-400 w-full h-10 rounded-md  my-2 "
              type="text"
              placeholder="Company name*"
            ></input>
            <input
              className="border-2 border-gray-400 w-full h-10 rounded-md  my-2 "
              type="text"
              placeholder="Company website*"
            ></input>
            <button className="border-2 border-gray-400 w-full h-5 border-b-0 rounded-t-md  mt-2 text-xs text-left" >Country*</button>
            <select className="border-2 border-gray-400 w-full h-6 border-t-0 border-b-0 rounded-b-md  mb-2">
              
              <option value="United State">United State</option>
              <option value="India">India</option>
              <option value="Britain">Britain</option>
              <option value="China">China</option>
            </select>
            <button className="border-2 border-gray-400 w-full h-5 border-b-0 rounded-t-md  mt-2 text-xs text-left" >Estimated annual sale*</button>
            <select className="border-2 border-gray-400 w-full h-6 border-t-0 border-b-0 rounded-b-md  mb-2">
              
              <option value="United State">United State</option>
              <option value="India">India</option>
              <option value="Britain">Britain</option>
              <option value="China">China</option>
            </select>
            <button className="border-2 border-gray-400 w-full h-5 border-b-0 rounded-t-md  mt-2 text-xs text-left" >Do you already have a paypal account?*</button>
            <select className="border-2 border-gray-400 w-full h-6 border-t-0 border-b-0 rounded-b-md  mb-2">
              
              <option value="United State">No</option>
              <option value="India">Yes</option>
              
            </select>
            <div className="flex ">
            <input className="w-5 h-5 my-2 " type="checkbox" id="html" name="fav_language" value="HTML"></input>
            <p className="mx-2 mt-1 ">I have read and accepted the <a  className="text-blue-600 hover:cursor-pointer">paypal privacy policy</a></p>
            
            </div>
            <p  className="text-xs ml-7">I concent to paypal contacting me by phone or by email, and to sending me product or industry information relevent to my query. I know i can unsubscribe at any time</p>
            <div className="flex flex-wrap items-center justify-center align-middle my-3">
            <button className="bg-blue-600 rounded-xl h-12 text-white  w-6/12">Submit</button>
            
            </div>
            <div className="flex flex-wrap items-center justify-center align-middle my-3">
            <p>*Required field</p>
            </div>
            

          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
