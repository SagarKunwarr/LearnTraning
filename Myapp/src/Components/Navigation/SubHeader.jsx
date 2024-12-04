import React from "react";

function SubHeader() {
  const navitem = [
    {
      title: "Home",
    },
    {
      title: "Page",
    },
    {
      title: "Courses",
    },
    {
      title: "Instructors",
    },
    {
      title: "Blog",
    },
    {
      title: "Contact",
    },
  ];
  return (
    <div className="bg-white">
      <div className="flex justify-between py-5 items-center px-5">
        <div className="uppercase font-bold text-2xl"> clever</div>

        <div className="flex items-center justify-between">
          <div className="flex gap-4 items-center">
            {navitem.map((val, i) => {
              return (
                <div className="text-sm text-gray-400 font-medium">
                  {val.title}
                </div>
              );
            })}
          </div>

          <div>Search</div>
        </div>

        <div className="font-bold text-sm">
          <button className="w-fit h-fit bg-none px-6 py-3 text-primary  uppercase ">
            Register
          </button>
          <button className="w-fit h-fit bg-primary bg-opacity-25 text-primary  px-10 py-3 uppercase">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
