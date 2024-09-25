import DestinationDetails from "../components/DestinationDetails";
import Navbar from "../components/Navbar";
import PageText from "../components/PageText";


export default function Destination() {

  return (
    <div className="destination-bg-desktop [mask-image:linear-gradient(to_bottom,black_80%,transparent)] h-screen w-full grid grid-rows-[auto-1fr]">
      <Navbar />
      <PageText pageNumber={1} pageText="Pick your destination" />
      <DestinationDetails />
    </div>
  );
}
