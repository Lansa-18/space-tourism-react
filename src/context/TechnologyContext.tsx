import { createContext, useContext, useEffect, useReducer } from "react";
import { TechnologyArr } from "../components/TechnologyDetails";

type State = {
  technology: TechnologyArr;
  displayTechnology: number;
};

const initialState: State = {
  technology: [],
  displayTechnology: 0,
};

interface switchTechnologyAction {
  type: "technology/switch";
  payload: number;
}

interface fetchTechnologyAction {
  type: "technology/fetching";
  payload: TechnologyArr;
}

type Action = fetchTechnologyAction | switchTechnologyAction;

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

interface ContextProps {
  technology: TechnologyArr;
  displayTechnology: number;
  switchTechnology: (technologyIndex: number) => void;
}

interface TechnologyProviderProps {
  children: React.ReactNode;
}

const TechnologyContext = createContext<ContextProps | undefined>(undefined);

function TechnologyProvider({ children }: TechnologyProviderProps) {
  const [{ technology, displayTechnology }, dispatch] = useReducer(
    reducer,
    initialState
  );

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

  return (
    <TechnologyContext.Provider
      value={{ technology, displayTechnology, switchTechnology }}
    >
      {children}
    </TechnologyContext.Provider>
  );
}

function useTechnology() {
  const context = useContext(TechnologyContext);
  if (context === undefined) {
    throw new Error("useTechnology must be used within a TechnologyProvider");
  }
  return context;
}

export { TechnologyProvider, useTechnology };
