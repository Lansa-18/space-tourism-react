import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DestinationProvider } from "./context/DestinationContext";
import { CrewProvider } from "./context/CrewContext";
import { lazy, Suspense } from "react";
import Spinner from "./components/Spinner";
import { TechnologyProvider } from "./context/TechnologyContext";

// LAZY LOADING THE PAGES
const HomePage = lazy(() => import("./pages/Homepage"));
const Destination = lazy(() => import("./pages/Destination"));
const Crew = lazy(() => import("./pages/Crew"));
const Technology = lazy(() => import("./pages/Technology"));

function App() {
  return (
    <TechnologyProvider>
      <DestinationProvider>
        <CrewProvider>
          <BrowserRouter>
            <Suspense fallback={<Spinner />}>
              <Routes>
                {/* Routes go here */}
                <Route index element={<HomePage />} />
                <Route path="destination" element={<Destination />} />
                <Route path="crew" element={<Crew />} />
                <Route path="technology" element={<Technology />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </CrewProvider>
      </DestinationProvider>
    </TechnologyProvider>
  );
}

export default App;
