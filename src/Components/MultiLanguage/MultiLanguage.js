import { useState } from "react";
import Accordian from "../Accordian/Accordian";

const MultiLanguage = () => {
  const [language, setLanguage] = useState("en");
  const hanldeLanguageSelection = (lang) => {
    if (lang == "English") {
      setLanguage("en");
    } else if (lang == "Japanese") {
      setLanguage("jp");
    } else {
      setLanguage("fn");
    }
  };
  return (
    <div>
      <div className="flex justify-center m-3">
        <label className="block mr-2 font-bold"> Select the Language</label>
        <select
          onChange={(e) => {
            hanldeLanguageSelection(e?.target?.value);
          }}
          className="border border-solid border-black"
        >
          <option>English</option>
          <option>French</option>
          <option>Japanese</option>
        </select>
      </div>
      <Accordian lang={language} />
    </div>
  );
};

export default MultiLanguage;
