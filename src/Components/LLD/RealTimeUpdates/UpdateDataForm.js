import { useReducer } from "react";
import { json } from "react-router-dom";

const UpdateDataForm = () => {
  const formReducer = (state, action) => {
    console.log(state, action);

    if (action.field == "name") {
      return { ...state, name: action.value };
    }

    if (action.field == "email") {
      return { ...state, email: action.value };
    }
    if (action.field == "age") {
      return { ...state, age: action.value };
    }
    if (action.field == "role") {
      return { ...state, role: action.value };
    }
    // return state;
  };

  const submitFormData = () => {
    saveData();
    saveDataByLongPolling();
  };

  async function saveDataByLongPolling() {
    const res = fetch("http://localhost:9999/longPolling/updateprofile", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    });
  }

  async function saveData() {
    const res = fetch("http://localhost:9999/shortPolling/updateprofile", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    });
  }
  const [state, dispatch] = useReducer(formReducer, {
    name: "",
    email: "",
    age: "",
    role: "",
  });

  return (
    <>
      <div className="flex justify-center">
        <form>
          <h2>Update Form from some other machine</h2>
          <div className="p-2 ">
            <label htmlFor="name" className=" block ">
              Name
            </label>
            <input
              className="border border-solid border-black"
              onChange={(e) => {
                dispatch({ field: "name", value: e.target.value });
              }}
              id="name"
              type="text"
              placeholder="Enter Name"
            />
          </div>
          <div className="p-2 ">
            <label htmlFor="email" className=" block ">
              Email
            </label>
            <input
              onChange={(e) => {
                dispatch({ field: "email", value: e.target.value });
              }}
              className="border border-solid border-black"
              id="email"
              type="email"
              placeholder="Enter Email"
            />
          </div>
          <div className="p-2 ">
            <label htmlFor="age" className=" block ">
              Age
            </label>
            <input
              onChange={(e) => {
                dispatch({ field: "age", value: e.target.value });
              }}
              className="border border-solid border-black"
              id="age"
              type="number"
              placeholder="Enter Age"
            />
          </div>
          <div className="p-2 ">
            <label htmlFor="role" className=" block ">
              Role
            </label>
            <input
              onChange={(e) => {
                dispatch({ field: "role", value: e.target.value });
              }}
              className="border border-solid border-black"
              id="role"
              type="text"
              placeholder="Enter Role"
            />
          </div>
        </form>
      </div>
      <button
        onClick={() => {
          submitFormData();
        }}
        className="bg-black text-white border border-solid border-black p-4"
      >
        Update Profile
      </button>
    </>
  );
};

export default UpdateDataForm;
