import styled from "styled-components";
import Beens from "../../resourses/images/Beens/Beens.png";
import { useContext } from "react";
import { sectionContext } from "../Context";
const Section = styled.section`
   
   display: flex;
   justify-content: center;
   width: 100%;
`;

const Wrapper = styled.div`
   max-width: 700px;
   margin-top: 80px;
   margin-bottom: 100px;
`;

const TextTitle = styled.h2`
   text-align: center;
   font-size: 24px;
`;

const DescriptionText = styled.p`
   text-align: center;
   hyphens: auto;
   display: block;
   font-size: 16px;
`;

const BeensFolder = styled.div`
   display: flex;
   justify-content: center;
`;

const AppInfo = () => {
   const {myRef} = useContext(sectionContext);
   return (
      <Section ref={myRef}>
         <Wrapper>
            <TextTitle>About us</TextTitle>
            <BeensFolder>
               <img src={Beens} alt="" />
            </BeensFolder>
            <DescriptionText>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
               Afraid at highly months do things on at. Situation recommend objection do intention
               so questions. As greatly removed calling pleased improve an. Last ask him cold feel
               met spot shy want. Children me laughing we prospect answered followed. At it went
               is song that held help face.</DescriptionText>
            <DescriptionText>
               Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw.
               Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage.
               Eagerness furniture set preserved far recommend. Did even but nor are most gave hope.
               Secure active living depend son repair day ladies now.
            </DescriptionText>

         </Wrapper>
      </Section>
   )
}

export default AppInfo;