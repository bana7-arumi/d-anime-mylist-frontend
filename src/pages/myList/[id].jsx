import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";

export default function MylistId() {
  const router = useRouter();
  // パスパラメータから値を取得
  const { id } = router.query;
  //API GET
  const [mylistList, setMylistList] = useState([]);
  const [mylistInfo, setMylistInfo] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`/my-list?id=${id}`);
        console.log(res.data);
        setMylistList(res.data.mylist);
        setMylistInfo(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [id]);
  return (
    <div className="ae af ah ai aj ak al am an">
      <div className="ao apqrs at ai aj">
        {/* 選択されているリスト要素 */}
        <div className="ai au ah av">
          {/* 画像 */}
          <div>

          </div>
          {/* アニメタイトル */}
          <div>

          </div>
        </div>
        {/* アニメリスト */}
        <div className="ah dg dh">
          <div className="di b4">
            <table className="ah dj b3">
              <tbody>
                {mylistList.map((data, index) => (
                  <tr
                    id={index}
                    className="e3 an bi d7 cs dk dl"
                  >
                    {/* index番号 */}
                    <td className="ae dm d9 dn do dk">
                      {index + 1}
                    </td>
                    {/* アニメ */}
                    <td className="ah dq">
                      <div className="ah dr b3">
                        {/* アニメタイトル */}
                        <div className="ao ap ds b3 bstu bv">
                          <span dir="auto">{data.title}</span>
                        </div>
                        {/* 話数 */}
                        <div className="ao du ds b3 bstu ae dp">
                          <span dir="auto">全15話</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// function Click(index){
//   if(index.style.vi)
// }
