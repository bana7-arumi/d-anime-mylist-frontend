import Head from "next/head";
import Image from "next/image";
import Router from "next/router";
import React, { useState, useEffect } from "react";

export default function Page500() {
  // https://chicodeza.com/freeitems/saikoro-illust.html
  const status = 500;
  const message = "サーバーに障害が発生しています";

  const saikoroSize = 100;

  const [saikoroList, setSaikoroList] = useState([4, 1, 4]);

  const [isSpin, setIsSpin] = useState(true);
  const [flag, setFlag] = useState(false);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max + 1);
  };

  const isAllEqual = (array) => array.every((value) => value === array[0]);

  useEffect(() => {
    console.log(flag);
    console.log(saikoroList);
    if (!isAllEqual(saikoroList)) {
      setFlag(false);
      sleep(2, function () {
        setIsSpin(true);
      });
    } else {
      setFlag(true);
      setIsSpin(false);
    }
  }, [saikoroList]);

  const handleClick = () => {
    const num = 6;
    setIsSpin(false);
    setFlag(false);
    const melist = [getRandomInt(num), getRandomInt(num), getRandomInt(num)];
    setSaikoroList(melist);
  };

  const nothingHandleClick = () => {
    setFlag(false);
    setIsSpin(true);
  };

  function sleep(waitSec, callbackFunc) {
    var spanedSec = 0;
    var waitFunc = function () {
      spanedSec++;
      if (spanedSec >= waitSec) {
        if (callbackFunc) callbackFunc();
        return;
      }
      clearTimeout(id);
      id = setTimeout(waitFunc, 1000);
    };
    var id = setTimeout(waitFunc, 1000);
  }

  return (
    <>
      <Head>
        <title>
          {status} | {message}
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <div className="bg-primary-orange">
          <div className="h-screen w-screen py-24 text-center">
            <h1 className="text-8xl font-bold text-white mb-4">{status}</h1>
            <p className="text-2xl text-secondary-cyan">{message}</p>
            <div className="flex justify-center my-14">
              {saikoroList.map((data, index) => (
                <div
                  className={
                    isSpin
                      ? "mx-4 animate-spin cursor-pointer"
                      : "mx-4 cursor-pointer"
                  }
                  key={index}
                  onClick={isSpin ? handleClick : nothingHandleClick}
                >
                  <Image
                    src={`/images/saikoro/saikoro_${data}.png`}
                    alt="image"
                    width={saikoroSize}
                    height={saikoroSize}
                  />
                </div>
              ))}
            </div>
            {flag ? (
              <p className="text-2xl font-bold text-white mb-6">ゾロ目🎉</p>
            ) : (
              <p className="text-2xl font-bold text-white mb-6">👆クリック</p>
            )}
            <div>
              <button
                onClick={() => Router.push("/")}
                className="px-8 py-2 bg-primary-variant-orange text-white font-semibold hover:bg-amber-400"
              >
                トップに戻る
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
