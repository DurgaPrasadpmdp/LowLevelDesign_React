const ChatMessage = (props) => {
  const { name, message } = props?.messageData;
  return (
    <div className="flex items-center">
      <div>
        <img
          width="50px"
          height="50px"
          src="https://th.bing.com/th/id/OIP.6vwZcc33X4K1oOH5puuU_gHaF7?w=240&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        />
      </div>
      <div>
        <span className="font-bold">{name} - </span>
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;
