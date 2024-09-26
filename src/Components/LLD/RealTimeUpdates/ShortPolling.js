import { useEffect, useState } from "react";
import UpdateDataForm from "./UpdateDataForm";

const ShortPolling = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    age: "",
    role: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    let interval = setInterval(() => {
      fetchData();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  async function fetchData() {
    const res = await fetch("http://localhost:9999/shortPolling");
    const data = await res.json();
    setProfile(data);
  }
  return (
    <>
      <div>
        <h2 className="p-2 text-xl">{profile?.name}</h2>
        <div className="p-2 text-xl">{profile.email}</div>
        <div className="p-2 text-xl">{profile?.age}</div>
        <div className="p-2 text-xl">{profile?.role}</div>
      </div>

      <UpdateDataForm />
    </>
  );
};

export default ShortPolling;
