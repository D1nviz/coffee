import styled from "styled-components";
import { Link, NavLink } from 'react-router-dom';
import { useContext } from "react";

import { sectionContext } from "../Context";

import background from "../../resourses/images/backgrounds/MainHeader.png";
import pngBeens from "../../resourses/images/Beens/PngBeens.png"


const Header = styled.div`
   color: white;
   width: 100%;
   height: 100vh;
   background: no-repeat url(${background});
   background-size: cover;

`;
const HeaderNav = styled.nav`
   position: relative;
   padding-top: 30px;
   color: white;
   margin-left: 120px;
   &:before {
   content: "";
   position: absolute;
   width: 50px;
   height: 50px;
   background-image: url(${pngBeens});
   background-size: cover;
   left: -5px;
   bottom: -4px;
   }
`;
const HeaderNavlist = styled.li`
   font-size: 16px;
   display: inline-block;
   margin-right: 40px;
   transition: transform 0.2s ease-in-out;
   cursor: pointer;
   &:hover{
      transform: scale(1.1);
   }
`;
const HeaderTitleText = styled.h1`
   font-size: 40px;
   text-align: center;
   margin-top: 110px
`;

const HeaderText = styled.h3`
   font-size: 24px;
   text-align: center;
`;

const Button = styled.button`
   font-size: 16px;
   background: rgba(0, 0, 0, 0);
   color: white;
   border: 2px solid white;
   width: 140px;
   height: 40px;
   border-radius: 3px;
   display: block;
   margin: 0 auto;
   margin-top: 40px;
   transition: transform 0.2s ease-in-out;
   cursor: pointer;
   &:hover{
      background-color: rgba(0, 0, 0, .4);
      transform: scale(1.1);
      box-shadow: 0px 0px 10px rgba(0, 0, 0, .4);
   }`;

const AppBanner = () => {
   const { myRef } = useContext(sectionContext);
   const executeScroll = () => myRef.current.scrollIntoView();

   return (
      <Header>
         <HeaderNav>
            <ul>
               <HeaderNavlist>
                  <Link to="/"><span>Coffe house</span></Link>
               </HeaderNavlist>
               <HeaderNavlist>
                  <Link to="/our-coffee"> <span>Our coffee</span></Link>
               </HeaderNavlist>
               <HeaderNavlist><span>For your pleasure</span></HeaderNavlist>
            </ul>
         </HeaderNav>
         <HeaderTitleText>
            Everything You Love About Coffee
         </HeaderTitleText>
         <HeaderText>
            We makes every day full of energy and taste
         </HeaderText>
         <HeaderText>
            Want to try our beans?
         </HeaderText>
         <Button onClick={executeScroll}>
            More
         </Button>

      </Header>
   )
}

export default AppBanner;
