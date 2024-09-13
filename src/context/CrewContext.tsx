import { createContext, useContext, useEffect, useReducer } from "react";
import { CrewMember } from "../components/CrewDetails";

// General Creation of type aliases and interfaces.
interface CrewProviderProps {
  children: React.ReactNode;
}

interface State {
  crew: CrewMember[];
  displayCrew: number;
}

const initialState: State = {
  crew: [],
  displayCrew: 0,
};

type CrewFetchAction = {
  type: "crew/fetching";
  payload: CrewMember[];
};

type CrewSwitchAction = {
    type: "crew/switching";
    payload: number;
};

type Action = CrewFetchAction | CrewSwitchAction;

type ContextProps = {
  crew: CrewMember[];
  displayCrew: number;
  crewSwitch: (crewIndex: number) => void;
};

// Creating the context and typing it
const CrewContext = createContext<ContextProps | undefined>(undefined);

function reducer(state: State, action: Action): State {
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

function CrewProvider({ children }: CrewProviderProps) {
  const [{ crew, displayCrew }, dispatch] = useReducer(reducer, initialState); // State to hold crew data

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

  function crewSwitch(crewIndex: number) {
    dispatch({ type: "crew/switching", payload: crewIndex });
  }

  return (
    <CrewContext.Provider value={{ crew, displayCrew, crewSwitch }}>
      {children}
    </CrewContext.Provider>
  );
}

// Creating a custom hook to make use of the CrewContext
function useCrew() {
  const context = useContext(CrewContext);
  if (context === undefined) {
    throw new Error("CrewContext cannot be used outside of CrewProvider");
  }
  return context;
}

export { CrewProvider, useCrew };
