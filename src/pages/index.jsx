import React, { useState, useEffect } from "react";
import Iframe from "../components/Iframe";
import Header from "../components/Header";
import axios from "../utils/axios";

export default function Home() {
  const [isBorder, setIsBorder] = useState(true);
  const [mylisturl, setMylistUrl] = useState("");
  const [mylistId, setMylistId] = useState("");
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(300);

  useEffect(() => {
    console.log("called");
    (async () => {
      const headers = {
        accept: "application/json",
        "Content-Type": "application/json",
      };
      try {
        await axios
          .put(
            "/my-list",
            {
              url: mylisturl,
            },
            { headers }
          )
          .then((res) => {
            setMylistId(res.data.mylist_id);
            console.log(res.data.mylist_id);
          });
      } catch (err) {
        console.log(err);
      }
    })();
  }, [mylisturl]);

  return (
    <div>
      <Header setMylistUrl={setMylistUrl} />
      <div className="flex justify-center">埋め込みオプションを設定</div>

      <div className="container mx-auto px-4 flex justify-center">
        <div className="block">
          <div className="mt-2">
            <div className="mt-4">
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="borderType"
                    value="枠線なし"
                    onChange={() => setIsBorder(false)}
                  />
                  <span className="ml-2">枠線なし</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="borderType"
                    value="枠線あり"
                    onChange={() => setIsBorder(true)}
                  />
                  <span className="ml-2">枠線あり</span>
                </label>
              </div>
            </div>
            <label className="block mt-4">
              <span className="text-gray-700">横幅を選択する</span>
              <select className="form-select mt-1 block w-full">
                <option onClick={() => setWidth(500)}>500</option>
                <option onClick={() => setWidth(400)}>400</option>
                <option onClick={() => setWidth(300)}>300</option>
              </select>
            </label>
            <label className="block mt-4">
              <span className="text-gray-700">縦幅を選択する</span>
              <select className="form-select mt-1 block w-full">
                <option onClick={() => setHeight(500)}>500</option>
                <option onClick={() => setHeight(400)}>400</option>
                <option onClick={() => setHeight(300)}>300</option>
              </select>
            </label>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="shadow-xs">
          {
            <Iframe
              mylistId={mylistId}
              width={width}
              height={height}
              border={isBorder}
            />
          }
        </div>
      </div>
    </div>
  );
}
