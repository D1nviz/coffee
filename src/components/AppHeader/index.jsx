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
               <NavListItem><Link to="/"><span>Coffe house</span></Link></NavListItem>
               <NavListItem><Link to="/our-coffee"><span>Our coffee</span></Link></NavListItem>
               <NavListItem><Link to="/for-your-pleasure"> <span>For your pleasure</span></Link></NavListItem>
            </NavList>
         </NavPanel >
         <HeaderTitle>{text}</HeaderTitle>
      </Header >
   )
}


export default AppHeader;