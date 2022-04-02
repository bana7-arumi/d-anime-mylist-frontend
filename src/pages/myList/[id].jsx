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
    <div className="text-white bg-primary-orange font-sans font-serif font-mono min-h-screen relative flex flex-col font-extralight text-sm block bg-gradient-to-bl ">
      <div className="absolute inset-0 flex flex-col block">
        {/* 選択されているリスト要素 */}
        <div></div>
        {/* アニメリスト */}
        <div className="block grow shrink overflow-hidden">
          <div className="overflow-scroll h-full">
            <table className="relative table-auto table box-border indent-0 border-separate border-grey w-full ">
              <tbody>
                {mylistList.map((data, index) => (
                  <tr
                    id={index}
                    className="cursor-pointer overflow-hidden text-white leading-5 select-none opacity-100 border-inherit hover:bg-primary-orange/20 "
                  >
                    {/* index番号 */}
                    <td className="pt-3 pr-6 pb-3 pl-8 min-w-14 text-white opacity-60 table-cell">
                      {index + 1}
                    </td>
                    {/* アニメタイトル */}
                    <td className="py-1.5 w-full table-cell">
                      <div block>
                        <span>{data.title}</span>
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
