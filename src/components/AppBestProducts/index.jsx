import { sectionAboutContext } from "../Context";
import { useContext } from "react";
import {
   SectionBest,
   WrapperBest,
   BestTitle,
   BestCardFolder,
   BestCardItem,
   CardItemThumbnail,
   CardItemPrice,
   CardItemTitle
} from "../styles/"

import solimoCoffee from "../../resourses/images/Coffee/SolimoCoffee.png";
import prestoCoffee from "../../resourses/images/Coffee/PrestoCoffee.png";
import aromisticoCoffee from "../../resourses/images/Coffee/AromisticoCoffee.png";

const AppBest = () => {
   const {appBestRef} = useContext(sectionAboutContext);
   return (
         <SectionBest ref={appBestRef}>
            <WrapperBest>
             <BestTitle>Our best</BestTitle>
               <BestCardFolder>
                  <BestCardItem>
                     <CardItemThumbnail src={solimoCoffee} alt="Coffee beans" />
                     <CardItemTitle>Solimo Coffee Beans 2 kg</CardItemTitle>
                     <CardItemPrice>
                        10.99$
                     </CardItemPrice>
                  </BestCardItem>
                  <BestCardItem>
                     <CardItemThumbnail src={prestoCoffee} alt="Coffee beans" />
                     <CardItemTitle>Presto Coffee Beans 1 kg</CardItemTitle>
                     <CardItemPrice>
                        15.99$
                     </CardItemPrice>
                  </BestCardItem>
                  <BestCardItem>
                     <CardItemThumbnail src={aromisticoCoffee} alt="Coffee beans" />
                     <CardItemTitle>AROMISTICO Coffee 1 kg</CardItemTitle>
                     <CardItemPrice>
                        6.99$
                     </CardItemPrice>
                  </BestCardItem>
               </BestCardFolder>
            </WrapperBest>
         </SectionBest>
   )
}

export default AppBest;