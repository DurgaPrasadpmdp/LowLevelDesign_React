const EachComment = (props) => {
  const { commentData } = props;
  console.log(props);

  return (
    <>
      <div className="flex">
        <div>
          <img
            width={"50px"}
            height={"50px"}
            src="https://th.bing.com/th/id/OIP.6vwZcc33X4K1oOH5puuU_gHaF7?w=240&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          />
        </div>
        <div>
          <p>{commentData.comment}</p>
        </div>
      </div>
      <div className="pl-5">
        {commentData?.replies &&
          commentData.replies.map((er) => {
            return <EachComment commentData={er} />;
          })}
      </div>
    </>
  );
};

export default EachComment;
