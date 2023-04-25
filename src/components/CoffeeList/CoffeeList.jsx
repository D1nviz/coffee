import styled from "styled-components";

const Section = styled.section`
   display: flex;
   width: 100%;
   justify-content: center;
   flex-wrap: wrap;
   
`;
const Wrapper = styled.div`
   width: 840px;
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
   div {
      margin-top: 60px
   }
   
`
const CoffeeList = () => {
   return (
      <Section>
         <Wrapper>
            <div style={{backgroundColor: "#d7a977", width: "220px", height: "260px"}}></div>
            <div style={{backgroundColor: "#d7a977", width: "220px", height: "260px"}}></div>
            <div style={{backgroundColor: "#d7a977", width: "220px", height: "260px"}}></div>
            <div style={{backgroundColor: "#d7a977", width: "220px", height: "260px"}}></div>
            <div style={{backgroundColor: "#d7a977", width: "220px", height: "260px"}}></div>
            <div style={{backgroundColor: "#d7a977", width: "220px", height: "260px"}}></div>
         </Wrapper>
      </Section>
   )
}

export default CoffeeList;