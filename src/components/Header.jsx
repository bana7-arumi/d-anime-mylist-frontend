import LogoIcon from "./LogoIcon";

export default function Header() {
  return (
    <div className="p-8 bg-primary-orange shadow-md">
      <div>
        <div className="flex justify-center">
          <h1 className="my-32  text-secondary-cyan text-6xl font-bold">
            What would you like to embed?
          </h1>
          <LogoIcon />
        </div>
        <div className="relative">
          <div className="flex justify-center p-2 mb-2">
            <input
              className="shadow appearance-none border rounded w-1/2 py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="search"
              type="search"
              placeholder="マイリストのURLを入力"
            ></input>
            <div className="absolute text-center w-1/2 flex justify-end px-2">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 4C10.2917 4 4 10.2917 4 18C4 25.7083 10.2917 32 18 32C21.496 32 24.69 30.696 27.1484 28.5625L28 29.4141V32L40 44L44 40L32 28H29.4141L28.5625 27.1484C30.696 24.69 32 21.496 32 18C32 10.2917 25.7083 4 18 4ZM18 8C23.5465 8 28 12.4535 28 18C28 23.5465 23.5465 28 18 28C12.4535 28 8 23.5465 8 18C8 12.4535 12.4535 8 18 8Z"
                  fill="#F29D38"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
