import { useEffect, useState } from "react";
import UpdateDataForm from "./UpdateDataForm";

const LongPolling = () => {
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
    (async function getUpdatedData() {
      const res = await fetch("http://localhost:9999/longPolling/updated");
      const data = await res.json();
      setProfile(data);
    })();
  }, []);

  async function fetchData() {
    const res = await fetch("http://localhost:9999/LongPolling");
    const data = await res.json();
    setProfile(data);
  }

  return (
    <div className="">
      <div>
        <h2 className="p-2 text-xl">{profile?.name}</h2>
        <div className="p-2 text-xl">{profile.email}</div>
        <div className="p-2 text-xl">{profile?.age}</div>
        <div className="p-2 text-xl">{profile?.role}</div>
      </div>
      <UpdateDataForm />
    </div>
  );
};

export default LongPolling;
