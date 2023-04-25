import { useRef } from "react";
import AppBanner from "../../AppBanner/AppBanner";
import AppInfo from "../../AppInfo/AppInfo";
import AppBest from "../../AppBest/AppBest";
import { sectionContext, sectionAboutContext } from "../../Context";

const MainPage = () => {
   const myRef = useRef();
   const appBestRef = useRef();
   return (
      <>
         <sectionContext.Provider value={{ myRef }}>
            <sectionAboutContext.Provider value={{appBestRef}}>
               <AppBanner />
               <main>
                  <AppInfo />
                  <AppBest />
               </main>
            </sectionAboutContext.Provider>
         </sectionContext.Provider>
      </>
      
   )
}

export default MainPage;