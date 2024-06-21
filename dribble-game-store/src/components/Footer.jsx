
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-black md:w-4/5 mx-auto">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="md:flex md:justify-between md:items-center">
          
          <h1
            className="text-3xl font-extrabold mb-4 md:mb-0 text-center 
            "
            style={{
              fontFamily: "Dancing Script, cursive",
              transform: "rotate(-6deg)",
              
            }}
          >Dribbble</h1>
          <div className="flex flex-col md:flex-row md:gap-4 md:items-center">
            <nav className="flex justify-center gap-3 md:gap-7 mb-4 md:mb-0">
              <span className="text-sm font-medium cursor-pointer">
                For designers
              </span>
              <span className="text-sm font-medium cursor-pointer">
                Hire talent
              </span>
              <span className="text-sm font-medium cursor-pointer">
                Inspiration
              </span>
            </nav>
            <nav className="flex justify-center gap-7 mb-4 md:mb-0">
              <span className="text-sm font-medium cursor-pointer">
                Advertising
              </span>
              <span className="text-sm font-medium cursor-pointer">Blog</span>
              <span className="text-sm font-medium cursor-pointer">About</span>
              <span className="text-sm font-medium cursor-pointer">
                Careers
              </span>
              <span className="text-sm font-medium cursor-pointer">
                Support
              </span>
            </nav>
          </div>
          <div className="flex justify-center md:justify-end gap-7">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-current  text-gray-700 hover:text-blue-500 transition duration-300"
                viewBox="0 0 24 24"
              >
                <path d="M23.954 4.569c-.885.394-1.83.658-2.825.775 1.014-.608 1.794-1.57 2.163-2.724-.949.564-2.001.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.72 0-4.926 2.206-4.926 4.925 0 .386.044.762.127 1.124-4.093-.205-7.719-2.165-10.148-5.144-.424.728-.667 1.57-.667 2.475 0 1.708.869 3.215 2.188 4.099-.807-.026-1.566-.248-2.228-.617v.062c0 2.385 1.693 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.314 0-.623-.03-.922-.086.623 1.944 2.432 3.355 4.575 3.396-1.675 1.314-3.781 2.097-6.073 2.097-.394 0-.779-.023-1.158-.067 2.165 1.39 4.738 2.204 7.508 2.204 9.008 0 13.94-7.464 13.94-13.941 0-.213-.004-.426-.013-.637.957-.691 1.786-1.56 2.444-2.549z" />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-current text-gray-700 hover:text-blue-700 transition duration-300"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.325 1.325 1.325h21.351c.733 0 1.325-.592 1.325-1.325v-21.351c0-.733-.592-1.325-1.325-1.325zm-13.339 20.292h-3.831v-9.792h3.831v9.792zm-1.915-11.154c-1.215 0-2.202-.987-2.202-2.202s.987-2.202 2.202-2.202 2.202.987 2.202 2.202-.987 2.202-2.202 2.202zm13.154 11.154h-3.83v-5.353c0-1.276-.026-2.919-1.777-2.919-1.779 0-2.051 1.388-2.051 2.826v5.446h-3.83v-9.792h3.678v1.337h.053c.513-.971 1.767-1.995 3.635-1.995 3.887 0 4.603 2.558 4.603 5.887v5.563z" />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-current text-gray-700 hover:text-pink-500 transition duration-300"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c-5.514 0-10 4.486-10 10 0 4.418 3.584 8.1 8.002 8.1.61 0 .898-.491.898-.901v-3.212c-3.337.724-4.033-1.612-4.033-1.612-.546-1.387-1.336-1.757-1.336-1.757-1.09-.746.082-.731.082-.731 1.203.084 1.834 1.24 1.834 1.24 1.073 1.834 2.813 1.304 3.501.997.108-.777.421-1.305.766-1.605-2.666-.301-5.467-1.333-5.467-5.931 0-1.309.469-2.381 1.236-3.22-.124-.302-.535-1.519.118-3.167 0 0 1.008-.322 3.301 1.23.957-.265 1.983-.399 3.003-.404 1.02.005 2.046.139 3.003.404 2.291-1.552 3.299-1.23 3.299-1.23.655 1.648.244 2.865.12 3.167.769.839 1.235 1.911 1.235 3.22 0 4.61-2.804 5.625-5.475 5.922.431.372.817 1.105.817 2.228v3.3c0 .415.288.901.896.901 4.417 0 8-3.682 8-8.1 0-5.514-4.486-10-10-10z" />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-current gd text-gray-700 hover:text-red-600 transition duration-300"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c-5.514 0-10 4.486-10 10 0 4.418 3.584 8.1 8.002 8.1.61 0 .898-.491.898-.901v-3.212c-3.337.724-4.033-1.612-4.033-1.612-.546-1.387-1.336-1.757-1.336-1.757-1.09-.746.082-.731.082-.731 1.203.084 1.834 1.24 1.834 1.24 1.073 1.834 2.813 1.304 3.501.997.108-.777.421-1.305.766-1.605-2.666-.301-5.467-1.333-5.467-5.931 0-1.309.469-2.381 1.236-3.22-.124-.302-.535-1.519.118-3.167 0 0 1.008-.322 3.301 1.23.957-.265 1.983-.399 3.003-.404 1.02.005 2.046.139 3.003.404 2.291-1.552 3.299-1.23 3.299-1.23.655 1.648.244 2.865.12 3.167.769.839 1.235 1.911 1.235 3.22 0 4.61-2.804 5.625-5.475 5.922.431.372.817 1.105.817 2.228v3.3c0 .415.288.901.896.901 4.417 0 8-3.682 8-8.1 0-5.514-4.486-10-10-10z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="md:mt-16 mt-12 flex flex-wrap justify-center md:justify-between">
          <div className="flex flex-col mb-4  md:flex-row gap-5 text-center md:text-left">
            <n6v className="flex gap-3 md:gap-4">
              <span className="text-sm">©2024 Dribbble</span>
              <a
                href="#"
                className="text-gray-700 text-sm   transition duration-300"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-700 text-sm   transition duration-300"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-700 text-sm   transition duration-300"
              >
                Cookies
              </a>
            </n6v>
          </div>
          <div className="flex flex-wrap md:flex-row gap-4 text-center md:text-left">
            <nav className="flex gap-4">
              <a
                href="#"
                className="text-gray-700 text-sm  transition duration-300"
              >
                Jobs
              </a>
              <a
                href="#"
                className="text-gray-700 text-sm   transition duration-300"
              >
                Designers
              </a>
              <a
                href="#"
                className="text-gray-700 text-sm   transition duration-300"
              >
                Freelancers
              </a>
              <a
                href="#"
                className="text-gray-700 text-sm   transition duration-300"
              >
                Tags
              </a>
              <a
                href="#"
                className="text-gray-700 text-sm   transition duration-300"
              >
                Places
              </a>
              <a
                href="#"
                className="text-gray-700 text-sm   transition duration-300"
              >
                Resources
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}


