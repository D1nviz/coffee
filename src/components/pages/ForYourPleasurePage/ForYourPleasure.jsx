import AppHeader from "../../AppHeader/AppHeader";
import AppProductsInfo from "../../AppProductsInfo/AppProductsInfo";
import CoffeeList from "../../CoffeeList/CoffeeList";
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
         <AppProductsInfo 
            title={"About our goods"}  
            description={description}
            image={cupOfCoffee}
            alt={"Cup of Coffee"}
         />
         <CoffeeList/>
      </>
   )
}

export default ForYourPleasurePage;