import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import MylistCard from "../../components/MylistCard";

export default function MyListAll() {
  //API GET
  const [allMylist, setAllMylist] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/my-list/all");
        console.log(res.data);
        setAllMylist(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <div>
      <h1 className="text-5xl font-bold underline">MyList一覧ページ</h1>
      {allMylist.map((data, index) => (
        <>
          <MylistCard title={data.id} />
          <p>{data.d_anime_store_url}</p>
          <p>{data.created_at}</p>
          <p>{data.updated_at}</p>
          <hr />
        </>
      ))}
    </div>
  );
}
