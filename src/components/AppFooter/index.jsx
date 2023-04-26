import { Link, NavLink } from 'react-router-dom';
import {
   Footer,
   FooterNav,
   FooterNavItem,
   FooterImgFolder,
   FooterWrapper
} from "../styles";
import Beans from "../../resourses/images/Beens/Beens.png";

const AppFooter = () => {
   return (
      <Footer>
         <FooterWrapper>
            <FooterNav>
               <FooterNavItem><Link to="/"><span>Coffe house</span></Link></FooterNavItem>
               <FooterNavItem><Link to="/our-coffee"> <span>Our coffee</span></Link></FooterNavItem>
               <FooterNavItem><Link to="/for-your-pleasure"> <span>For your pleasure</span></Link></FooterNavItem>
            </FooterNav>
            <FooterImgFolder>
               <img src={Beans} alt="Beans"/>
            </FooterImgFolder>
         </FooterWrapper>
      </Footer>
   )
}

export default AppFooter;