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
 font-family: inherit;
 display: block;
 width: 8em;
 height: 2.6em;
 line-height: 2.5em;
 margin: 0 auto;
 position: relative;
 overflow: hidden;
 border: 2px solid #4f2d04;
 transition: color .5s;
 z-index: 1;
 font-size: 17px;
 border-radius: 6px;
 font-weight: 500;
 color: #4f2d04;
 transition: all .5s;
 background-color: rgba(254, 242, 219, .6);
 cursor: pointer;

   &:before {
      content: "";
      position: absolute;
      z-index: -1;
      background: #4f2d04;
      height: 150px;
      width: 200px;
      border-radius: 50%;
}
   &:hover {
      color: #fff;
      transform: scale(1.1)
   }
   &:before {
      top: 100%;
      left: 100%;
      transition: all .7s;
   }
 &:hover:before{
   top: -30px;
   left: -30px;
}

`

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
               <HeaderNavlist><Link to="/for-your-pleasure"> <span>For your pleasure</span></Link></HeaderNavlist>
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
