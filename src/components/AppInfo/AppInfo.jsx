import styled from "styled-components";
import Beens from "../../resourses/images/Beens/Beens.png";
import { useContext } from "react";
import { sectionContext, sectionAboutContext } from "../Context";
const Section = styled.section`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100vh;
`;
const Wrapper = styled.div`
   max-width: 700px;
   margin-top: 80px;
   margin-bottom: 100px;
   h3 {
      text-align: center;
      font-size: 24px;
   }
   p {
      text-align: center;
      hyphens: auto;
      display: block;
      font-size: 16px;
      margin-bottom: 40px
   }
   img {
      margin: 0 auto;
   }
`;
const Button = styled.button`
      font-family: inherit;
      display: block;
      width: 9em;
      height: 2.8em;
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
`;

const AppInfo = () => {


   const { myRef } = useContext(sectionContext);
   const { appBestRef } = useContext(sectionAboutContext);
   const executeScroll = () => appBestRef.current.scrollIntoView();
   return (
      <Section ref={myRef}>
         <Wrapper>
            <h3>About us</h3>
            <img src={Beens} alt="" />
            <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
               Afraid at highly months do things on at. Situation recommend objection do intention
               so questions. As greatly removed calling pleased improve an. Last ask him cold feel
               met spot shy want. Children me laughing we prospect answered followed. At it went
               is song that held help face.</p>
            <p>
               Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw.
               Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage.
               Eagerness furniture set preserved far recommend. Did even but nor are most gave hope.
               Secure active living depend son repair day ladies now.
            </p>
            <Button onClick={executeScroll}>More</Button>
         </Wrapper>
      </Section>
   )
}

export default AppInfo;