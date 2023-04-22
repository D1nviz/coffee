import styled from "styled-components";
import background from "../../resourses/images/MainHeader.png";
import pngBeens from "../../resourses/images/PngBeens.png"

const Header = styled.div`
   color: white;
   width: 100%;
   height: 713px;
   background: no-repeat url(${background});
   background-size: cover;

`;
const HeaderNavBar = styled.nav`
   padding-top: 30px;
   color: white;
   margin-left: 120px;
`;
const HeaderNavli = styled.li`
   font-size: 12px;
   display: inline-block;
   margin-right: 40px;
`
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
   font-size: 14px;
   background: rgba(0, 0, 0, 0);
   color: white;
   border: 2px solid white;
   width: 120px;
   height: 30px;
   border-radius: 3px;
   display: block;
   margin: 0 auto;
   margin-top: 25px;
`;
const AppHeader = () => {
   return (
      <Header>
         <HeaderNavBar>
            <ul>
               <HeaderNavli>Coffe house</HeaderNavli>
               <HeaderNavli>Our coffee</HeaderNavli>
               <HeaderNavli>For your pleasure</HeaderNavli>
            </ul>
            
         </HeaderNavBar>
         <HeaderTitleText>
               Everything You Love About Coffee
            </HeaderTitleText>
            <HeaderText>
               We makes every day full of energy and taste
            </HeaderText>
            <HeaderText>
               Want to try our beans?
            </HeaderText>
            <Button>
               More
            </Button>
         
      </Header>
   )
}

export default AppHeader;