import React, { useState, useEffect, Fragment } from "react";
import Head from "next/head";
import Iframe from "../components/Iframe";
import Header from "../components/Header";
import axios from "../utils/axios";
import { Switch } from "@headlessui/react";

import ClipedModal from "../components/ClipedModal";

export default function Home() {
  const [mylisturl, setMylistUrl] = useState("");
  const [mylistId, setMylistId] = useState("");
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(300);
  const [message, setMessage] = useState("");
  const [uri, setUri] = useState("");
  const [generated, setGenerated] = useState(Boolean);
  const [isOpen, setIsOpen] = useState(false);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    console.log("called");
    if (mylisturl == "") {
      setMessage("URLを入力してください");
    } else {
      setMessage("埋め込みボックスを生成中...");
    }
    setGenerated(true);
    (async () => {
      setUri(new URL(window.location.href));
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
            setMessage(mylistId);
            setGenerated(false);
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
                setGenerated(false);
              });
          default:
            console.log(err);
        }
      }
    })();
  }, [mylisturl]);

  return (
    <>
      <Head>
        <title>d anime MyList</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <ClipedModal isOpen={isOpen} setIsOpen={setIsOpen} />
        <Header setMylistUrl={setMylistUrl} />
        <div className="flex justify-center">埋め込みオプションを設定</div>

        <div className="container mx-auto px-4 flex justify-center">
          <div className="block">
            <div className="mt-2">
              <div className="flex">
                <Switch
                  checked={enabled}
                  onChange={() => setEnabled(!enabled)}
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
                <p className="text-1xl mx-2">
                  {enabled ? <>枠線あり</> : <>枠線なし</>}
                </p>
              </div>
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
                border={enabled}
                message={message}
                uri={uri}
                generated={generated}
                setIsOpen={setIsOpen}
              />
            }
          </div>
        </div>
      </div>
    </>
  );
}
