import { useRef } from "react";
import AppBanner from "../../AppBanner/AppBanner";
import AppInfo from "../../AppInfo/AppInfo";
import AppBest from "../../AppBest/AppBest";
import { sectionContext } from "../../Context";

const MainPage = () => {
   const myRef = useRef();
   return (
      <>
         <sectionContext.Provider value={{myRef}}>
         <AppBanner />
         <AppInfo />
         <AppBest />
         </sectionContext.Provider>
      </>
   )
}

export default MainPage;