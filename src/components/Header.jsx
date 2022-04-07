import LogoIcon from "./LogoIcon";
import { useState, useEffect } from "react";
import axios from "../utils/axios";

export default function Header() {
  const [message, setMessage] = useState("");
  const [setmylisturl, setMylistUrl] = useState("");
  const handleClick = () => {
    setMylistUrl(message);
    setMessage("");
    console.log("clicked");
  };

  useEffect(() => {
    console.log("called");
    (async () => {
      const headers = {
        accept: "application/json",
        "Content-Type": "application/json",
      };
      try {
        await axios.post(
          "/my-list",
          {
            url: setmylisturl,
          },
          { headers }
        );
      } catch (err) {
        console.log(err);
      }
    })();
  }, [setmylisturl]);

  return (
    <div className="p-8 bg-primary-orange shadow-md">
      <div>
        <div className="flex justify-center">
          <h1 className="my-32  text-secondary-cyan text-6xl font-bold">
            What would you like to embed?
          </h1>
          <LogoIcon />
        </div>
        <div className="relative">
          <div className="flex justify-center p-2 mb-2">
            <input
              className="shadow appearance-none border rounded w-1/2 py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="search"
              type="search"
              placeholder="マイリストのURLを入力してください"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="inline-flex items-center px-3 bg-primary-orange rounded-r-lg"
              onClick={handleClick}
            >
              <svg
                className="w-6 h-6 text-primary-variant-orange"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
