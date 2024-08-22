import { useEffect, useReducer } from "react";
import Navbar from "../components/Navbar";
import PageText from "../components/PageText";
import DestinationDetails, { DestinationArr } from "../components/DestinationDetails";

interface State {
  destination: DestinationArr[],
  displayDestination: number
}

const initialState: State = {
  destination: [],
  displayDestination: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "destinations/fetching":
      return {
        ...state,
        destination: action.payload,
      };

    case "destination/switch":
      return {
        ...state,
        displayDestination: action.payload
      }

    default:
      throw new Error(
        "There was an error encountered when working with the reducer in the destination page"
      );
  }
}

export default function Destination() {
  const [{ destination, displayDestination }, dispatch] = useReducer(reducer, initialState);

  function dispatchDestinationSwitch(destinationIndex: number) {
    dispatch({type: "destination/switch", payload: destinationIndex});
  }

  useEffect(function () {
    async function fetchDestinations() {
      const res = await fetch("/data.json");
      const data = await res.json();
      dispatch({ type: "destinations/fetching", payload: data.destinations });      
    }

    fetchDestinations();
  }, []);

  return (
    <div className="destination-bg-desktop min-h-screen min-w-full">
      <Navbar />
      <PageText pageNumber={1} pageText="Pick your destination" />
      <DestinationDetails destination={destination} displayDestination={displayDestination} dispatchDestinationSwitch={dispatchDestinationSwitch} />
    </div>
  );
}
