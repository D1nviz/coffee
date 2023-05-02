import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { searchContext, filterContext } from "../../Context";
import { forYourPleasureDescriotion } from "../../Constants";
import AppHeader from "../../AppHeader/";
import AppProductsInfo from "../../AppProductsInfo/";
import CoffeeList from "../../CoffeeList/";
import background from "../../../resourses/images/backgrounds/forYourPleasureBg.png";
import cupOfCoffee from "../../../resourses/images/Coffee/ourPleasureImg.png"

const ForYourPleasurePage = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
      return () => {}
    }, []);
   const [searchQuery, setSearchQuery] = useState("");
   const [filter, setFilter] = useState("all");
   return (
      <>
         <Helmet>
         <meta name="description" content="For your pleasure page" />
         <title>For your pleasure</title>
         </Helmet>
         <AppHeader
            text={"For your pleasure"}
            background={background}
         />
         <main>
            <AppProductsInfo
               title={"About our goods"}
               description={forYourPleasureDescriotion}
               image={cupOfCoffee}
               alt={"Cup of Coffee"}
            />
            <searchContext.Provider value={{ searchQuery, setSearchQuery }}>
               <filterContext.Provider value={{filter, setFilter}}>
                  <CoffeeList />
               </filterContext.Provider>
            </searchContext.Provider>
         </main>
      </>


   )
}

export default ForYourPleasurePage;