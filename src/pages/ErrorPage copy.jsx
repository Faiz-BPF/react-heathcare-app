import React from "react";
import { BsArrowRepeat } from "react-icons/bs";

export default function ErrorPage({ code, image, children }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#864AF9]">
      <div className="bg-[#FFF3F3] rounded-3xl p-10 w-[500px] text-center shadow-lg">
        {children}

        <div className="relative text-[100px] font-bold text-[#FFD0D0] mb-4">
          <span>{code}</span>

          {image && (
            <img
              src={image}
              alt="Error Illustration"
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[200px] h-auto pointer-events-none"
            />
          )}
        </div>

        <button className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-black hover:underline">
          <BsArrowRepeat />
          Go Home
        </button>
      </div>
    </div>
  );
}
