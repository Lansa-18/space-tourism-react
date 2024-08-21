import { useEffect, useReducer, useState } from "react";
import Navbar from "../components/Navbar";
import PageText from "../components/PageText";

const initialState = {
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

    default:
      throw new Error(
        "There was an error encountered when working with the reducer in the destination page"
      );
  }
}

export default function Destination() {
  // const [destinations, setDestinations] = useState([]);
  // console.log(destinations);

  const [{ destination }, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    async function fetchDestinations() {
      const res = await fetch("/data.json");
      const data = await res.json();
      dispatch({ type: "destinations/fetching", payload: data.destinations });      
    }

    fetchDestinations();
  }, []);
  console.log(destination);
  
  // CREATE A COMPONENT CALLED DestinationDetails , first thing to be done tomorrow.
  

  return (
    <div className="destination-bg-desktop h-screen w-full">
      <Navbar />
      <PageText pageNumber={1} pageText="Pick your destination" />
    </div>
  );
}
