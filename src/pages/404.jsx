import Head from "next/head";
import Image from "next/image";
import Router from "next/router";

export default function Page404() {
  // https://chicodeza.com/freeitems/saikoro-illust.html
  const status = 404;
  const message = "ページが見つかりませんでした";

  const saikoroSize = 100;
  return (
    <div>
      <div className="bg-primary-orange">
        <div className="h-screen w-screen py-24 text-center">
          <h1 className="text-8xl font-bold text-white mb-4">{status}</h1>
          <p className="text-2xl text-teal-200">{message}</p>
          <div className="flex justify-center my-14">
            {[...Array(Math.max(3, 0))].map((_, index) => (
              <div className="mx-3 animate-spin" key={index}>
                {index == 1 ? (
                  <Image
                    src="/images/saikoro/saikoro_1.png"
                    alt="image"
                    width={saikoroSize}
                    height={saikoroSize}
                  />
                ) : (
                  <Image
                    src="/images/saikoro/saikoro_4.png"
                    alt="image"
                    width={saikoroSize}
                    height={saikoroSize}
                  />
                )}
              </div>
            ))}
          </div>
          <div>
            <button
              onClick={() => Router.push("/")}
              className="px-8 py-2 bg-primary-variant-orange text-white font-semibold hover:bg-amber-400"
            >
              トップに戻る
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
