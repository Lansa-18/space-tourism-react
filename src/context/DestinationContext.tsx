import { createContext, useContext, useEffect, useReducer } from "react";
import { DestinationArr } from "../components/DestinationDetails";

interface State {
  destination: DestinationArr[];
  displayDestination: number;
}

interface fetchDestinationAction {
  type: "destinations/fetching";
  payload: DestinationArr[];
}

interface switchDestinationAction {
  type: "destinations/switch";
  payload: number;
}

const initialState: State = {
  destination: [],
  displayDestination: 0,
};

type Action = fetchDestinationAction | switchDestinationAction;

interface ContextProps {
  destination: DestinationArr[];
  displayDestination: number;
  fetchDestinations: (destination: DestinationArr[]) => void;
  switchDestination: (destinationIndex: number) => void;
}

const DestinationContext = createContext<ContextProps | undefined>(undefined);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "destinations/fetching":
      return {
        ...state,
        destination: action.payload,
      };

    case "destinations/switch":
      return {
        ...state,
        displayDestination: action.payload,
      };

    default:
      throw new Error(
        "There was an error encountered when working with the reducer in the destination page"
      );
  }
}

interface DestinationProviderProps {
  children: React.ReactNode;
}

function DestinationProvider({ children }: DestinationProviderProps) {
  const [{ destination, displayDestination }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function fetchDestinations(destinations: DestinationArr[]) {
    dispatch({ type: "destinations/fetching", payload: destinations });
  }

  function switchDestination(destinationIndex: number) {
    dispatch({ type: "destinations/switch", payload: destinationIndex });
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
    <DestinationContext.Provider
      value={{
        destination,
        displayDestination,
        fetchDestinations,
        switchDestination,
      }}
    >
      {children}
    </DestinationContext.Provider>
  );
}

function useDestination() {
  const context = useContext(DestinationContext);
  if (context === undefined) {
    throw new Error(
      "DestinationContext cannot be used outside of DestinationProvider"
    );
  }
  return context;
}

export { DestinationProvider, useDestination };
