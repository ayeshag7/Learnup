import Image from "next/image";
import React from "react";
import { BsCheckCircle } from "react-icons/bs";
function Everything() {
  const everythingData = [
    {
      title: "Respectez votre budget",
      subtitle:
        "Trouvez le service qui convient à tous les prix. Pas de taux horaire, mais une tarification basée sur le projet."
    },
    {
      title: "Obtenir rapidement un travail de qualité",
      subtitle:
        "Confiez votre projet à un freelance talentueux en quelques minutes et obtenez des résultats durables.",
    },
    {
      title: "Payer quand on vous est satisfait",
      subtitle:
        "Les devis sont établis à l'avance, ce qui signifie qu'il n'y a pas de surprise. Les paiements ne sont débloqués que lorsque vous donnez votre accord.",
    },
    {
      title: "Compter sur une assistance 24h/24 et 7j/7",
      subtitle:
        "Notre équipe d'assistance est disponible 24 heures sur 24 pour vous aider à tout moment, où que vous soyez.",
    },
  ];
  return (
    <div className="bg-[#0e734c] flex py-20 justify-between px-16">
      <div>
        <h2 className="text-4xl mb-12 text-white bg-[#5FAF4B] px-4 font-bold">
        Pourquoi nous ?
        </h2>
        <ul className="flex flex-col gap-10">
          {everythingData.map(({ title, subtitle }) => {
            return (
              <li key={title}>
                <div className="flex gap-2 items-center text-2xl">
                  <BsCheckCircle className="text-[#B8D94C] text-2xl" />
                  <h4 className="text-[#B8D94C] font-bold">{title}</h4>
                </div>
                <p className="text-[white] text-lg">{subtitle}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <Image src="/best-everything.svg" width="800" height="800" alt="everything" />
    </div>
  );
}

export default Everything;
