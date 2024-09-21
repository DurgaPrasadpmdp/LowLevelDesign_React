import ChatMessage from "./ChatMessage";
import { useEffect, useState } from "react";
const Chat = () => {
  const newChatData = [
    { name: "Uma", message: "Just got back from a trip!", logo: "" },
    { name: "Vera", message: "Who's watching the game tonight?", logo: "" },
    { name: "Will", message: "I have a funny story to share!", logo: "" },
    { name: "Xena", message: "Can't wait for the holiday season!", logo: "" },
    { name: "Yara", message: "Just baked some cookies!", logo: "" },
    { name: "Zane", message: "What’s your go-to karaoke song?", logo: "" },
    {
      name: "Ava",
      message: "I need some new music recommendations.",
      logo: "",
    },
    { name: "Ben", message: "Let’s play some board games!", logo: "" },
    { name: "Cora", message: "Anyone up for a hike this weekend?", logo: "" },
    { name: "Derek", message: "I just finished a great series!", logo: "" },
    { name: "Eva", message: "Who has seen the new season?", logo: "" },
    { name: "Finn", message: "I love trying new recipes.", logo: "" },
    { name: "Gina", message: "Let’s do a picnic soon!", logo: "" },
    { name: "Hugo", message: "I have a cool gadget to show you!", logo: "" },
    { name: "Iris", message: "What’s your favorite sport?", logo: "" },
    {
      name: "Jake",
      message: "Just started a new series on Netflix.",
      logo: "",
    },
    { name: "Kira", message: "I need to plan a vacation!", logo: "" },
    { name: "Leo", message: "Who wants to go to a concert?", logo: "" },
    { name: "Maya", message: "Just got some new art supplies!", logo: "" },
    { name: "Nate", message: "I’m excited for the upcoming game!", logo: "" },
    { name: "Alice", message: "Hi there! How's it going?", logo: "" },
    { name: "Bob", message: "What are you up to today?", logo: "" },
    { name: "Charlie", message: "Excited for the weekend!", logo: "" },
    { name: "Dana", message: "Just finished a project!", logo: "" },
    { name: "Eve", message: "Loving the weather today!", logo: "" },
    { name: "Frank", message: "Have you seen the latest movie?", logo: "" },
    { name: "Grace", message: "Let's grab lunch soon!", logo: "" },
    { name: "Hank", message: "I have a great book recommendation!", logo: "" },
    { name: "Ivy", message: "Who's up for a game tonight?", logo: "" },
    { name: "Jack", message: "I need coffee!", logo: "" },
    { name: "Kara", message: "Planning a trip next month!", logo: "" },
    { name: "Leo", message: "Just started a new hobby.", logo: "" },
    { name: "Mia", message: "Can’t wait for the concert!", logo: "" },
    { name: "Nina", message: "Anyone up for a movie marathon?", logo: "" },
    { name: "Owen", message: "I have some exciting news!", logo: "" },
    { name: "Paula", message: "What’s your favorite TV show?", logo: "" },
    { name: "Quinn", message: "Just got a new pet!", logo: "" },
    { name: "Ray", message: "Who loves pizza?", logo: "" },
    { name: "Sara", message: "I need help with my homework.", logo: "" },
    { name: "Tom", message: "Let’s plan a meetup!", logo: "" },
  ];

  const [chatD, setChatD] = useState([]);
  const [message, setMessage] = useState("");

  const sendChatMessage = () => {
    const newMessage = { name: "Test User", message: message, logo: "" };
    setChatD((chatD) => {
      return [newMessage, ...chatD];
    });
    setMessage("");
  };
  useEffect(() => {
    let i = setInterval(() => {
      console.log("interval");
      const randomIndex = Math.floor(Math.random() * newChatData.length);
      const randomChat = newChatData[randomIndex];
      setChatD((chatD) => {
        return [randomChat, ...chatD];
      });
      if (chatD.length > 80) {
        setChatD((chatD) => {
          return chatD.slice(0, 80);
        });
      }
    }, 3000);

    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <>
      <div className="h-[560px] flex flex-col-reverse overflow-y-auto">
        {chatD.map((em) => {
          return (
            <div className="m-1 pb-2">
              <ChatMessage messageData={em} />
            </div>
          );
        })}
      </div>
      <div className="h-[40px] flex justify-center gap-2 m-2">
        <input
          onChange={(e) => {
            setMessage(e?.target?.value);
          }}
          value={message}
          type="text"
          placeholder="Enter the Message"
          className="w-[90%] h-[100%] border border-solid border-black p-2 rounded-md"
        />
        <button
          onClick={sendChatMessage}
          className="border border-solid border-black p-2 rounded-md"
        >
          Send
        </button>
      </div>
    </>
  );
};

export default Chat;
