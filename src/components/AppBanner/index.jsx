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
                  <NavLink to="/"> <span>Coffee house</span></NavLink>
               </NavListItem>
               <NavListItem>
                  <NavLink to="/our-coffee"> <span>Our coffee</span></NavLink>
               </NavListItem>
               <NavListItem>
                  <NavLink to="/for-your-pleasure"> <span>For your pleasure</span></NavLink>
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
