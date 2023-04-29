import { useState } from "react";
import { searchContext, filterContext } from "../../Context";
import AppHeader from "../../AppHeader/";
import AppProductsInfo from "../../AppProductsInfo/";
import AppSearch from "../../AppSearch/";
import CoffeeList from "../../CoffeeList/";
import background from "../../../resourses/images/backgrounds/ourCoffee.png";
import coffeeGirl from "../../../resourses/images/Coffee/CoffeGirl.jpg";



const description = `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.\n
Afraid at highly months do things on at. Situation recommend objection do intention so questions.
\nAs greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.`

const OurCoffePage = () => {
   const [searchQuery, setSearchQuery] = useState("");
   const [filter, setFilter] = useState("");
   
   return (
      <>
         <AppHeader
            text={"Our coffee"}
            background={background}
         />
         <main>
            <AppProductsInfo
               description={description}
               title={"About our beans"}
               image={coffeeGirl}
               alt={"Aesthetic coffee"}
            />
            <searchContext.Provider value={{ searchQuery, setSearchQuery }}>
               <filterContext.Provider value={{filter, setFilter}}>
                  <AppSearch />
                  <CoffeeList />
               </filterContext.Provider>
               
            </searchContext.Provider>
         </main>
      </>

   )
}

export default OurCoffePage;