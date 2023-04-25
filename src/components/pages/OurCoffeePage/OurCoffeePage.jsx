import AppHeader from "../../AppHeader/AppHeader";
import AppProductsInfo from "../../AppProductsInfo/AppProductsInfo";
import AppSearch from "../../AppSearch/AppSearch";
import CoffeeList from "../../CoffeeList/CoffeeList";
import background from "../../../resourses/images/backgrounds/ourCoffee.png";
import coffeeGirl from "../../../resourses/images/Coffee/CoffeGirl.jpg";

const description = `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.\n
Afraid at highly months do things on at. Situation recommend objection do intention so questions.
\nAs greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.`

const OurCoffePage = () => {
   return (
      <>
         <AppHeader
            text={"Our coffee"}
            background={background} 
         />
         <AppProductsInfo
            description={description}
            title={"About our beans"}
            image={coffeeGirl}
            alt={"Aesthetic coffee"}
         />
         <AppSearch />
         <CoffeeList />
      </>
   )
}

export default OurCoffePage;