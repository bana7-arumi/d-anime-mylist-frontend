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
    <div>
      <h1 className="text-5xl font-bold underline">MyListページ</h1>
      <h1>{mylistInfo.id}</h1>
      <a
        className="underline"
        href={mylistInfo.d_anime_store_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {mylistInfo.d_anime_store_url}
      </a>
      <h1>{mylistInfo.created_at}</h1>
      <h1>{mylistInfo.updated_at}</h1>
      {mylistList.map((data, index) => (
        <>
          <a href={data.url} target="_blank" rel="noopener noreferrer">
            <p key={index}>{data.title}</p>
            <Image src={data.image} alt={data.title} width={200} height={100} />
          </a>
        </>
      ))}
    </div>
  );
}
