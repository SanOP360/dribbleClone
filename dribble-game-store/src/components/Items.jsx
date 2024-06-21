import React from "react";
import Card from "./Card";

function Items() {
  const items = [
    {
      id: 1,
      name: "Game shop for landing page",
      path: "https://cdn.dribbble.com/userupload/10312790/file/still-c7b0ff615d4dbbbbf822f9e52bc91968.png?resize=400x300&vertical=center",
    },
    {
      id: 2,
      name: "Game landing page",
      path: "https://cdn.dribbble.com/userupload/8341937/file/still-09021e395b1ca0cba1a87621eec43e39.png?resize=400x300&vertical=center",
    },
    {
      id: 3,
      name: "Gaming Website",
      path: "https://cdn.dribbble.com/userupload/13874943/file/still-5d8c1c8f06a61147ef1d7737f2d08298.png?resize=400x300&vertical=center",
    },
    {
      id: 4,
      name: "Steam Redesign",
      path: "https://cdn.dribbble.com/userupload/6134126/file/still-9867ff36accd97ccc2a1e4800854ad84.png?resize=400x300&vertical=center",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 md:px-0 w-full md:w-[75%]">
        <div className="flex justify-between">
          <h2 className="text-md font-bold mb-4 md:text-center pl-4">
            More by Ronas IT | UI/UX Team
          </h2>

          <h3 className="text-sm font-thin">View Profile</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="my-8 md:my-40 flex justify-center text-xs space-x-3">
        <div className="py-1 px-2.5 border rounded-sm shadow-left-bottom text-gray-400">
          L
        </div>
        <div className="py-1 px-2.5 border rounded-sm shadow-left-bottom text-gray-400">
          R
        </div>
        <span className="flex items-center text-gray-500">Like</span>
      </div>
    </>
  );
}

export default Items;
