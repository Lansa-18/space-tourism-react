import DestinationList from "./DestinationList";
import { useDestination } from "../context/DestinationContext";

export interface DestinationArr {
  images: { png: string };
  name: string;
  description: string;
  distance: string;
  travel: string;
}

export default function DestinationDetails() {
  const { destination, displayDestination } = useDestination();
  const selectedDestination = destination[displayDestination];
  const listOfDestinations = destination.map((dest) => dest.name);

  return (
    <main className="text-white flex w-[70%] laptop:w-[80%] tab-land:w-[85%] mx-auto gap-spacing-400 mt-spacing-300 items-center tab-port:flex-col tab-port:mt-spacing-800">
      <div className="basis-[100%] land-phone:flex land-phone:justify-center land-phone:items-center">
        <img
          className="land-phone:w-[75%]"
          src={selectedDestination?.images?.png}
          alt="moon"
        />
      </div>
      <div className="flex flex-col gap-spacing-300 basis-[90%] py-[7rem] px-[5rem] tab-port:p-0 tab-port:text-center tab-port:mt-[5rem] tab-port:gap-0">
        <ul className="flex gap-spacing-400 font-barlow-condensed text-[1.6rem] tracking-[2px] uppercase text-blue-300 tab-port:justify-center tab-port:items-center">
          {listOfDestinations.map((dest, index) => (
            <DestinationList key={dest} index={index} dest={dest} />
          ))}
        </ul>
        <article className="border-b border-opaque-white flex flex-col">
          <h3 className="font-bellefair text-[9.6rem] uppercase">
            {selectedDestination?.name}
          </h3>
          <p className="font-barlow text-[1.8rem] leading-[3.24rem] text-blue-300 mb-spacing-500">
            {selectedDestination?.description}
          </p>
        </article>
        <article className="flex gap-spacing-300 justify-between uppercase">
          <div className="flex flex-col gap-spacing-150">
            <p className="font-barlow-condensed tracking-[.2rem] text-[1.4rem] text-blue-300">
              Avg. Distance
            </p>
            <p className="font-bellefair text-[2.8rem]">
              {selectedDestination?.distance}
            </p>
          </div>
          <div className="flex flex-col gap-spacing-150">
            <p className="font-barlow-condensed tracking-[.2rem] text-[1.4rem] text-blue-300">
              Est. Travel TIme
            </p>
            <p className="font-bellefair text-[2.8rem]">
              {selectedDestination?.travel}
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
