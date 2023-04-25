import MainPage from "../pages/MainPage/MainPage";
import Footer from "../Footer/Footer";
import OurCoffePage from "../pages/OurCoffeePage/OurCoffeePage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ForYourPleasurePage from "../pages/ForYourPleasurePage/ForYourPleasure";
import {lazy, Suspense} from "react";
 
function App() {
  return (
    <Router basename="coffee" >
      <main>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/our-coffee" element={<OurCoffePage/>}/>
          <Route path="/for-your-pleasure" element={<ForYourPleasurePage/>}/>
        </Routes>
      </main>
     
      
      <Footer/>
    </Router>
  );
}

export default App;
