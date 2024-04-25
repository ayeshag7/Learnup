import Image from "next/image";
import React from "react";
import { BsCheckCircle } from "react-icons/bs";

function FiverrBusiness() {
  return (
    <div className="bg-[#0d084d] px-20 py-16 flex gap-10 border dark:border-gray-400">
      <div className="text-white flex flex-col gap-6 justify-center items-start">
        <div className="px-2 py-1.5">
          <span className="text-white text-3xl font-bold bg-[#565383] px-1.5">Produits</span>
        </div>
        <h2 className="text-3xl font-bold">Des solutions prêtes à l'emploi pour tous</h2>
        <h4 className="text-xl">
        Découvrez les meilleurs produits de commerce électronique proposés par des vendeurs du monde entier.
        </h4>
        <ul className="flex flex-col gap-4">
          <li className="flex gap-2 items-center">
            <BsCheckCircle className="text-white text-2xl" />
            <span className="text-lg">Une gamme variée</span>
          </li>
          <li className="flex gap-2 items-center">
            <BsCheckCircle className="text-white text-2xl" />
            <span className="text-lg">Normes de qualité</span>
          </li>
          <li className="flex gap-2 items-center">
            <BsCheckCircle className="text-white text-2xl" />
            <span className="text-lg">Options de marque et génériques</span>
          </li>
          <li className="flex gap-2 items-center">
            <BsCheckCircle className="text-white text-2xl" />
            <span className="text-lg">Innovation des produits</span>
          </li>
        </ul>
        <button
          className="border text-base font-medium px-6 py-3   border-[#1DBF73] bg-[#1DBF73] text-white rounded-md"
          type="button"
        >
          Explorer nos produits digitaux
        </button>
      </div>
      <div className="relative h-[512px] w-2/3">
        <Image src="/business.svg" alt="bsiness" fill />
      </div>
    </div>
  );
}

export default FiverrBusiness;
