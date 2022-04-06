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
            <div className="shadow-xs">Embedded Timeline</div>
          </div>
          <div>
            <div className="shadow-xs">Item2</div>
            <div className="shadow-xs">Hogehoge Fugafuga</div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="shadow-xs">{<Iframe id={"QORsNekMyzUexqqs"} />}</div>
      </div>
    </div>
  );
}
