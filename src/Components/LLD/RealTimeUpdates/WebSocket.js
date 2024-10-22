import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import DisplayMessages from "./DisplayMessages";

const WebSocket = () => {
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null);
  const [userName, setUserName] = useState("");
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    //const UserName = prompt("Enter UserName");
    //setUserName(UserName);
    const socket = io("http://localhost:9991");
    setSocket(socket);

    return () => {
      socket.disconnect();
    };
  }, []);

  if (socket) {
    socket.on("send-message", (msg) => {
      console.log(msg, "send message");
      setMessageList((messageList) => {
        return messageList.concat(msg);
      });
    });
  }

  function handleMessages() {
    setMessageList((messageList) => {
      return messageList.concat(message);
    });
    setMessage("");
    socket.emit("chat-message", message);
  }
  return (
    <div>
      <div>
        <DisplayMessages messageList={messageList} />
      </div>
      <div className="fixed bottom-0 w-[100%] p-2">
        <input
          type="text"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="border border-solid border-black rounded-md w-[90%] h-[100%] p-2"
        />
        <button
          className="border border-solid border-black rounded-md p-2 ml-2"
          onClick={() => {
            handleMessages();
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default WebSocket;
