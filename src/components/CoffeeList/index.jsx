import { 
   SectionCoffeeList,
   CoffeeListGrid
 } from "../styles";

const CoffeeList = () => {
   return (
      <SectionCoffeeList>
         <CoffeeListGrid>
            <div style={{backgroundColor: "#d7a977", width: "220px", height: "260px"}}></div>
            <div style={{backgroundColor: "#d7a977", width: "220px", height: "260px"}}></div>
            <div style={{backgroundColor: "#d7a977", width: "220px", height: "260px"}}></div>
            <div style={{backgroundColor: "#d7a977", width: "220px", height: "260px"}}></div>
            <div style={{backgroundColor: "#d7a977", width: "220px", height: "260px"}}></div>
            <div style={{backgroundColor: "#d7a977", width: "220px", height: "260px"}}></div>
         </CoffeeListGrid>
      </SectionCoffeeList>
   )
}

export default CoffeeList;