import DestinationDetails from "../components/DestinationDetails";
import Navbar from "../components/Navbar";
import PageText from "../components/PageText";

export default function Destination() {
  return (
    <>
      <div className="destination-bg-desktop absolute inset-0 -z-10"></div>
      <div className="min-h-screen w-full">
        <Navbar />
        <PageText pageNumber={1} pageText="Pick your destination" />
        <DestinationDetails />
      </div>
    </>
  );
}
