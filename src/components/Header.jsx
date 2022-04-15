import Image from "next/image";

export default function Header(props) {
  return (
    <div className="p-8 bg-primary-orange shadow-md">
      <div>
        <div className="flex justify-end lg:w-full w-16">
          <Image
            src="/images/LogoIcon.png"
            width={180}
            height={180}
            alt="logo"
          />
        </div>
        <div className="lg:flex justify-center">
          <h1 className="my-4 mx-16 text-white text-5xl font-bold">
            Lets share your MyList
          </h1>
        </div>
        <div className="lg:flex justify-center">
          <p className="lg:my-2 lg:mx-4 text-secondary-cyan lg:text-small font-bold">
            あなたのマイリストをあらゆるメディアに埋め込みましょう
          </p>
        </div>
        <div className="relative">
          <div className="flex justify-center p-2 mb-2 my-8">
            <input
              className="cursor-pointer shadow appearance-none border rounded-lg lg:w-2/3 w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:bg-gray-200"
              type="search"
              placeholder="マイリストのURLを入力してください"
              onChange={(e) => props.setMylistUrl(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
