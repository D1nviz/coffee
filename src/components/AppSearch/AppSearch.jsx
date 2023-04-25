import styled from "styled-components";

const Container = styled.div`
   margin-top: 8vh;
   display: flex;
   justify-content: center;
   width: 100%;
`;
const Wrapper = styled.div`
   width: 700px;
   display: flex;
   justify-content: space-between;
`;
const InputContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 300px;
`;
const FilterContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 350px;
   button {
      border-radius: 5px;
      width: 75px;
      height: 30px;
      padding: 5px;
      margin: 0 2.5px;
      font-size: 12px;
      background-color: white;
      border: none;
      -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.4);
      -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.4);
      box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.4);
      transition: 0.2s ease-in-out;
      cursor: pointer;
      &:hover {
         transform: scale(1.1)
      }

   }
   
`;
const SearhInput = styled.input`
   width: 180px;
   height: 30px;
   border-radius: 5px;
   border: none;
   padding-left: 10px;
   transition: .2s ease-in-out;
   -webkit-box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.4);
   -moz-box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.4);
   box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.4);
   &:focus,
   &:hover {
      -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.4);
      -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.4);
      box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.4);
      outline:none;
   }
   
`;
const AppSearch = () => {
   return (
      <>
         <Container>
            <Wrapper>
               <InputContainer>
                  <label for="search">Looking for </label>
                  <SearhInput type="text" name="search" autoComplete="off" placeholder="start typing here..." />
               </InputContainer>
               <FilterContainer>
                  <p>Or filter</p>
                  <div>
                     <button>Brazil</button>
                     <button>Kenya</button>
                     <button>Columbia</button>
                  </div>
               </FilterContainer>

            </Wrapper>
         </Container>

      </>
   )
}

export default AppSearch;