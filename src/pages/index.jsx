import Iframe from "../components/Iframe";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex justify-center">Here are your display option</div>
      <div className="container mx-auto px-4 flex justify-center">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="shadow-xs">Item1</div>
            <div className="box-border h-32 w-32 p-4 border-2 border-gray-600"></div>
          </div>
          <div>
            <div className="shadow-xs">Item2</div>
            <div className="shadow-xs">
              <div className="box-border h-32 w-32 p-4 border-2 border-gray-600"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="shadow-xs">
          {<Iframe id={"QORsNekMyzUexqqs"} width={300} height={500} />}
        </div>
      </div>
    </div>
  );
}
