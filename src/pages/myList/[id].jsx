import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export default function MylistId() {
  const router = useRouter();
  // パスパラメータから値を取得
  const { id } = router.query;
  return (
    <div>
      <h1 className="text-5xl font-bold underline">
        MyListページ
        <br />
        ID : {id}
      </h1>
    </div>
  );
}
