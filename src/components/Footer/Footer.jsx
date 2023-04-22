import styled from "styled-components";
import Beens from "../../resourses/images/Beens.png";

const FooterSection = styled.footer`
   display: flex;
   justify-content: center;
   width: 100%;
`;
const Wrapper = styled.div`
   margin-top: 30px;
   margin-bottom: 30px;
   max-width: 440px;
`;
const NavBar = styled.nav`
   font-size: 16px;
`
const NavList = styled.ul`
   
`;
const NavListItem = styled.li`
display: inline-block;
   margin-right: 22px;
   transition: transform 0.2s ease-in-out;
   cursor: pointer;
   &:hover{
      transform: scale(1.1);
   }
`;
const BeensFolder = styled.div`
display: flex;
justify-content: center;
`
const Footer = () => {
   return (
      <FooterSection>
         <Wrapper>
            <NavBar>
               <NavList>
                  <NavListItem>Coffe house</NavListItem>
                  <NavListItem>Our coffee</NavListItem>
                  <NavListItem>For your pleasure</NavListItem>
               </NavList>
            </NavBar>
            <BeensFolder>
               <img src={Beens} alt="" />
            </BeensFolder>
         </Wrapper>
      </FooterSection>
   )
}

export default Footer;