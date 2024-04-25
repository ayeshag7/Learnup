import Image from "next/image";
import React from "react";

function JoinFiverr() {
  return (
    <div className="flex justify-between gap-x-16 min-h-screen mx-0 my-16 relative border bg-[#0e734c]">
      <div className="absolute z-10 top-1/3 left-10 bg-[#0e734c]">
        <h4 className="text-white text-4xl mb-10 font-bold">
        Tout d'un coup, tout est faisable !
        </h4>
        <button
          className="border text-base font-medium px-5 py-2   border-[#1DBF73] bg-buttondarkgreen text-white rounded-md"
          type="button"
        >
          Rejoindre learneup
        </button>
      </div>
      <div className="ml-96 mt-8">
        <Image src="/signup.svg" width="1000" height="1000" alt="signup" className="rounded-sm" />
      </div>
    </div>
  );
}

export default JoinFiverr;
