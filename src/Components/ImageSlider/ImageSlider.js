import { useEffect, useState } from "react";

const data = [
  "https://th.bing.com/th/id/R.829843c130c948d4fbb835dae965a5da?rik=LCpFbdcAeWDZ8w&riu=http%3a%2f%2fwallpapercave.com%2fwp%2ffAwVCh3.jpg&ehk=lGN4CaEuFMjMiZTZ2nF9id7MRRJ3e1tiWELDbLGorPE%3d&risl=&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/OIP.7Krrd7bmxw3eDbLGtPhBZQHaEK?rs=1&pid=ImgDetMain",
  "https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg",
  "https://wallpaperset.com/w/full/e/7/2/135245.jpg",
  "https://th.bing.com/th/id/OIP.i_7jq4bHqvltcvUeyPnk0gHaEK?rs=1&pid=ImgDetMain",
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const [timeInterval, setTimeInterval] = useState(null);
  const handleRightClick = () => {
    setIndex((index) => {
      return (index = index >= data.length - 1 ? 0 : index + 1);
    });
  };

  const handleLeftClick = () => {
    setIndex((index) => {
      return (index = index <= 0 ? data.length - 1 : index - 1);
    });
  };
  const handleMouseEnter = () => {
    console.log("mouse ent");
  };
  useEffect(() => {
    let interval = setInterval(() => {
      setIndex((index) => {
        return (index = index >= data.length - 1 ? 0 : index + 1);
      });
    }, 2000);

    setTimeInterval(interval);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={handleLeftClick}
        className="border border-solid h-[50px] border-black rounded-md bg-black text-white p-3 mr-3"
      >
        Left
      </button>
      {index}
      <div onMouseEnter={handleMouseEnter}>
        <img className="w-[800px] h-[500px] rounded-md" src={data[index]} />
      </div>
      <button
        onClick={handleRightClick}
        className="border border-solid h-[50px] border-black rounded-md bg-black text-white p-3 ml-3"
      >
        Right
      </button>
    </div>
  );
};

export default ImageSlider;
