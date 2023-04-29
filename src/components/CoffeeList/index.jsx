import { useState, useContext } from "react";
import { postItems } from "../Constants";
import { filterContext, searchContext } from "../Context";
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

const filterItems = (items, filter) => {
   if(filter === "all") {
      return items;
   } 
   return items.filter(item => item.country === filter);
}
const onSearch = (searchQuery, postItems) => {
   return postItems.filter(item => {
      return item.title.toLowerCase().startsWith(searchQuery.toLowerCase())
   })
}


const CoffeeList = () => {
   const { searchQuery } = useContext(searchContext);
   const { filter } = useContext(filterContext);

   return (
      <SectionCoffeeList>
         <CoffeeListGrid>
            {filterItems(onSearch(searchQuery, postItems), filter)
               .map(({ id, title, country, price, img }) => {
               return (
                  <ItemContainer key={id}>
                     <ItemEntryWrapper>
                        <ItemThumbnail><img src={img} alt="" /></ItemThumbnail>
                        <ItemTextFolder>
                           <ItemTitle>{title}</ItemTitle>
                           <ItemCountry>{country}</ItemCountry>
                           <ItemPrice>{price}</ItemPrice>
                        </ItemTextFolder>
                     </ItemEntryWrapper>
                  </ItemContainer>
               )
            })}
         </CoffeeListGrid>
      </SectionCoffeeList>
   )
}

export default CoffeeList;