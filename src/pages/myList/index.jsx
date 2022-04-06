import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import MylistCard from "../../components/MylistCard";
import MyListAllHeader from "../../components/MyListAllHeader";

export default function MyListAll() {
  //API GET
  const [allMylist, setAllMylist] = useState([]);
  const [allMylistAnimeData, setAllMylistAnimeData] = useState([]);
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const HumbergerFunction = () => {
    setIsHeaderOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/my-list/all");
        setAllMylist(res.data.reverse());
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
      <div className="bg-neutral-200">
        <div className="mb-3">
          <MyListAllHeader
            isOpen={isHeaderOpen}
            HumbergerFunction={HumbergerFunction}
          />
        </div>
        {allMylistAnimeData.length != allMylist.length && (
          <>
            <div className="h-screen w-screen flex justify-center items-center">
              <div className="animate-spin h-20 w-20 border-4 border-orange-600 rounded-full border-t-transparent"></div>
            </div>
          </>
        )}
        <div className="grid grid-cols-1 lg:px-8 md:px-1 md:grid-cols-3">
          {allMylistAnimeData.length == allMylist.length &&
            allMylistAnimeData.map((data, index) => (
              <>
                <MylistCard
                  key={index}
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
