import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import MylistCard from "../../components/MylistCard";

export default function MyListAll() {
  //API GET
  const [allMylist, setAllMylist] = useState([]);
  const [allMylistAnimeData, setAllMylistAnimeData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/my-list/all");
        setAllMylist(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    allMylist.map((data, index) =>
      (async () => {
        try {
          const res = await axios.get(`/my-list?id=${data.id}`);
          setAllMylistAnimeData((allMylistAnimeData) =>
            allMylistAnimeData.concat(res.data)
          );
        } catch (err) {
          console.log(err);
        }
      })()
    );
  }, [allMylist]);

  return (
    <>
      <Head>
        <title>すべての My List</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-orange-300 h-full">
        {allMylist.length != allMylistAnimeData.length ||
          (allMylist.length == 0 && <h1>Loading...</h1>)}
        <div className="grid grid-cols-1 p-4 md:grid-cols-3">
          {allMylistAnimeData.map((data, index) => (
            <>
              <MylistCard
                className="m-2"
                id={data.id}
                d_anime_store_url={data.d_anime_store_url}
                created_at={data.created_at}
                updated_at={data.updated_at}
                mylist={data.mylist}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
