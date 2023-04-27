import { useContext } from "react";
import { sectionContext, sectionAboutContext } from "../Context";
import { 
   SectionInfo,
   BannerButton,
   WrapperInfo,
   InfoTitle,
   InfoText,
   ImgCenter
 } from "../styles";
import Beans from "../../resourses/images/Beens/Beens.png";

const AppInfo = () => {
   const { myRef } = useContext(sectionContext);
   const { appBestRef } = useContext(sectionAboutContext);
   const executeScroll = () => appBestRef.current.scrollIntoView();
   return (
      <SectionInfo ref={myRef}>
         <WrapperInfo>
            <InfoTitle>About us</InfoTitle>
            <ImgCenter src={Beans} alt="Beans" />
            <InfoText>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
               Afraid at highly months do things on at. Situation recommend objection do intention
               so questions. As greatly removed calling pleased improve an. Last ask him cold feel
               met spot shy want. Children me laughing we prospect answered followed. At it went
               is song that held help face.</InfoText>
            <InfoText>
               Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw.
               Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage.
               Eagerness furniture set preserved far recommend. Did even but nor are most gave hope.
               Secure active living depend son repair day ladies now.
            </InfoText>
            <BannerButton onClick={executeScroll}>Try best</BannerButton>
         </WrapperInfo>
      </SectionInfo>
   )
}

export default AppInfo;