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

  const [isPlaying, setIsPlaying] = useState(true);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max + 1);
  };

  const isAllEqual = (array) => array.every((value) => value === array[0]);

  const handleClick = () => {
    const num = 6;
    setIsPlaying((isPlaying) => !isPlaying);
    const list = [getRandomInt(num), getRandomInt(num), getRandomInt(num)];
    setSaikoroList(list);
    isAllEqual(list) && window.alert("ゾロ目");
    setSaikoroList((saikoroList) => {
      sleep(2, function () {
        setIsPlaying((isPlaying) => !isPlaying);
      });
      return saikoroList;
    });
  };
  const nothingHandleClick = () => {};

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
    <div>
      <div className="bg-primary-orange">
        <div className="h-screen w-screen py-24 text-center">
          <h1 className="text-8xl font-bold text-white mb-4">{status}</h1>
          <p className="text-2xl text-teal-200">{message}</p>
          <div className="flex justify-center my-14">
            {saikoroList.map((data, index) => (
              <div
                className={isPlaying ? "mx-4 animate-spin" : "mx-4"}
                key={index}
                onClick={isPlaying ? handleClick : nothingHandleClick}
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
  );
}
