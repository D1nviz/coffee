import { Link, NavLink } from 'react-router-dom';
import { useContext } from "react";
import { sectionContext } from "../Context";
import {
   BannerHead,
   NavPanel,
   NavList,
   NavListItem,
   BannerTitle,
   BannerText,
   BannerLogo,
   BannerButton,
   BannerContainer
} from "../styles/";

import beansLogo from '../../resourses/images/Beens/Beans logo.svg';


const AppBanner = () => {
   const { myRef } = useContext(sectionContext);
   const executeScroll = () => myRef.current.scrollIntoView();

   return (
      
      <BannerHead>
         <NavPanel>
            <NavList>
               <NavListItem>
                  <Link to="/"><span>Coffe house</span></Link>
               </NavListItem>
               <NavListItem>
                  <Link to="/our-coffee"> <span>Our coffee</span></Link>
               </NavListItem>
               <NavListItem>
                  <Link to="/for-your-pleasure"> <span>For your pleasure</span></Link>
                  </NavListItem>
            </NavList>
         </NavPanel>
         <BannerContainer>
            <BannerTitle>
               Everything You Love About Coffee
            </BannerTitle>
            <BannerLogo src={beansLogo} alt="Beans logo" />
            <BannerText>
               We makes every day full of energy and taste
            </BannerText>
            <BannerText>
               Want to try our beans?
            </BannerText>
            <BannerButton onClick={executeScroll}>
               More
            </BannerButton>
         </BannerContainer>  
      </BannerHead>
   )
}

export default AppBanner;
