import styled from "styled-components";
import pngBeens from "../../resourses/images/Beens/PngBeens.png";
import { Link, NavLink } from "react-router-dom";

const Header = styled.div`
   color: white;
   width: 100%;
   height: 30vh;
   background: ${({ background }) => background ? `no-repeat url(${background})` : 'none'};
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
const HeaderTitle = styled.h1`
   font-size: 200%;
   text-align: center;
   margin-top: 2%;
   font-weight:400;
`

const AppHeader = ({background, text}) => {

   return (
      <Header background={background}>
         <HeaderNav>
            <ul>
               <HeaderNavlist><Link to="/"><span>Coffe house</span></Link></HeaderNavlist>
               <HeaderNavlist><Link to="/our-coffee"><span>Our coffee</span></Link></HeaderNavlist>
               <HeaderNavlist><Link to="/for-your-pleasure"> <span>For your pleasure</span></Link></HeaderNavlist>
            </ul>

         </HeaderNav >
         
         <HeaderTitle>{text}</HeaderTitle>
      </Header >
   )
}


export default AppHeader;