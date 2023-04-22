import { useRef } from "react";
import AppHeader from "../../AppHeader/AppHeader";
import AppInfo from "../../AppInfo/AppInfo";
import AppBest from "../../AppBest/AppBest";
import { sectionContext } from "../../Context";

const MainPage = () => {
   const myRef = useRef();
   return (
      <>
         <sectionContext.Provider value={{myRef}}>
         <AppHeader />
         <AppInfo />
         <AppBest />
         </sectionContext.Provider>
      </>
   )
}

export default MainPage;