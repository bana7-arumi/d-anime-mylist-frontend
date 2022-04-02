import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <h1 className="text-5xl font-bold underline">Topページ</h1>
    </div>
  );
}
