import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useLayoutEffect } from "react/cjs/react.production.min";
import axios from "../../utils/axios";
import AnimeInfoHeader from "../../components/AnimeInfoHeader";
import { memo } from "react";

export default function MylistId() {
  const AnimeInfoHeaderMemo = memo(AnimeInfoHeader);
  const router = useRouter();
  // パスパラメータから値を取得
  const { id } = router.query;
  //API GET
  const [mylistList, setMylistList] = useState([]);
  const [animeInfo, setAnimeInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [selectIndex, setSelectIndex] = useState(-1);

  useEffect(() => {
    (async () => {
      if (router.isReady) {
        try {
          const res = await axios.get(`/my-list?id=${id}`);
          console.log(res.data);
          console.log(res.data.mylist);
          setMylistList(res.data.mylist);
          setAnimeInfo(res.data.mylist[0]);
          setIsLoading(false);
        } catch (err) {
          switch (err.response?.status) {
            case 402:
              router.push("/404");
          }
        }
      }
    })();
  }, [id]);

  function ClickAct(index) {
    if (selectIndex != -1) {
      document.getElementById(selectIndex).classList.remove("e3");
    }
    document.getElementById(index).classList.add("e3");
    setSelectIndex(index);
    setAnimeInfo(mylistList[index]);
  }

  const animeList = (
    <tbody>
      {mylistList.map((data, index) => (
        <tr
          key={index}
          id={index}
          className="an bi d7 cs dk dl"
          onClick={() => ClickAct(index)}
        >
          {/* index番号 */}
          <td className="ae dm d9 dn do dp">{index + 1}</td>
          {/* アニメ */}
          <td className="ah dq">
            <div className="ah dr b3">
              {/* アニメタイトル */}
              <div className="ao ap ds b3 bstu bv">
                <span dir="auto">{data.title}</span>
              </div>
              {/* 話数 */}
              <div className="ao du ds b3 bstu ae dp">
                <span dir="auto">
                  {data.stories == " " ? (
                    <>〜現在放送中〜</>
                  ) : (
                    <>{data.stories}</>
                  )}
                </span>
              </div>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
  return !isLoading ? (
    <>
      <Head>
        <title>{id + "のマイリスト"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="ae af ah ai aj ak al am an">
        <div className="ao apqrs at ai aj">
          <AnimeInfoHeaderMemo info={animeInfo} />
          {/* アニメリスト */}
          <div className="ah dg dh">
            <div className="di b4">
              <table className="ah dj b3">{animeList}</table>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}
