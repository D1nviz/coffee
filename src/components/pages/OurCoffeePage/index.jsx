import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { searchContext, filterContext } from "../../Context";
import { ourCoffeDesripiton } from "../../Constants";
import AppHeader from "../../AppHeader/";
import AppProductsInfo from "../../AppProductsInfo/";
import AppSearch from "../../AppSearch/";
import CoffeeList from "../../CoffeeList/";
import background from "../../../resourses/images/backgrounds/ourCoffee.png";
import coffeeGirl from "../../../resourses/images/Coffee/CoffeGirl.jpg";

const OurCoffePage = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
      return () => { }
   }, []);
   const [searchQuery, setSearchQuery] = useState("");
   const [filter, setFilter] = useState("all");
   return (
      <>
         <Helmet>
            <meta name="description" content="Our Coffee" />
            <title>Our Coffee</title>
         </Helmet>
         <AppHeader
            text={"Our coffee"}
            background={background}
         />
         <main>
            <AppProductsInfo
               description={ourCoffeDesripiton}
               title={"About our beans"}
               image={coffeeGirl}
               alt={"Aesthetic coffee"}
            />
            <searchContext.Provider value={{ searchQuery, setSearchQuery }}>
               <filterContext.Provider value={{ filter, setFilter }}>
                  <AppSearch />
                  <CoffeeList />
               </filterContext.Provider>
            </searchContext.Provider>
         </main>
      </>
   )
}

export default OurCoffePage;