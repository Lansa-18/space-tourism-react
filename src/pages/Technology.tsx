import Navbar from "../components/Navbar";
import PageText from "../components/PageText";
import TechnologyDetails from "../components/TechnologyDetails";

export default function Technology() {
  return (
    <>
      <div className="technology-bg-desktop absolute inset-0 -z-10"></div>
      <div className="min-h-screen w-full">
        <Navbar />
        <PageText pageNumber={3} pageText="Space Launch 101" />
        <TechnologyDetails />
      </div>
    </>
  );
}
