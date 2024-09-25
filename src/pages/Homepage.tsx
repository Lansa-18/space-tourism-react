import Main from "../components/Main";
import Navbar from "../components/Navbar";

export default function Homepage() {
  return (
    <>
      <div className="home-bg-desktop absolute inset-0 -z-10"></div>
      <div className="min-h-screen w-full">
        <Navbar />
        <Main />
      </div>
    </>
  );
}
