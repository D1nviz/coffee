import styled from "styled-components";
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
   flex-wrap: wrap;
`;

const ImageContainer = styled.div`
   width: 280px;
   height: 355px;
   img {
      -webkit-box-shadow: 10px 10px 26px 0px rgba(0,0,0,0.26);
      -moz-box-shadow: 10px 10px 26px 0px rgba(0,0,0,0.26);
      box-shadow: 10px 10px 26px 0px rgba(0,0,0,0.26);

   }
`;

const ArticleContainer = styled.article`
   text-align: center;
   height: 100%;
   width: 50%;
   h4 {
      font-size: 140%; 
      margin: 0;
   }
   div {
      width: 100%;
      display: flex;
      justify-content: center;
   }
   p {
      font-size: 100%
   }
`;
const HorizontalLine = styled.div`
   margin: 20px auto;
   height: 2px;
   width: 240px;
   background-color: black;
`;

const AppProductsInfo = ({title, description, image, alt }) => {
   return (
      <Section>
         <Wrapper>
            <ImageContainer>
               <img src={image} alt={alt} />
            </ImageContainer>
            <ArticleContainer>
               <h4>{title}</h4>
               <div><img src={beanImage} alt="beans" /></div>
               <p>{description}</p>
            </ArticleContainer>
            <HorizontalLine />
         </Wrapper>
      </Section>
   )
}

export default AppProductsInfo;