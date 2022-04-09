import React, { useState, useEffect } from "react";
import Iframe from "../components/Iframe";
import Header from "../components/Header";
import axios from "../utils/axios";
import { Switch } from "@headlessui/react";

export default function Home() {
  const [isBorder, setIsBorder] = useState(true);
  const [mylisturl, setMylistUrl] = useState("");
  const [mylistId, setMylistId] = useState("");
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(300);
  const [enabled, setEnabled] = useState(false);

  const borderTriger = (flag) => {
    if (flag == true) {
      setEnabled(flag);
      setIsBorder(flag);
    } else {
      setEnabled(flag);
      setIsBorder(flag);
    }
    return <Iframe />;
  };

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
            setMylistId(res.data.mylist_id);
            console.log(res.data.mylist_id);
          });
      } catch (err) {
        switch (err.response?.status) {
          // すでに存在しているmylistのURLをPOSTすると409が返却される
          case 409:
            axios
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
          default:
            console.log(err);
        }
      }
    })();
  }, [mylisturl]);

  return (
    <div>
      <Header setMylistUrl={setMylistUrl} />
      <div className="flex justify-center">埋め込みオプションを設定</div>

      <div className="container mx-auto px-4 flex justify-center">
        <div className="block">
          <span className="text-gray-700">枠線を設定する</span>
          <div className="mt-2">
            <Switch
              checked={enabled}
              onChange={borderTriger}
              className={`${
                enabled ? "bg-blue-600" : "bg-gray-200"
              } relative inline-flex items-center h-6 rounded-full w-11`}
            >
              <span className="sr-only">Enable notifications</span>
              <span
                className={`${
                  enabled ? "translate-x-6" : "translate-x-1"
                } inline-block w-4 h-4 transform bg-white rounded-full`}
              />
            </Switch>
            <label className="block mt-4">
              <span className="text-gray-700">横幅を選択する</span>
              <select className="form-select mt-1 block w-full">
                <option onClick={() => setHeight(500)}>指定なし</option>
                <option onClick={() => setWidth(500)}>500</option>
                <option onClick={() => setWidth(400)}>400</option>
                <option onClick={() => setWidth(300)}>300</option>
              </select>
            </label>
            <label className="block mt-4">
              <span className="text-gray-700">縦幅を選択する</span>
              <select className="form-select mt-1 block w-full">
                <option onClick={() => setHeight(300)}>指定なし</option>
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
