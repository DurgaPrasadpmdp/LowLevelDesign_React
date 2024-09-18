import { useState } from "react";
import AccordianTab from "./AccordianTab";

const AccordianData = [
  {
    title: "Accordian 1",
    id: 0,
    description:
      "This is the 1st item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    title: "Accordian 2",
    id: 1,
    description:
      "This is the 2nd item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    title: "Accordian 3",
    id: 2,
    description:
      "This is the 3rd accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    title: "Accordian 4",
    id: 3,
    description:
      "This is the  4th accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
];

const Accordian = () => {
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
