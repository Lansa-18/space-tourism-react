import DestinationDetails from "../components/DestinationDetails";
import Navbar from "../components/Navbar";
import PageText from "../components/PageText";


export default function Destination() {

  return (
    <div className="destination-bg-desktop min-h-screen min-w-full">
      <Navbar />
      <PageText pageNumber={1} pageText="Pick your destination" />
      <DestinationDetails />
    </div>
  );
}
