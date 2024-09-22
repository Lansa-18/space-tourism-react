import { useEffect, useReducer } from "react";
import TechnologyButtonList from "./TechnologyButtonList";

type Technology = {
  name: string;
  images: {
    landscape: string;
    portrait: string;
  };
  description: string;
};

export type TechnologyArr = Technology[];

type State = {
  technology: TechnologyArr;
  displayTechnology: number;
}

const initialState: State = {
  technology: [],
  displayTechnology: 0,
};

type Action =
  | {type: "technology/fetching"; payload: TechnologyArr}
  | {type: "technology/switch"; payload: number}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "technology/fetching":
      return {
        ...state,
        technology: action.payload,
      };

    case "technology/switch":
      return {
        ...state,
        displayTechnology: action.payload,
      };

    default:
      throw new Error(
        "There was an error encountered when working with the reducer in the destination page"
      );
  }
}

export default function TechnologyDetails() {
  const [{ technology, displayTechnology }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const selectedTechnology = technology[displayTechnology];

  useEffect(function () {
    async function fetchTechnology() {
      const res = await fetch("/data.json");
      const data = await res.json();
      dispatch({ type: "technology/fetching", payload: data.technology });
    }
    fetchTechnology();
  }, []);

  function switchTechnology(technologyIndex: number) {
    dispatch({ type: "technology/switch", payload: technologyIndex });
  }

  console.log(technology);

  return (
    <>
      <section className="tab-land:hidden flex w-[75%] mx-auto items-center mt-spacing-300 tab-land:">
        <div className="flex flex-col text-black text-[2rem] gap-spacing-400 mr-spacing-800">
          <TechnologyButtonList
            technology={technology}
            switchTechnology={switchTechnology}
            displayTechnology={displayTechnology}
          />
        </div>
        <article className="flex gap-spacing-800 basis-[60%] mr-spacing-400">
          <div className="flex flex-col">
            <h3 className="font-bellefair text-[3.2rem] text-white opacity-[0.5042] uppercase">
              The Terminology
            </h3>
            <h2 className="font-bellefait text-[5.6rem] uppercase text-white">
              {selectedTechnology?.name}
            </h2>
            <p className="font-barlow text-blue-300 text-[1.8rem] leading-[3.24rem]">
              {selectedTechnology?.description}
            </p>
          </div>
        </article>
        <div className="">
          <img
            className="block"
            src={selectedTechnology?.images?.portrait}
            alt="launch-vehicle-image"
          />
        </div>
      </section>

      <section className="hidden tab-land:flex flex-col mt-[6rem]">
        <article className="flex flex-col w-full items-center gap-spacing-400">
          <div className="w-full">
            <img
              className="w-full"
              src={selectedTechnology?.images?.landscape}
              alt="launch-vehicle-image"
            />
          </div>

          <div className="flex justify-center items-center text-black text-[2rem] gap-spacing-400">
            <TechnologyButtonList
              technology={technology}
              switchTechnology={switchTechnology}
              displayTechnology={displayTechnology}
            />
          </div>
        </article>

        <article className="flex flex-col text-center px-[4rem] py-[5rem]">
          <h3 className="font-bellefair text-[3.2rem] text-white opacity-[0.5042] uppercase">
            The Terminology
          </h3>
          <h2 className="font-bellefait text-[5.6rem] phone:text-[4.7rem] uppercase text-white">
            {selectedTechnology?.name}
          </h2>
          <p className="font-barlow text-blue-300 text-[1.8rem] leading-[3.24rem]">
            {selectedTechnology?.description}
          </p>
        </article>
      </section>
    </>
  );
}
