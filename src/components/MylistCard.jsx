import Head from "next/head";
import Image from "next/image";

export default function mylistCard(props) {
  return (
    <div>
      <h1 className="font-bold underline">{props.title}</h1>
    </div>
  );
}
