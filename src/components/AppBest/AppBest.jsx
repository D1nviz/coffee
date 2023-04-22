import styled from "styled-components";
import background from "../../resourses/images/backgrounds/MramorBg.jpg"
import solimoCoffee from "../../resourses/images/Coffee/SolimoCoffee.png";
import prestoCoffee from "../../resourses/images/Coffee/PrestoCoffee.png";
import aromisticoCoffee from "../../resourses/images/Coffee/AromisticoCoffee.png";

const Section = styled.section`
   display: flex;
   justify-content: center;
   width: 100%;
   background: url(${background});
   height: 500px;
`;

const Wrapper = styled.div`
   max-width: 800px;
   margin-top: 80px;
   margin-bottom: 100px;
`;

const TextTitle = styled.h2`
   text-align: center;
   font-size: 24px;
`;
const CardFolder = styled.div`
   width: 800px;
   display: flex;
   justify-content: space-between;
`;
const ItemCard = styled.div`
   position: relative;
   width: 220px;
   height: 240px;
   background-color: rgba(255, 255, 255, 0.5);
   display:flex;
   flex-direction: column;
   align-items: center;
   font-size: 14px;
   border-radius: 8px;
   transition: all .2s ease-in-out;
   cursor: pointer;
   &:hover{
      filter: brightness(90%);
      transform: scale(1.1);
   }
`;
const ItemCardEntry = styled.div`
   margin-top:20px;
`;
const ItemCardPrice = styled.div`
   font-size: 14px;
   font-weight: 800;
   text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
   position: absolute;
   bottom: 20px;
   left: 150px;
`;

const AppBest = () => {
   return (
      <>
         <Section>
            <Wrapper>
               <TextTitle>Our best</TextTitle>
               <CardFolder>
                  <ItemCard>
                     <ItemCardEntry><img src={solimoCoffee} alt="" /></ItemCardEntry>
                     <p>Solimo Coffee Beans 2 kg</p>
                     <ItemCardPrice>
                        10.99$
                     </ItemCardPrice>
                  </ItemCard>
                  <ItemCard>
                     <ItemCardEntry><img src={prestoCoffee} alt="" /></ItemCardEntry>
                     <p>Presto Coffee Beans 1 kg</p>
                     <ItemCardPrice>
                        15.99$
                     </ItemCardPrice>
                  </ItemCard>
                  <ItemCard>
                     <ItemCardEntry><img src={aromisticoCoffee} alt="" /></ItemCardEntry>
                     <p>AROMISTICO Coffee 1 kg</p>
                     <ItemCardPrice>
                        6.99$
                     </ItemCardPrice>
                  </ItemCard>
               </CardFolder>
            </Wrapper>
         </Section>
      </>
   )
}

export default AppBest;