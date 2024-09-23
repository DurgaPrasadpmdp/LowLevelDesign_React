import { useState } from "react";
import AccordianTab from "./AccordianTab";
import LANG from "../../Utils/LanguageTranslate";

const Accordian = (props) => {
  console.log(props);
  let AccordianData = LANG.en.accordianData;
  console.log(LANG);
  if (props.lang) {
    AccordianData = LANG[props.lang].accordianData;
  }
  const [accordianIndex, setAccoridanIndex] = useState(null);
  return (
    <div>
      {AccordianData.map((eachAccor) => {
        return (
          <div className="flex justify-center">
            <AccordianTab
              key={eachAccor.title}
              data={eachAccor}
              accordianFun={setAccoridanIndex}
              accordianIndex={accordianIndex}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Accordian;
