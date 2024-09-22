import { useCrew } from "../context/CrewContext";
import CrewButtonList from "./CrewButtonList";

export interface CrewMember {
  name: string;
  images: { png: string };
  role: string;
  bio: string;
}

export default function CrewDetails() {
  const { crew, displayCrew } = useCrew();
  const selectedCrew = crew[displayCrew];

  return (
    <main className="relative text-white flex w-[75%] mx-auto justify-between gap-spacing-400 items-center py-[1.5rem] tab-port:flex-col tab-port:text-center custom-850:pt-4rem">
      <div className="flex flex-col gap-spacing-600 basis-[49%] tab-port:mt-spacing-400">
        <article className="flex flex-col">
          <h3 className="font-bellefair text-[3.2rem] uppercase text-white opacity-[0.5042]">
            {selectedCrew?.role}
          </h3>
          <p className="font-barlow text-[5.6rem] text-white mb-spacing-300 mt-spacing-200 uppercase">
            {selectedCrew?.name}
          </p>
          <p className="font-barlow text-[1.8rem] text-blue-300 leading-[3.24rem]">
            {selectedCrew?.bio}
          </p>
        </article>
        <div className="flex gap-spacing-500 tab-port:justify-center items-center">
          <CrewButtonList />
        </div>
      </div>
      <div className="w-[40%] tab-port:w-[50%] tab-port:mt-spacing-400">
        <img
          className="w-full "
          src={selectedCrew?.images?.png}
          alt="Douglas-image"
        />
      </div>
    </main>
  );
}
