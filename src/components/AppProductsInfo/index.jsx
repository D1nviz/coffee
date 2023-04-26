import beanImage from "../../resourses/images/Beens/Beens.png";
import {
   SectionAboutProduct,
   AboutProductWrapper,
   ArticleContainer,
   AboutProductImg,
   ArticleImgContainer,
   ArticleTitle,
   ArticleText,
   HorizontalLine
} from "../styles";

const AppProductsInfo = ({title, description, image, alt }) => {
   return (
      <SectionAboutProduct>
         <AboutProductWrapper>
            <AboutProductImg>
               <img src={image} alt={alt} />
            </AboutProductImg>
            <ArticleContainer>
               <ArticleTitle>{title}</ArticleTitle>
               <ArticleImgContainer><img src={beanImage} alt="beans" /></ArticleImgContainer>
               <ArticleText>{description}</ArticleText>
            </ArticleContainer>
            <HorizontalLine />
         </AboutProductWrapper>
      </SectionAboutProduct>
   )
}

export default AppProductsInfo;