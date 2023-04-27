import { Link, NavLink } from "react-router-dom";
import { 
   NavPanel,
   NavList, 
   NavListItem, 
   Header, 
   HeaderTitle
} from "../styles";

const AppHeader = ({background, text}) => {
   return (
      <Header background={background}>
         <NavPanel>
            <NavList>
               <NavListItem><NavLink to="/"><span>Coffee house</span></NavLink></NavListItem>
               <NavListItem><NavLink to="/our-coffee"><span>Our coffee</span></NavLink></NavListItem>
               <NavListItem><NavLink to="/for-your-pleasure"> <span>For your pleasure</span></NavLink></NavListItem>
            </NavList>
         </NavPanel >
         <HeaderTitle>{text}</HeaderTitle>
      </Header >
   )
}


export default AppHeader;