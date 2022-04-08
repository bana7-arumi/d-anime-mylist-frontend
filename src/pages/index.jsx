import React, { useState, useEffect } from "react";
import Iframe from "../components/Iframe";
import Header from "../components/Header";
import axios from "../utils/axios";

export default function Home() {
  const [isBorder, setIsBorder] = useState(true);
  const [mylisturl, setMylistUrl] = useState("");
  const [mylistid, setMylistId] = useState("");

  // const handleClick = () => {
  //   setMylistUrl(value);
  //   setValue("");
  //   console.log("clicked");
  // };

  useEffect(() => {
    console.log("called");
    (async () => {
      const headers = {
        accept: "application/json",
        "Content-Type": "application/json",
      };
      try {
        await axios
          .post(
            "/my-list",
            {
              url: mylisturl,
            },
            { headers }
          )
          .then((res) => {
            setMylistId(res.data.id);
            console.log(res.data.id);
          });
      } catch (err) {
        console.log(err);
      }
    })();
  }, [mylisturl]);

  return (
    <div>
      <Header setMylistUrl={setMylistUrl} />
      <div className="flex justify-center">Here are your display options.</div>
      <div className="container mx-auto px-4 flex justify-center">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="group active:primary-variant-orange shadow-xs"></div>
            <button
              className="group hover:bg-primary-orange rounded-lg"
              onClick={() => setIsBorder(false)}
            >
              <div className="group-hover:text-white box h-32 w-32 p-4"></div>
            </button>
          </div>
          <div>
            <button
              className="group hover:bg-primary-orange  rounded-lg"
              onClick={() => setIsBorder(true)}
            >
              <div className="shadow-xs">
                <div className="group-hover:text-white box-border h-32 w-32 p-4 border-2 border-primary-orange rounded-lg"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="shadow-xs">
          {<Iframe width={300} height={500} border={isBorder} />}
        </div>
      </div>
    </div>
  );
}
