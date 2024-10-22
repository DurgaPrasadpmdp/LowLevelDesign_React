const DisplayMessages = ({ messageList }) => {
  console.log(messageList);
  return (
    <div>
      {messageList.map((msg) => {
        return (
          <>
            {/* <span className="font-bold">{msg.userName} - </span> */}
            <div>
              <span>{msg}</span>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default DisplayMessages;
