import LogoIcon from "./LogoIcon";

export default function Header(props) {
  return (
    <div className="p-48 bg-primary-orange shadow-md">
      <div>
        <div className="flex justify-center">
          <h1 className="my-16 mx-16 text-white text-4xl font-bold">
            Let's d-anime-embed!
          </h1>
          <LogoIcon width={100} height={100} />
        </div>
        <div className="relative">
          <div className="flex justify-center p-2 mb-2">
            <input
              className="cursor-pointer shadow appearance-none border rounded-lg w-2/3 py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  hover:bg-gray-200"
              id="urlform"
              type="url"
              placeholder="マイリストのURLを入力してください"
              onChange={(e) => props.setMylistUrl(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
