import {  CSSTransition, SwitchTransition } from "react-transition-group";
import { useContext } from "react";
import { Link } from "react-router-dom";
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
   ItemTextFolder,
   NoResultsMessage
} from "../styles";

const onFilter = (items, filter) => {
   return filter === "all" ? items : items.filter(item => item.country === filter);
};

const onSearch = (searchQuery, postItems) => {
   return postItems.filter(item => {
      return item.title.toLowerCase().startsWith(searchQuery.toLowerCase());
   });
};


const CoffeeList = () => {
   const { searchQuery } = useContext(searchContext);
   const { filter } = useContext(filterContext);
   const posts = onSearch(searchQuery, postItems);
   const filteredPosts = onFilter(posts, filter);

   const renderPosts = () => (
      <CoffeeListGrid>
         {filteredPosts.map(({ id, title, country, price, img }) => (
            <SwitchTransition>
               <CSSTransition
                  key={id}
                  timeout={500}
                  classNames="fade"
               >
                  <ItemContainer>
                     <Link to={`/our-coffee/${id}`}>
                        <ItemEntryWrapper>
                           <ItemThumbnail><img src={img} alt={title} /></ItemThumbnail>
                           <ItemTextFolder>
                              <ItemTitle>{title}</ItemTitle>
                              <ItemCountry>{country}</ItemCountry>
                              <ItemPrice>{price}</ItemPrice>
                           </ItemTextFolder>
                        </ItemEntryWrapper>
                     </Link>
                  </ItemContainer>
               </CSSTransition>
            </SwitchTransition>))}
      </CoffeeListGrid>
   );

   return (
      <SectionCoffeeList>
         {filteredPosts.length ? renderPosts() : <NoResultsMessage> No results</NoResultsMessage>}
      </SectionCoffeeList >
   )
};

export default CoffeeList;
