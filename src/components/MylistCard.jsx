import Head from "next/head";
import Image from "next/image";
import deteformat from "../utils/deteformat";

export default function mylistCard(props) {
  return (
    <div className={props.className}>
      <a href={`/myList/${props.id}`}>
        <div className="rounded overflow-hidden border w-full lg:w-full md:w-full bg-white mx-3 md:mx-0 lg:mx-0 hover:bg-gray-100">
          <div className="grid grid-cols-2">
            {props.mylist.map(
              (data, index) =>
                index < 4 && (
                  <Image
                    key={index}
                    src={data.image}
                    alt={data.title}
                    width={200}
                    height={100}
                  />
                )
            )}
            {[...Array(Math.max(4 - props.mylist.length, 0))].map(
              (_, index) => (
                <Image
                  key={index}
                  src="/images/gray.jpeg"
                  alt="image"
                  width={200}
                  height={100}
                />
              )
            )}
          </div>
          <div className="px-3 pb-2">
            <div className="pt-2">
              <div className="text-sm">
                {props.mylist.map(
                  (data, index) =>
                    index < 4 && (
                      <span className="font-medium mr-5">{data.title}</span>
                    )
                )}
                {props.mylist.length > 4 && <>...</>}
              </div>
            </div>
            <div>
              <span className="text-[12px] text-gray-400 font-medium mr-4">
                投稿 {deteformat(props.created_at)}
              </span>
              <span className="text-[12px] text-gray-400 font-medium">
                更新 {deteformat(props.updated_at)}
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
