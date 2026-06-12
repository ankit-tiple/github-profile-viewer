"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Hero() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState({});

  const router = useRouter();
  const userViewButtonHandler = async () => {
    if (!username.trim()) return;
    router.push(`/${username}`);
  };

  return (
    <section className="flex flex-row">
      <div className=" min-h-dvh flex-1 flex flex-col items-center justify-center">
        <h1>A Simpler way to show your Github Profile and Repositories</h1>
        <div className="flex flex-row">
          <input
            placeholder="Enter a GitHub username.."
            className="border-2 border-gray-600 m-0.5 p-1"
            name="usename"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <button
            className="border border-gray-600 p-1 m-0.5"
            onClick={() => userViewButtonHandler()}
          >
            View
          </button>
        </div>
      </div>
      <div className="min-h-dvh flex-1">Right Content</div>
    </section>
  );
}
