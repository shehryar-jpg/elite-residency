import React from "react";

const MobileNav = () => {
  return (
    <div>
      <div className="md:hidden w-auto mx-auto    " id="navbar-default">
        <ul className="flex flex-col    rounded-lg bg-gradient-to-r from-[#1b1f24] to-[#1b1f24] md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
          <li>
            <a
              href="#"
              className="block py-4 text-white text-2xl text-center  "
              aria-current="page"
            >
              ABOUT
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block py-4 text-white text-2xl text-center  "
              aria-current="page"
            >
              PROJECT
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-4 text-white text-2xl text-center  "
              aria-current="page"
            >
              FEATURES
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-4 text-white text-2xl text-center  "
              aria-current="page"
            >
              RESOURSES
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
