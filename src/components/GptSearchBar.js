import React from "react";
import langLocalisation from "../utils/langLocalisation";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const lang = useSelector((store) => store?.appConfig?.langSelected);
  return (
    <div className="pt-[12%] flex justify-center">
      <form
        className="grid grid-cols-12 w-1/2 bg-gray-950 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="col-span-9 p-4 m-2 rounded-lg border-1"
          name=""
          placeholder={langLocalisation[lang].GptSearchPlaceholder}
        />
        <button className="col-span-3 bg-red-700 text-white p-4 m-2 rounded-lg">
          {langLocalisation[lang]?.Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
