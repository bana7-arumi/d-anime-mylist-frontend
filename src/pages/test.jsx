import Head from "next/head";
import Image from "next/image";
import makeIframe from "../utils/makeIframe";
import React, { useState, useEffect } from "react";

export default function Test() {
  const [Iframe, setIframe] = useState("<h1>👆ボタンを押してね<h1>");
  const handleClick = () => {
    var uri = new URL(window.location.href);
    // URL (http://localhost, https://hoge.com)
    const host = uri.protocol + "//" + uri.host;
    // データベースに存在しているIDを指定する string
    const id = "gDFZeAvzxD1TjaaW";
    // 埋め込みたいiframeの縦横のサイズ number
    const width = 300;
    const height = 500;
    // iframeにオレンジの枠を付けるか bool
    const border = true;
    const Iframe = makeIframe(host, id, width, height, border);
    setIframe(Iframe);
  };
  return (
    <div>
      <h1 className="text-5xl font-bold underline">Testページ</h1>
      <br />
      <br />
      <div className="m-5">
        <button onClick={handleClick}>ボタン</button>
        <div dangerouslySetInnerHTML={{ __html: Iframe }} />
      </div>
    </div>
  );
}
