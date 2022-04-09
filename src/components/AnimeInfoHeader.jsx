import Head from "next/head";
import Image from "next/image";
import { render } from "react-dom";
import { useState } from "react/cjs/react.development";

function isFirstTitle (props){
  if (props.info.stories != " ") {
    if (props.info.first == "　") {
      return <>Chapter.1 ~</>;
    } else {
      return <>{"第1話　" + props.info.first}</>;
    }
  }
  return <></>;
};

export default function animeInfoHeader(props) {
  return (
    <a href={props.info.url} target="_blank" rel="noopener noreferrer">
      <div className="ai au ah av">
        {/* 画像 */}
        <div className="ah aw ax">
          <div className="ah b3 b4 b5 b6 ">
            <Image
              src={
                props.info.image == null
                  ? "/images/gray.jpeg"
                  : props.info.image
              }
              alt={props.info.title}
              height={100}
              width={200}
              layout="fill"
              objectFit="cover"
            />
            {/* <img src={props.info.image} alt={props.info.title} /> */}
          </div>
        </div>
        {/* アニメタイトル */}
        <div className="ah bk bl bg-white text-black">
          <div className="ai">
            <div className="ah bm b6 bn">
              <div className="bo bp bq br al bstu bi">
                <div className="bt bu bv bw bx">
                  <span dir="auto">
                    {props.info.title + " " + props.info.stories}
                  </span>
                </div>
                <div className="bt bu dp">
                  <span dir="auto">{isFirstTitle(props)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
