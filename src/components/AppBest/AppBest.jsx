import styled from "styled-components";
import { sectionAboutContext, sectionContext } from "../Context";
import background from "../../resourses/images/backgrounds/MramorBg.jpg"
import solimoCoffee from "../../resourses/images/Coffee/SolimoCoffee.png";
import prestoCoffee from "../../resourses/images/Coffee/PrestoCoffee.png";
import aromisticoCoffee from "../../resourses/images/Coffee/AromisticoCoffee.png";
import { useContext } from "react";

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
   h3 {
      text-align: center;
      font-size: 24px;
   }
`;
const CardFolder = styled.div`
   width: 800px;
   display: flex;
   justify-content: space-between;
   div {
      position: relative;
      width: 220px;
      height: 240px;
      background-color: rgba(255, 255, 255, 0.5);
      display:flex;
      flex-direction: column;
      align-items: center;
      font-size: 14px;
      border-radius: 8px;
      transition: all .3s ease-in-out;
      cursor: pointer;
      &:hover{
         box-shadow: 0px 0px 15px 1px #7e3f089d;
         transform: scale(1.1);
      }
      img {
         margin-top:20px;
      }
      span {
         font-size: 14px;
         font-weight: 800;
         text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
         position: absolute;
         bottom: 20px;
         left: 150px;
      }
   }
`;

const AppBest = () => {
   const {appBestRef} = useContext(sectionAboutContext);
   return (
         <Section ref={appBestRef}>
            <Wrapper>
               <h3>Our best</h3>
               <CardFolder>
                  <div>
                     <img src={solimoCoffee} alt="Coffee beans" />
                     <p>Solimo Coffee Beans 2 kg</p>
                     <span>
                        10.99$
                     </span>
                  </div>
                  <div>
                     <img src={prestoCoffee} alt="Coffee beans" />
                     <p>Presto Coffee Beans 1 kg</p>
                     <span>
                        15.99$
                     </span>
                  </div>
                  <div>
                     <img src={aromisticoCoffee} alt="Coffee beans" />
                     <p>AROMISTICO Coffee 1 kg</p>
                     <span>
                        6.99$
                     </span>
                  </div>
               </CardFolder>
            </Wrapper>
         </Section>
   )
}

export default AppBest;