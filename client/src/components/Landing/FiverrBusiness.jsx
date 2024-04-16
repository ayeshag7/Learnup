import Image from "next/image";
import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import FiverrLogo from "../FiverrLogo";

function FiverrBusiness() {
  return (
    <div className="bg-[#0d084d] px-20 py-16 flex gap-10">
      <div className="text-white flex flex-col gap-6 justify-center items-start">
        <div className="border-2 border-[#1DBF73] px-2 py-1.5">
          <span className="text-white text-3xl font-bold">Products</span>
        </div>
        <h2 className="text-3xl font-bold">Ready made solutions for everyone</h2>
        <h4 className="text-xl">
          Explore the best ecommerce products offered by sellers from all around the world.
        </h4>
        <ul className="flex flex-col gap-4">
          <li className="flex gap-2 items-center">
            <BsCheckCircle className="text-[#62646a] text-2xl" />
            <span>Diverse Range</span>
          </li>
          <li className="flex gap-2 items-center">
            <BsCheckCircle className="text-[#62646a] text-2xl" />
            <span>Quality Standards</span>
          </li>
          <li className="flex gap-2 items-center">
            <BsCheckCircle className="text-[#62646a] text-2xl" />
            <span>Branded and Generic Options</span>
          </li>
          <li className="flex gap-2 items-center">
            <BsCheckCircle className="text-[#62646a] text-2xl" />
            <span>Product Innovation</span>
          </li>
        </ul>
        <button
          className="border text-base font-medium px-5 py-2   border-[#1DBF73] bg-[#1DBF73] text-white rounded-md"
          type="button"
        >
          Explore our digital products
        </button>
      </div>
      <div className="relative h-[512px] w-2/3">
        <Image src="/business.svg" alt="bsiness" fill />
      </div>
    </div>
  );
}

export default FiverrBusiness;
