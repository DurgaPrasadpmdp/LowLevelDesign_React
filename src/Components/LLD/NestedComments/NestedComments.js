import EachComment from "./EachComment";

const comments = [
  {
    name: "Durga Prasad",
    comment: " this is s test comments posted by Durga",
    replies: [
      {
        name: "Durga Prasad",
        comment: " this is s test comments replied to Durga 12",
      },
      {
        name: "Durga Prasad",
        comment: " this is s test comments replied to Durga 13",
      },
      {
        name: "Durga Prasad",
        comment: " this is s test comments replied to Durga 14",
      },
    ],
  },
  {
    name: "Durga Prasad",
    comment: "This is a test comment posted by Durga.",
    replies: [
      {
        name: "Amit Kumar",
        comment: "This is a test comment replied to Durga.",
        replies: [
          {
            name: "Sita Sharma",
            comment: "This is a reply to Amit's comment.",
            replies: [
              {
                name: "Ravi Singh",
                comment: "This is a reply to Sita's comment.",
              },
            ],
          },
        ],
      },
      {
        name: "Neha Gupta",
        comment: "This is another reply to Durga.",
        replies: [
          {
            name: "Vikram Mehta",
            comment: "This is a reply to Neha's comment.",
            replies: [
              {
                name: "Priya Joshi",
                comment: "This is a reply to Vikram's comment.",
              },
            ],
          },
          {
            name: "Anjali Roy",
            comment: "This is another reply to Neha.",
          },
        ],
      },
      {
        name: "Rahul Verma",
        comment: "A different perspective on Durga's comment.",
        replies: [],
      },
    ],
  },
];

const NestedComments = () => {
  return (
    <div>
      <p className="text-center font-bold">
        ................ Nested Comments ..................
      </p>
      <div>
        {comments.map((ec) => {
          return (
            <div className="border border-solid border-black">
              <EachComment commentData={ec} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NestedComments;
