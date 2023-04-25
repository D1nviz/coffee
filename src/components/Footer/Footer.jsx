import styled from "styled-components";
import { Link, NavLink } from 'react-router-dom';

import Beans from "../../resourses/images/Beens/Beens.png";

const FooterSection = styled.footer`
   display: flex;
   justify-content: center;
   width: 100%;
`;
const Wrapper = styled.div`
   margin-top: 30px;
   margin-bottom: 30px;
   max-width: 440px;
   nav {
      font-size: 16px;
      li {
         display: inline-block;
         margin-right: 22px;
         transition: transform 0.2s ease-in-out;
         cursor: pointer;
         &:hover{
         transform: scale(1.1);
         text-shadow: .5px .5px 2px rgba(0, 0, 0, .6);
         }
      }
   }
`;
const BeansFolder = styled.div`
   display: flex;
   justify-content: center;
`;
const Footer = () => {
   return (
      <FooterSection>
         <Wrapper>
            <nav>
               <ul>
                  <li> <Link to="/"><span>Coffe house</span></Link></li>
                  <li><Link to="/our-coffee"> <span>Our coffee</span></Link></li>
                  <li><Link to="/for-your-pleasure"> <span>For your pleasure</span></Link></li>
               </ul>
            </nav>
            <BeansFolder>
               <img src={Beans} alt="Beans" />
            </BeansFolder>
         </Wrapper>
      </FooterSection>
   )
}

export default Footer;