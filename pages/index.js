import Header from "../components/Header";
import Home from "../components/Home";

export default function Main() {
  return (
    <div className="">
      <Header />
      <div className="bg-[url(/home-background.png)] relative bg-no-repeat	bg-cover bg-fixed min-h-[calc(100vh_-_70px)] ">
        <Home />
      </div>
    </div>
  );
}
