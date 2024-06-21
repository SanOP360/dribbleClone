import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMouseEnter = (dropdown) => {
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  return (
    <div>
      <div className="navbar flex flex-col lg:flex-row">
        <div className="navbar-start lg:hidden flex justify-between items-center w-full px-4 py-2">
          <h1
            className={`text-4xl text-slate-900 font-extrabold hover:text-slate-600 cursor-pointer transition duration-300 ${
              menuOpen ? "text-center" : ""
            }`}
            style={{
              fontFamily: "Dancing Script, cursive",
              transform: "rotate(-6deg)",
              width: menuOpen ? "100%" : "auto",
            }}
          >
            Dribbble
          </h1>
          <div className="flex items-center space-x-4">
            <FaSearch className="text-gray-600 cursor-pointer" />
            <button
              onClick={toggleMenu}
              className="text-2xl text-slate-700 focus:outline-none"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        <div
          className={` navbar-start hidden lg:flex flex-col lg:flex-row lg:items-center transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="menu menu-horizontal px-1">
            <li
              className="relative transition duration-300"
              onMouseEnter={() => handleMouseEnter("designer")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="hover:bg-white">
                <details open={openDropdown === "designer"}>
                  <summary className="font-semibold cursor-pointer hover:bg-white">
                    Find Designer
                  </summary>
                  {openDropdown === "designer" && (
                    <ul
                      className="p-2 bg-base-100 absolute z-10 border mt-1 rounded-lg w-50"
                      onMouseEnter={() => handleMouseEnter("designer")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <li>
                        <a className="hover:bg-white">
                          <div className="flex flex-col w-40">
                            <h3 className="font-bold text-lg">
                              Designer Search
                            </h3>
                            <p>Quickly find your next designer</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="hover:bg-white">
                          <div className="flex flex-col w-40">
                            <h3 className="font-bold text-lg">Post a job</h3>
                            <p>The #1 job board for job hunt</p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  )}
                </details>
              </div>
            </li>
            <li
              className="relative transition duration-300"
              onMouseEnter={() => handleMouseEnter("courses")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="hover:bg-white">
                <details open={openDropdown === "courses"}>
                  <summary className="font-semibold cursor-pointer hover:bg-white">
                    Courses
                  </summary>
                  {openDropdown === "courses" && (
                    <ul
                      className="p-2 bg-base-100 absolute z-10 border mt-1 mb-0 rounded-lg"
                      onMouseEnter={() => handleMouseEnter("courses")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <li>
                        <a className="hover:bg-white">
                          <div className="flex flex-col w-50">
                            <h3 className="font-bold text-lg">UX Diploma</h3>
                            <p>Learn UX design from scratch</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="hover:bg-white">
                          <div className="flex flex-col w-40">
                            <h3 className="font-bold text-lg">
                              UX Certificate
                            </h3>
                            <p>12-week UI skill building for designers</p>
                          </div>
                        </a>
                      </li>
                      <hr />
                      <li>
                        <a className="hover:bg-white">
                          <div className="flex flex-col w-40">
                            <h3 className="font-bold text-lg">
                              Live Interaction workshop
                            </h3>
                            <p>with design professionals</p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  )}
                </details>
              </div>
            </li>
            <li>
              <a className="font-semibold cursor-pointer hover:bg-white transition duration-300">
                Jobs
              </a>
            </li>
            <li>
              <a className="font-semibold cursor-pointer hover:bg-white transition duration-300">
                Go Pro
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar-center flex-1 lg:flex-none hidden lg:block">
          <h1
            className={`text-4xl text-slate-900 font-extrabold hover:text-slate-600 cursor-pointer transition duration-300 ${
              menuOpen ? "text-center" : ""
            }`}
            style={{
              fontFamily: "Dancing Script, cursive",
              transform: "rotate(-6deg)",
              width: menuOpen ? "100%" : "auto",
            }}
          >
            Dribbble
          </h1>
        </div>

        <div className="navbar-end space-x-4 hidden lg:flex items-center">
          <div className="relative form-control mr-2">
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="input pl-10 w-24 md:w-auto rounded-full bg-slate-200 hover:bg-white hover:border-pink-500 hover:border-2 transition duration-300"
            />
          </div>
          <a className="mr-2 text-slate-700 font-semibold cursor-pointer hover:bg-white transition duration-300">
            Login
          </a>
          <button className="btn bg-slate-900 text-slate-100 rounded-full mx-4 px-6 hover:bg-slate-700 transition duration-300">
            SignUp
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-50 p-4 overflow-y-auto">
          <div className="flex justify-between items-center">
            <h1
              className={`text-4xl text-slate-900 font-extrabold hover:text-slate-600 cursor-pointer transition duration-300 ${
                menuOpen ? "text-center" : ""
              }`}
              style={{
                fontFamily: "Dancing Script, cursive",
                transform: "rotate(-6deg)",
                width: menuOpen ? "100%" : "auto",
              }}
            >
              Dribbble
            </h1>
            <FaTimes
              className="text-2xl text-slate-700 cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
          <ul className="menu menu-vertical space-y-4 mt-4">
            <li>
              <a className="font-semibold cursor-pointer hover:bg-gray-200 transition duration-300 flex flex-col">
                Find Designer
                <ul className="ml-4 mt-2 space-y-2">
                  <li className="mb-4">
                    <h3 className="font-semibold">Designer Search</h3>
                    <p className="text-sm text-gray-600">
                      Quickly find your next designer
                    </p>
                  </li>
                  <li className="mb-4">
                    <h3 className="font-semibold">Post a job</h3>
                    <p className="text-sm text-gray-600">
                      The #1 job board for job hunt
                    </p>
                  </li>
                </ul>
              </a>
            </li>
            <li className="mb-4">
              <a className="font-semibold cursor-pointer hover:bg-gray-200 transition duration-300 flex flex-col">
                Courses
                <ul className="ml-4 mt-2 space-y-2">
                  <li>
                    <h3 className="font-semibold">UX Diploma</h3>
                    <p className="text-sm text-gray-600">
                      Learn UX design from scratch
                    </p>
                  </li>
                  <li>
                    <h3 className="font-semibold">UX Certificate</h3>
                    <p className="text-sm text-gray-600">
                      12-week UI skill building for designers
                    </p>
                  </li>
                  <li>
                    <h3 className="font-semibold">Live Interaction workshop</h3>
                    <p className="text-sm text-gray-600">
                      with design professional
                    </p>
                  </li>
                </ul>
              </a>
            </li>
            <li className="mb-4">
              <a className="font-semibold cursor-pointer hover:bg-gray-200 justify-center transition duration-300">
                Jobs
              </a>
            </li>
            <li className="mb-4">
              <a className="font-semibold justify-center cursor-pointer hover:bg-gray-200 transition duration-300">
                Go Pro
              </a>
            </li>
            <li>
              <a className="font-semibold justify-center cursor-pointer hover:bg-gray-200 transition duration-300">
                Login
              </a>
            </li>
            <li>
              <button className="btn bg-slate-900 text-slate-100 rounded-full w-full py-2 hover:bg-slate-700 transition duration-300">
                SignUp
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
