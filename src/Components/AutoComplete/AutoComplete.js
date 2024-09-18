import { useEffect, useState } from "react";

const AutoComplete = () => {
  const [searchText, setSearchText] = useState("java script");
  const [autoComplete, setAutoComplete] = useState([]);
  const [showAutoComplete, setShowAutoComplete] = useState(false);
  const [cachedData, setCachedData] = useState({});

  useEffect(() => {
    let timer = setTimeout(() => {
      fetchAutoComplete();
    }, [500]);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  async function fetchAutoComplete() {
    console.log(cachedData, "init");
    if (cachedData[searchText]) {
      console.log(cachedData, "inside caced");

      setAutoComplete(cachedData[searchText]);
      return;
    }

    console.log("search Text API CALL");
    // const response = await fetch(
    //   "http://suggestqueries.google.com/complete/search?client=firefox&q=" +
    //     searchText
    // );
    // const data = response.json();

    const data = [
      "java script",
      [
        "javascript",
        "javascript compiler",
        "javascript interview questions",
        "javascript logo",
        "javascript code",
        "java script in hindi",
        "javascript notes",
        "javascript mdn",
        "javascript book",
        "javascript pdf",
      ],
      [],
      {
        "google:suggestsubtypes": [
          [512, 10],
          [512, 10],
          [512, 10],
          [512, 10],
          [512, 10],
          [512],
          [512, 10],
          [512, 10],
          [512, 10],
          [512, 10],
        ],
      },
    ];
    cachedData[searchText] = data[1];
    setCachedData((cachedData[searchText] = data[1]));
    setAutoComplete(data[1]);
    setShowAutoComplete(true);
    console.log(cachedData);
  }
  return (
    <div className="flex justify-center">
      <div className="w-[50%]">
        <input
          onChange={(e) => {
            setSearchText(e?.target?.value);
          }}
          onBlur={() => {
            setShowAutoComplete(false);
          }}
          onFocus={() => {
            setShowAutoComplete(true);
          }}
          className="w-[100%] border border-solid border-gray-600 rounded-md p-3"
        />
        {autoComplete.length > 0 && showAutoComplete && (
          <div className="border border-solid border-gray-600 rounded-md">
            <ul>
              {autoComplete.map((data) => {
                return (
                  <li
                    key={data}
                    className="hover:bg-slate-200 cursor-pointer p-2"
                  >
                    {data}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AutoComplete;
