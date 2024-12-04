import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import SubHeader from "./SubHeader";

function Header() {
  return (
    <>
      <div className="bg-gray-200">
        <div className="flex justify-between items-center  text-sm text-gray-400 uppercase px-6 h-10">
          <div className="flex font-semibold items-center gap-3">
            <div className="hover:text-gray-600 cursor-pointer">
              Phone:<span>+9867024416</span>
            </div>
            <div className="hover:text-gray-600 cursor-pointer">
              Email:<span className="lowercase">infocleaver.com </span>
            </div>
          </div>

          <div className="flex items-center space-x-5 h-full">
            <div className="text-xs">Follow us:</div>
            <div className="flex h-full items-center">
              <div className="border-l-[1px] flex h-full items-center px-4 justify-center border-gray-300">
                <FaFacebookF />
              </div>

              <div className="border-l-[1px] h-full items-center flex px-4 border-gray-300">
                <FaInstagram />
              </div>

              <div className="border-l-[1px] flex px-4  h-full items-center justify-center border-gray-300">
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="bg-white py-4 flex items-center justify-between">
          <div className="flex items-center px-7 font-bold tracking-widest text-lg">
            CLEVER
          </div>

          <div className="flex items-center space-x-10 flex-2 justify-between px-32 text-slate-500  ">
            <div>Home</div>
            <div>Page</div>
            <div>Course</div>
            <div>Instructor</div>
            <div>Blog</div>
            <div>Contact</div>
          </div>

          <div className="flex justify-end px-6">
            <div class="w-20 sm:w-32 md:w-56 max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex justify-end ">
              <input type="text" placeholder="Search..." />
            </div>
          </div>

          <div className="flex justify-end between">
            <button className="py-2 text-blue-600 rounded-md font-semibold flex text-base tracking-wide hover:bg-blue-200 uppercase">
              Register
            </button>
          </div>

          <div className="flex justify-end items-center px-9">
            <button className="px-6 py-2 text-blue-600 bg-blue-200 rounded-md font-semibold flex text-base tracking-wide uppercase ">
              Login
            </button>
          </div>
        </div> */}
      </div>

      <div className="bg-primary">
        <SubHeader />
      </div>
    </>
  );
}

export default Header;
