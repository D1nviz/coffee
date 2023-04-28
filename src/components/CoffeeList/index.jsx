import {
   SectionCoffeeList,
   CoffeeListGrid,
   ItemContainer,
   ItemTitle,
   ItemCountry,
   ItemPrice,
   ItemThumbnail,
   ItemEntryWrapper,
   ItemTextFolder
} from "../styles";
import aromisticoCoffee from "../../resourses/images/Coffee/AromisticoCoffee.png";
const items = [
   { title: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "10.99$", img: aromisticoCoffee },
   { title: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "10.99$", img: aromisticoCoffee },
   { title: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "10.99$", img: aromisticoCoffee },
   { title: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "10.99$", img: aromisticoCoffee },
   { title: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "10.99$", img: aromisticoCoffee },
   { title: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "10.99$", img: aromisticoCoffee }
]
const renderItems = items.map(({ title, country, price, img }) => (
   <ItemContainer>
      <ItemEntryWrapper>
      <ItemThumbnail><img src={img} alt="" /></ItemThumbnail>
         <ItemTextFolder>
            <ItemTitle>{title}</ItemTitle>
            <ItemCountry>{country}</ItemCountry>
            <ItemPrice>{price}</ItemPrice>
         </ItemTextFolder>
      </ItemEntryWrapper>
   </ItemContainer>
));

const CoffeeList = () => {
   return (
      <SectionCoffeeList>
         <CoffeeListGrid>
            {renderItems}
         </CoffeeListGrid>
      </SectionCoffeeList>
   )
}

export default CoffeeList;