import LogoIcon from "./LogoIcon";

export default function Header() {
  return (
    <div className="p-8 bg-primary-orange">
      <div>
        <div class="flex justify-center">
          <h1 className="my-32  text-secondary-cyan text-6xl font-bold">
            What would you like to embed?
          </h1>
          <LogoIcon />
        </div>
        <div className="flex justify-center p-2 mb-2">
          <input
            className="shadow appearance-none border rounded w-1/2 py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="マイリストのURLを入力"
          ></input>
        </div>
      </div>
    </div>
  );
}
