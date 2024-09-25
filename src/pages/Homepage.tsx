import Main from "../components/Main";
import Navbar from "../components/Navbar";

export default function Homepage() {
  return (
    <div className="home-bg-desktop mask-image min-h-screen w-full relative">
      <Navbar />
      <Main />
    </div>
  );
}
