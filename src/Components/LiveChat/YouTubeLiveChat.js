import Chat from "./Chat";

export const YouTubeLiveChat = () => {
  return (
    <div className="flex ">
      <div className="m-2 w-[70%]">
        <iframe
          width="100%"
          height="600px"
          src="https://www.youtube.com/embed/jy5F6_OTFyM?si=RLsH_lZa0nC-EBaE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className=" border border-solid border-black m-2 w-[30%]">
        <Chat />
      </div>
    </div>
  );
};
