import { useState } from "react";

const AccordianTab = (props) => {
  const { title, description, id } = props.data;
  const { accordianIndex, accordianFun } = props;
  console.log(props);
  return (
    <div className="w-[50%] border border-solid border-gray-600 rounded-md m-2">
      <div
        onClick={() => {
          if (accordianIndex === id) {
            accordianFun(null);
          } else {
            accordianFun(id);
          }
        }}
        className="font-bold border-b border-gray-600 border-solid p-2 cursor-pointer transition-all"
      >
        {title}
      </div>
      {accordianIndex === id && (
        <p className="p-2 transition-all">{description}</p>
      )}
    </div>
  );
};

export default AccordianTab;
