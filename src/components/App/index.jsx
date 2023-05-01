import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from "../pages/MainPage/";
import AppFooter from "../AppFooter/";
import OurCoffePage from "../pages/OurCoffeePage/";
import ForYourPleasurePage from "../pages/ForYourPleasurePage/";
import SingleCoffeePage from "../pages/SingleCoffeePage";

function App() {
  return (
    <Router basename="coffee">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/:coffeId" element={<SingleCoffeePage/>}></Route>
            <Route path="/our-coffee" element={<OurCoffePage />} />
            <Route path="/our-coffee/:coffeId" element={<SingleCoffeePage/>}></Route>
            <Route path="/for-your-pleasure" element={<ForYourPleasurePage />} />  
          </Routes>
      <AppFooter/>
    </Router>
  );
}

export default App;
