import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function PopularServices() {
  const router = useRouter();
  const popularServicesData = [
    { name: "Ai Artists", label: "Ajouter un talent à l'IA", image: "/service1.png" },
    { name: "Logo Design", label: "Créez votre marque", image: "/service2.jpeg" },
    {
      name: "Wordpress",
      label: "Personnalisez votre site",
      image: "/service3.jpeg",
    },
    {
      name: "Voice Over",
      label: "Partagez votre message",
      image: "/service4.jpeg",
    },
    {
      name: "Social Media",
      label: "Atteindre plus de clients",
      image: "/service5.jpeg",
    },
    { name: "SEO", label: "Débloquer la croissance en ligne", image: "/service6.jpeg" },
    {
      name: "Illustration",
      label: "Colorez vos rêves",
      image: "/service7.jpeg",
    },
    { name: "Translation", label: "S'ouvrir au monde", image: "/service8.jpeg" },
  ];
  return (
    <div className="mx-20 my-16">
      <h2 className="text-4xl mb-16 mx-20 font-bold">
          <span className="bg-[#DBF6A4] text-[#052E33] dark:bg-[#6B8B40] dark:text-white px-2">Services populaires :</span>
      </h2>
      <ul className="flex justify-center flex-wrap gap-16">
        {popularServicesData.map(({ name, label, image }) => {
          return (
            <li
              key={name}
              className="relative cursor-pointer"
              onClick={() => router.push(`/search?q=${name.toLowerCase()}`)}
            >
              <div className="absolute z-10 text-white left-5 top-4">
                <span>{label}</span>
                <h6 className="font-extrabold text-2xl">{name}</h6>
              </div>
              <div className="h-80 w-72 shadow-lg">
                <Image src={image} fill alt="service" className="rounded-lg border border-[#1DBF73] dark:border-gray-300 shadow-lg" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PopularServices;
