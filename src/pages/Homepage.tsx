import Main from "../components/Main";
import Navbar from "../components/Navbar";

export default function Homepage() {
  return (
    <div className="home-bg-desktop min-h-[200vh] w-full custom-850:pt-[4rem]">
      <Navbar />
      <Main />
    </div>
  );
}
