import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faHeart } from "@fortawesome/free-solid-svg-icons";

function Card({ item }) {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="card w-full max-w-xs bg-base-100 shadow-xl mx-auto sm:mx-4 overflow-hidden relative cursor-pointer">
      <div className="relative group">
        <img
          src={item.path}
          alt={item.name}
          className="w-full h-48 sm:h-60 object-cover transition-all duration-300 group-hover:blur-[2px]"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex items-center justify-between text-white">
            <h3 className="text-xl font-bold">{truncateText(item.name, 13)}</h3>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faSave}
                className="mr-2 hover:text-green-300"
              />
              <FontAwesomeIcon
                icon={faHeart}
                className="mr-2 hover:text-red-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
