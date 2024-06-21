import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSave,
  faHeart,
  faEnvelope,
  faInfo,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

export default function Content() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container p-0 mx-auto w-full lg:w-3/4 lg:mx-auto lg:p-6">
      <div className="w-full  bg-white mx-auto mb-0">
        <h1 className="text-2xl font-bold text-center md:text-left">
          Game Store Website
        </h1>

        <div
          className={`bg-white p-4 flex items-center justify-between text-black rounded-t-lg ${
            isSticky
              ? "sticky-navbar  shadow-md transition-all duration-300 ease-in-out z-100 h-auto"
              : ""
          }`}
          style={{ zIndex: 50, top: 0 }}
        >
          <div className="flex items-center">
            <img
              src="https://img.bleacherreport.net/img/images/photos/003/882/208/hi-res-67ba2cd4215bff0d322be08e173488e7_crop_north.jpg?1598817098&w=3072&h=2048"
              alt="Avatar"
              className="w-14 h-14 object-cover rounded-full shadow-lg"
            />
            <div className="ml-4">
              <h1 className="text-sm md:text-md font-semibold">
                Sanjay Chauhan <span className="font-light">for</span> Ronas IT
                | UI/UX Team
              </h1>

              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                <p className="text-xs text-green-500 cursor-pointer">
                  Available for work
                </p>
                <a className="ml-4 text-xs cursor-pointer hidden md:inline">
                  Follow
                </a>
              </div>
            </div>
          </div>
          <div className="flex  items-center space-x-4">
            <FontAwesomeIcon
              icon={faHeart}
              className="text-xl cursor-pointer duration-500 hover:text-red-400"
            />
            <FontAwesomeIcon
              icon={faSave}
              className="text-xl cursor-pointer hover:text-green-200 duration-500"
            />
            <button className="hidden md:block rounded-full px-4 py-2 bg-slate-900 text-white hover:bg-slate-700 font-medium text-sm">
              Get in touch
            </button>

            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-xl md:hidden cursor-pointer hover:text-green-200 duration-500 "
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-8 md:mt-0 p-0">
        <div className="w-full  pt-0">
          <img
            src="https://cdn.dribbble.com/userupload/2734363/file/original-35ffad088266109091572ef4cc186326.png?resize=1200x900"
            alt="GameUi"
            className=" w-full object-cover shadow-lg mb-4 md:rounded-lg"
          />
          <p className="my-4 text-lg w-3/4 text-center  mx-auto md:mt-24">
            Each year gaming industry grows almost by 9 percent. With so many
            games available, it’s always nice to have a site where you can find
            detailed info about the latest releases and try them. We’d like to
            share our new concept of the web game store! Let’s explore it!
          </p>
          <p className="my-4 text-lg w-3/4 text-center mx-auto">
            In the upper part of the page, there is a navigation bar. On the
            left, there are filters, while on the right there is a game poster
            and a list of product cards.
          </p>
          <p className="my-4 text-lg w-3/4 text-center mx-auto md:mb-24">
            Each product card displays the product price, so users don’t have to
            click on them. An eye-catching UI and simple navigation will turn
            choosing and buying games into a real pleasure.
          </p>
          <img
            src="https://cdn.dribbble.com/userupload/2734363/file/original-35ffad088266109091572ef4cc186326.png?resize=1200x900"
            alt="GameUi"
            className="w-full object-cover shadow-lg mb-4 mt-8 md:rounded-lg"
          />
          <p className="my-4 md:mt-24 text-lg w-3/4 text-center mx-auto">
            Keeping the background dark, we accented the main UI elements with
            orange. We chose this dark color palette because it matches the
            topic of computer games!
          </p>
          <img
            src="https://cdn.dribbble.com/userupload/2734366/file/original-cf08574f0d62b0ea43586f76fa2c232f.png?resize=1200x900&vertical=center"
            alt="GameUi"
            className="w-full object-cover shadow-lg mb-4 md:rounded-lg md:mt-24"
          />
          <p className="my-4 text-lg w-3/4 mt-20 text-center mx-auto">
            Have a project idea? We are available for new projects!
          </p>

          <p className="my-4 text-lg text-center mx-auto w-3/4 flex flex-wrap justify-center">
            <a className="text-md cursor-pointer border-b-2 border-pink-500 mx-2">
              info@sanjay.com
            </a>
            <span className="mx-2 hidden md:inline-block">|</span>
            <a className="text-md cursor-pointer border-b-2 border-pink-500 mx-2">
              Facebook
            </a>
            <span className="mx-2 hidden md:inline-block">|</span>
            <a className="text-md cursor-pointer border-b-2 border-pink-500 mx-2">
              Telegram
            </a>
            <span className="mx-2 hidden md:inline-block">|</span>
            <a className="text-md cursor-pointer border-b-2 border-pink-500 mx-2">
              LinkedIn
            </a>
            <span className="mx-2 hidden md:inline-block">|</span>
            <a className="text-md cursor-pointer border-b-2 border-pink-500 mx-2">
              Twitter
            </a>
            <span className="mx-2 hidden md:inline-block">|</span>
            <a className="text-md cursor-pointer border-b-2 border-pink-500 mx-2">
              Whatsapp
            </a>
          </p>

          <img
            src="https://cdn.dribbble.com/userupload/2734366/file/original-cf08574f0d62b0ea43586f76fa2c232f.png?resize=1200x900&vertical=center"
            alt="GameUi"
            className="w-full object-cover shadow-lg mb-4 md:rounded-lg md:mt-24"
          />

          <div className="flex justify-center items-center space-x-4 my-4  ">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-xl text-gray-500 cursor-pointer hover:text-pink-500"
            />
            <FontAwesomeIcon
              icon={faInfo}
              className="text-xl  text-gray-500 cursor-pointer hover:text-purple-500"
            />
            <FontAwesomeIcon
              icon={faDownload}
              className="text-xl text-gray-500 cursor-pointer hover:text-blue-500"
            />
            <FontAwesomeIcon
              icon={faHeart}
              className="text-xl text-gray-500  cursor-pointer hover:text-red-400"
            />
            <FontAwesomeIcon
              icon={faSave}
              className="text-xl text-gray-500 cursor-pointer hover:text-green-200"
            />
          </div>
        </div>

        <div className="relative w-full mt-24 flex items-center justify-center">
          <hr className="border-black w-[85%]" style={{ opacity: "0.8" }} />

          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="https://cdn.dribbble.com/users/4949363/avatars/small/606bb85ee728fd3d78bbddf7e70b3901.jpg?1676454777"
              alt="Avatar"
              className="w-18 h-18 object-cover rounded-full shadow-lg z-10"
            />
          </div>
        </div>

        <div className="mt-24 text-center">
          <h1 className="text-2xl font-bold">Ronas IT | UI/UX Team</h1>
          <p className="text-md text-gray-600">
            We make complex applications simple for users🖤
          </p>
          <button className="my-4 py-2 px-8 bg-slate-950 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-slate-300 hover:bg-slate-700">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
}
