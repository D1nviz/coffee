import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Spinner from "../Spinner/Spinner";
import AppFooter from "../AppFooter/";

const MainPage = lazy(() => import("../pages/MainPage/"));
const OurCoffePage = lazy(() => import("../pages/OurCoffeePage/"));
const ForYourPleasurePage = lazy(() => import("../pages/ForYourPleasurePage/"));
const SingleCoffeePage = lazy(() => import("../pages/SingleCoffeePage"));

function App() {
  return (
    <Router basename="coffee" >
      <Suspense fallback={<Spinner/>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:coffeId" element={<SingleCoffeePage />}></Route>
          <Route path="/our-coffee" element={<OurCoffePage />} />
          <Route path="/our-coffee/:coffeId" element={<SingleCoffeePage />}></Route>
          <Route path="/for-your-pleasure" element={<ForYourPleasurePage />} />
        </Routes>
      </Suspense>
      <AppFooter />
    </Router>
  );
}

export default App;
