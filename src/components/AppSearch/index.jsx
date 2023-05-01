import { v4 as uuidv4 } from "uuid";
import { useState, useContext, useRef } from "react";
import { searchContext, filterContext } from "../Context";
import { filterProps } from "../Constants";
import {
  FilterSearchWrapper,
  FilterSearchContainer,
  SearhContainer,
  SearchLabel,
  SearchInput,
  FilterContainer,
  FilterButtonsContainer,
  FiltersText,
  FilterButton,
} from "../styles/";

const AppSearch = () => {
  const buttonRefs = useRef([]);

  const onToggleFilter = (filter, setFilter, prevFilter, setPrevFilter, index) => {
    if (prevFilter === filter) {
      setFilter("all");
      setPrevFilter("all");
      return;
    }
    buttonRefs.current.forEach((ref) => {
      ref.classList.remove("selected");
    }
    );
    buttonRefs.current[index].classList.add("selected");
    setPrevFilter(filter);
    setFilter(filter);
  };

  const filterButtons = (setFilter, prevFilter, setPrevFilter) =>
    filterProps.map((prop, index) => {
      const key = uuidv4();
      return (
        <FilterButton
          key={key}
          ref={(ref) => (buttonRefs.current[index] = ref)}
          className={prevFilter === prop ? "selected" : ""}
          onClick={() => onToggleFilter(prop, setFilter, prevFilter, setPrevFilter, index)}
        >
          {prop}
        </FilterButton>
      );
    });

  const { searchQuery, setSearchQuery } = useContext(searchContext);
  const { setFilter } = useContext(filterContext);
  const [prevFilter, setPrevFilter] = useState("");

  return (
    <FilterSearchWrapper>
      <FilterSearchContainer>
        <SearhContainer>
          <SearchLabel htmlFor="search">Looking for </SearchLabel>
          <SearchInput
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            name="search"
            autoComplete="off"
            placeholder="start typing here..."
          />
        </SearhContainer>
        <FilterContainer>
          <FiltersText>Or filter</FiltersText>
          <FilterButtonsContainer>
            {filterButtons(setFilter, prevFilter, setPrevFilter)}
          </FilterButtonsContainer>
        </FilterContainer>
      </FilterSearchContainer>
    </FilterSearchWrapper>
  );
};

export default AppSearch;