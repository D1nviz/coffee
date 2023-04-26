import AppHeader from "../../AppHeader/";
import AppProductsInfo from "../../AppProductsInfo/";
import CoffeeList from "../../CoffeeList/";

import background from "../../../resourses/images/backgrounds/forYourPleasureBg.png";
import cupOfCoffee from "../../../resourses/images/Coffee/ourPleasureImg.png"

const description = `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
Afraid at highly months do things on at. Situation recommend objection do intention
so questions. 
As greatly removed calling pleased improve an. Last ask him cold feel
met spot shy want. Children me laughing we prospect answered followed. At it went
is song that held help face.`;

const ForYourPleasurePage = () => {
   return (
      <>
         <AppHeader 
            text={"For your pleasure"} 
            background={background}
         />
         <main>
            <AppProductsInfo 
               title={"About our goods"}  
               description={description}
               image={cupOfCoffee}
               alt={"Cup of Coffee"}
            />
            <CoffeeList/>
         </main>
      </>
   )
}

export default ForYourPleasurePage;