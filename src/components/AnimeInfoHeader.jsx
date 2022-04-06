import Head from "next/head";
import Image from "next/image";

export default function animeInfoHeader(props) {
  return (
    <a href={props.info.title} target="_blank" rel="noopener noreferrer">
      <div className="ai au ah av">
        {/* 画像 */}
        <div className="ah aw ax">
          <div className="ah b3 b4 b5 b6">
            {/* <Image
              src={props.info.image}
              alt={props.info.title}
              height={100}
              width={200}
            /> */}
            <img src={props.info.image} alt={props.info.title} />
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
                  <span dir="auto">{"第1話　" + props.info.first}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
