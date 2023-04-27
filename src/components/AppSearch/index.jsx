import {
   FilterSearchWrapper,
   FilterSearchContainer,
   SearhContainer,
   SearchLabel,
   SearchInput,
   FilterContainer,
   FilterButtonsContainer,
   FiltersText,
   FilterButtons
} from "../styles/";

const AppSearch = () => {
   return (
         <FilterSearchWrapper>
            <FilterSearchContainer>
               <SearhContainer>
                  <SearchLabel for="search">Looking for </SearchLabel>
                  <SearchInput type="text" name="search" autoComplete="off" placeholder="start typing here..." />
               </SearhContainer>
               <FilterContainer>
                  <FiltersText>Or filter</FiltersText>
                  <FilterButtonsContainer>
                     <FilterButtons>Brazil</FilterButtons>
                     <FilterButtons>Kenya</FilterButtons>
                     <FilterButtons>Columbia</FilterButtons>
                  </FilterButtonsContainer>
               </FilterContainer>
            </FilterSearchContainer>
         </FilterSearchWrapper>
   )
}

export default AppSearch;