import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <>
        <div className="    bg-gradient-to-t bg-[#1a1e23] ">
          <div className="max-w-[1360px] mx-auto">
            <Navbar />
          </div>
        </div>
        <div className="mx-auto  ">
          <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1f2327]">
            <h1 className="text-9xl font-extrabold text-white tracking-widest">
              404
            </h1>
            <div className="bg-[#cfad4f] px-2 text-sm rounded rotate-12 absolute">
              Page Not Found
            </div>
            <button className="mt-5">
              <a className="relative inline-block text-sm font-medium text-[#cfad4f] group active:text-[#cfad4f] focus:outline-none focus:ring">
                <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#cfad4f] group-hover:translate-y-0 group-hover:translate-x-0" />
                <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                  <p
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Go Home
                  </p>
                </span>
              </a>
            </button>
          </main>
        </div>
      </>
    </div>
  );
};

export default NotFound;
