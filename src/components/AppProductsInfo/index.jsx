import beanImage from "../../resourses/images/Beens/Beens.png";
import {
   SectionAboutProduct,
   AboutProductWrapper,
   ArticleContainer,
   AboutProductImg,
   ArticleImgContainer,
   ArticleTitle,
   ArticleDescription,
   ArticleParagraph,
   ArticleParagraphName,
   ArticleInfo,
   ArticlePrice,
   HorizontalLine
} from "../styles";

const aboutProductRender = (country, description, price) => {
   return (
      <>
         <ArticleParagraph>
            <ArticleParagraphName>Country:</ArticleParagraphName>
            <span>{country}</span>
         </ArticleParagraph >
         <ArticleParagraph>
            <ArticleParagraphName>Description:</ArticleParagraphName> <span>{description}</span>
         </ArticleParagraph>
         <ArticleParagraph>
            <ArticleParagraphName>Price:</ArticleParagraphName> <ArticlePrice>{price}</ArticlePrice>
         </ArticleParagraph>
      </>
   )
}
const AppProductsInfo = ({ title, description, image, alt, country, price }) => {
   return (
      <SectionAboutProduct>
         <AboutProductWrapper>
            <AboutProductImg>
               <img src={image} alt={alt} />
            </AboutProductImg>
            <ArticleContainer>
               <ArticleTitle>{title}</ArticleTitle>
               <ArticleImgContainer><img src={beanImage} alt="beans" /></ArticleImgContainer>
               <ArticleInfo>
                  {
                     (country && price && description) ? aboutProductRender(country, description, price)
                        : <ArticleDescription>{description} </ArticleDescription>
                  }
               </ArticleInfo>
            </ArticleContainer>
         </AboutProductWrapper>
      </SectionAboutProduct>
   )
}

export default AppProductsInfo;