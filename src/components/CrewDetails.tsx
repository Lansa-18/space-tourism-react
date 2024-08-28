import { useEffect, useReducer } from "react";
import CrewButtonList from "./CrewButtonList";

export interface CrewMember {
  name: string;
  images: { png: string };
  role: string;
  bio: string;
}

type State = {
  crew: CrewMember[];
  displayCrew: number;
};

const initialState: State = {
  crew: [],
  displayCrew: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "crew/fetching":
      return {
        ...state,
        crew: action.payload,
      };
    case "crew/switching":
      return {
        ...state,
        displayCrew: action.payload,
      };
  }
}

export default function CrewDetails() {
  const [{ crew, displayCrew }, dispatch] = useReducer(reducer, initialState); // State to hold crew data
  const selectedCrew = crew[displayCrew];

  useEffect(function () {
    async function fetchCrew() {
      try {
        const res = await fetch("/data.json");
        const data = await res.json();
        dispatch({ type: "crew/fetching", payload: data.crew });
      } catch (err) {
        console.error(err);
      }
    }

    fetchCrew();
  }, []);

  console.log(selectedCrew);

  function crewSwitch(index: number) {
    dispatch({ type: "crew/switching", payload: index });
  }

  return (
    <main className="relative text-white flex w-[75%] mx-auto justify-between gap-spacing-400 items-center py-[1.5rem]">
      <div className="flex flex-col gap-spacing-600 basis-[49%]">
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
        <div className="flex gap-spacing-500">
          <CrewButtonList
            crew={crew}
            displayCrew={displayCrew}
            crewSwitch={crewSwitch}
          />
        </div>
      </div>
      <div className="w-[40%] ">
        <img
          className="w-full "
          src={selectedCrew?.images?.png}
          alt="Douglas-image"
        />
      </div>

      {/* Pagination buttons */}
      {/* <div className='absolute flex gap-spacing-500'>
            <CrewButtonList crew={crew} displayCrew={displayCrew} crewSwitch={crewSwitch}/>
        </div> */}
    </main>
  );
}
