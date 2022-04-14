// import LogoIcon from "./LogoIcon";

export default function Header(props) {
  return (
    <div className="p-8 bg-primary-orange shadow-md">
      <div>
        <div className="flex justify-end">
          {/* <LogoIcon width={180} height={180} /> */}
        </div>
        <div className="flex justify-center">
          <h1 className="my-4 mx-16 text-white text-5xl font-bold">
            Let's share your MyList
          </h1>
        </div>
        <div className="flex justify-center">
          <p className="my-2 mx-4 text-secondary-cyan text-small font-bold">
            あなたのマイリストをあらゆるメディアに埋め込みましょう
          </p>
        </div>
        <div className="relative">
          <div className="flex justify-center p-2 mb-2 my-8">
            <input
              className="cursor-pointer shadow appearance-none border rounded-lg w-2/3 py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  hover:bg-gray-200"
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
