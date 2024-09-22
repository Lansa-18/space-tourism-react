import Main from "../components/Main";
import Navbar from "../components/Navbar";

export default function Homepage() {
  return (
    <div className="home-bg-desktop min-h-[150vh] w-full">
      <Navbar />
      <Main />
    </div>
  );
}
