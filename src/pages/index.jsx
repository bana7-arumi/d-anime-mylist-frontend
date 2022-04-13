import React, { useState, useEffect, Fragment } from "react";
import Head from "next/head";
import Iframe from "../components/Iframe";
import Header from "../components/Header";
import axios from "../utils/axios";
import { Switch } from "@headlessui/react";

import makeIframe from "../utils/makeIframe";

import ClipedModal from "../components/ClipedModal";

export default function Home() {
  const [mylisturl, setMylistUrl] = useState("");
  const [mylistId, setMylistId] = useState("");
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(800);
  const [message, setMessage] = useState("");
  const [uri, setUri] = useState("");
  const [generating, setGenerating] = useState(Boolean);
  const [isOpen, setIsOpen] = useState(false);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    console.log("called");
    if (mylisturl == "") {
      setMessage("URLを入力してください");
    } else {
      setMessage("埋め込みボックスを生成中...");
      setGenerating(true);
    }
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
            const host = uri.protocol + "//" + uri.host;
            const iframeHTML = makeIframe(
              host,
              res.data.mylist_id,
              width,
              height,
              enabled
            );
            setMessage(iframeHTML);
            setGenerating(false);
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
                setGenerating(false);
                const host = uri.protocol + "//" + uri.host;
                const iframeHTML = makeIframe(
                  host,
                  res.data.mylist_id,
                  width,
                  height,
                  enabled
                );
                setMessage(iframeHTML);
              })
              .catch((e) => {
                setMessage("URLに誤りがあります");
                setGenerating(false);
              });
          default:
            console.log(err);
        }
      }
    })();
  }, [mylisturl]);

  useEffect(() => {
    if (mylisturl == "") {
      setMessage("URLを入力してください");
    } else {
      const iframeHTML = makeIframe(
        new URL(window.location.href),
        mylistId,
        width,
        height,
        enabled
      );
      setMessage(iframeHTML);
    }
  }, [width, height, enabled]);

  return (
    <>
      <Head>
        <title>d anime MyList</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <ClipedModal isOpen={isOpen} setIsOpen={setIsOpen} />
        <Header setMylistUrl={setMylistUrl} />
        <div className="flex justify-center items-center mt-3">
          <div className="p-4 w-1/3 border-solid border-2 border-bg-gray-200 rounded-md">
            <div className="flex justify-center">埋め込みオプションを設定</div>
            <div className="container mx-auto px-4 flex justify-center">
              <div className="block">
                <div className="mt-2">
                  <div className="flex my-3">
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
                  <div className="flex mt-3">
                    <div className="mr-1">
                      <p>横(px)</p>
                      <input
                        type="number"
                        className="cursor-pointer shadow appearance-none border rounded-lg py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  hover:bg-gray-200"
                        placeholder="横幅(px)"
                        defaultValue={width}
                        onChange={(e) => setWidth(e.target.value)}
                      />
                    </div>
                    <div className="ml-1">
                      <p>縦(px)</p>
                      <input
                        type="number"
                        className="cursor-pointer shadow appearance-none border rounded-lg py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  hover:bg-gray-200"
                        defaultValue={height}
                        placeholder="縦幅(px)"
                        onChange={(e) => setHeight(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="shadow-xs">
            <Iframe
              mylistId={mylistId}
              width={width}
              height={height}
              border={enabled}
              message={message}
              uri={uri}
              generating={generating}
              setIsOpen={setIsOpen}
            />
          </div>
        </div>
      </div>
    </>
  );
}
