import styled from "styled-components";
import coffeeGirl from "../../resourses/images/Coffee/CoffeGirl.jpg";
import beanImage from "../../resourses/images/Beens/Beens.png";

const Section = styled.section`
   margin-top: 8vh;
   display: flex;
   justify-content: center;
   width: 100%;
`;
const Wrapper = styled.div`
   width: 700px;
   display: flex;
   justify-content: space-between;
`;
const ImageContainer = styled.div`
   width: 280px;
   height: 355px;
`
const ArticleContainer = styled.div`
   text-align: center;
   height: 100%;
   width: 50%;
`
const ArticleContainerTitle = styled.h4`
   font-size: 140%; 
   margin: 0;
`;
const ArticleContainerImage = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   image {
      box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.5);
   }
`;
const ArticleContainerText = styled.article`
   font-size: 100%
`;

const AppBeensInfo = () => {
   return (
      <Section>
         <Wrapper>
            <ImageContainer>
               <img src={coffeeGirl} alt="coffeeGirl" />
            </ImageContainer>
            <ArticleContainer>
               <ArticleContainerTitle>About our beans</ArticleContainerTitle>
               <ArticleContainerImage><img src={beanImage} alt="beanImage" /></ArticleContainerImage>
               <ArticleContainerText>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br/><br/>
                  Afraid at highly months do things on at. Situation recommend objection do intention
                  so questions.
                  <br/>As greatly removed calling pleased improve an. Last ask him cold feel
                  met spot shy want. Children me laughing we prospect answered followed. At it went
                  is song that held help face.</ArticleContainerText>
            </ArticleContainer>
         </Wrapper>
      </Section>
   )
}

export default AppBeensInfo;