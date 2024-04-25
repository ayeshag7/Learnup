import { categories } from "../../utils/categories";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function Services() {
  const router = useRouter();

  return (
    <div className="mx-20 my-16 ">
      <h2 className="text-4xl mb-10 text-white font-bold ">
      <span className="bg-[#DBF6A4] text-[#052E33] dark:bg-[#6B8B40] dark:text-white px-2">Vous en avez besoin, nous l'avons</span>
      </h2>
      <ul className="grid grid-cols-5 gap-10">
        {categories.map(({ name, logo }) => {
          return (
            <li
              key={name}
              className="flex flex-col justify-center items-center cursor-pointer hover:shadow-2xl hover:border-[#1DBF73]  border-2 border-transparent dark:border-gray-300 rounded-lg p-5 transition-all duration-500 bg-white dark:bg-gray-700 dark:hover:border-[#1DBF73] dark:transition-all dark:duration-500"
              onClick={() => router.push(`/search?category=${name}`)}
            >
              <Image src={logo} alt="category" height={50} width={50} />
              <span>{name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Services;
