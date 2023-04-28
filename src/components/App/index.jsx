import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { lazy, Suspense } from "react";
import MainPage from "../pages/MainPage/";
import AppFooter from "../AppFooter/";
import OurCoffePage from "../pages/OurCoffeePage/";
import ForYourPleasurePage from "../pages/ForYourPleasurePage/";

function App() {
  return (
    <Router basename="coffee">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/our-coffee" element={<OurCoffePage />} />
            <Route path="/for-your-pleasure" element={<ForYourPleasurePage />} />
          </Routes>
      <AppFooter/>
    </Router>
  );
}

export default App;
