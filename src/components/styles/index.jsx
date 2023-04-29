import styled from "styled-components";

import BannerBackground from "../../resourses/images/backgrounds/MainHeader.png";
import MarmokBackground from "../../resourses/images/backgrounds/MramorBg.jpg"
import pngBeans from "../../resourses/images/Beens/PngBeens.png"

export const BannerHead = styled.div`
   color: white;
   width: 100%;
   height: 100vh;
   background: no-repeat url(${BannerBackground});
   background-size: cover;
`;
export const AppWrapper = styled.div`
   max-width: 800px;
`
export const NavPanel = styled.nav`
   position: relative;
   padding-top: 30px;
   color: white;
   margin-left: 120px;
      &:before {
      content: "";
      position: absolute;
      width: 50px;
      height: 50px;
      background-image: url(${pngBeans});
      background-size: cover;
      left: -5px;
      bottom: -4px;
      }
`;
export const NavList = styled.ul``;
export const NavListItem = styled.li`
   font-size: 16px;
   display: inline-block;
   margin-right: 27.5px;
   border-radius: 10px;
   cursor: pointer;
      a {
         transition: all .3s ease-in-out;
         padding: 3px 8px;
         border-radius: 10px;
         &:hover{
         background-color: #f0f0f044;
      }
      }
      & .active {
         background-color: #f0f0f044;
         
      }
`;
export const BannerContainer = styled.div`
   margin-top: 5vh;
   display: flex;
   justify-content: space-around;
   align-items: center;
   flex-direction: column;
`;
export const BannerTitle = styled.h1`
   font-size: 40px;
   margin-top: 110px;
   text-shadow: 0px 0px 3px black;
`;
export const BannerText = styled.h3`
   text-shadow: 0px 0px 2px black;
   margin-top: 0;
   margin-bottom: 20px;
   font-size: 24px;
`;
export const BannerLogo = styled.img`
   width: 300px;
`;
export const BannerButton = styled.button`
   font-family: inherit;
   display: block;
   width: 9em;
   height: 2.8em;
   line-height: 2.5em;
   margin: 0 auto;
   position: relative;
   overflow: hidden;
   border: 2px solid #4f2d04;
   transition: color .5s;
   z-index: 1;
   font-size: 17px;
   border-radius: 6px;
   font-weight: 500;
   color: #4f2d04;
   transition: all .5s;
   background-color: rgba(254, 242, 219, .6);
   cursor: pointer;
      &:before {
         content: "";
         position: absolute;
         z-index: -1;
         background: rgb(131, 90, 41);
         height: 150px;
         width: 200px;
         border-radius: 50%;
         top: 100%;
         left: 100%;
         transition: all .5s;
   }
      &:hover {
         color: #fff;
         transform: scale(1.1);
         -webkit-box-shadow: 0px 0px 36px 0px rgba(138,84,14,0.6);
         -moz-box-shadow: 0px 0px 36px 0px rgba(138,84,14,0.6);
         box-shadow: 0px 0px 36px 0px rgba(138,84,14,0.6);
      }
      &:hover:before {
         top: -30px;
         left: -30px;
      }
      &:active {
         transform: scale(1);
         -webkit-box-shadow: 0px 0px 10px 0px rgba(138,84,14,0.6);
         -moz-box-shadow: 0px 0px 10px 0px rgba(138,84,14,0.6);
         box-shadow: 0px 0px 10px 0px rgba(138,84,14,0.6);
      }
   
`;
export const SectionInfo = styled.section`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100vh;
`;
export const WrapperInfo = styled(AppWrapper)`
   margin-top: 80px;
   margin-bottom: 100px;
`;
export const InfoTitle = styled.h3`
   text-align: center;
   font-size: 24px;
   margin: 0 0 10px  0;
`;
export const InfoText = styled.p`
   text-align: center;
   font-size: 16px;
   margin-bottom: 40px;
`;
export const ImgCenter = styled.img`
   margin: 0 auto;
`;
export const WrapperBest = styled(WrapperInfo)``;

export const SectionBest = styled(SectionInfo)`
   background: url(${MarmokBackground}); 
   height: 500px;
`;
export const BestTitle = styled(InfoTitle)``;
export const BestCardFolder = styled.div`
   width: 800px;
   display: flex;
   justify-content: space-between;
`;
export const BestCardItem = styled.div`
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
         box-shadow: rgb(110 64 4 / 60%) 0px 0px 8px 1px;
         transform: scale(1.05);
      }
`;
export const CardItemThumbnail = styled.img`
   margin-top: 20px;
`;
export const CardItemPrice = styled.span`
   font-size: 14px;
   font-weight: 800;
   text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
   position: absolute;
   bottom: 20px;
   left: 150px;
`;
export const CardItemTitle = styled.p``;
export const Footer = styled.footer`
   display: flex;
   justify-content: center;
   width: 100%;
`;
export const FooterWrapper = styled.div`
   margin-top: 30px;
   margin-bottom: 30px;
   width: 440px;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const FooterNav = styled.nav`
   width: 400px;
   font-size: 16px;
   display: flex;
   justify-content: space-between;
`;
export const FooterImgFolder = styled.div`
   margin: 10px 30px 0 0;
`;
export const FooterNavItem = styled.li`
   border-radius: 10px;
   cursor: pointer;
      a {
         transition: all .3s ease-in-out;
         padding: 4px 6px;
         border-radius: 10px;
         &:hover{
         background-color: #9d9b9b4b;
      }
      }
      & .active {
         background-color: #9d9b9b4b;
      }
`;
export const Header = styled.div`
   color: white;
   width: 100%;
   height: 30vh;
   background: ${({ background }) => background ? `no-repeat url(${background})` : 'none'};
   background-size: cover;
`;
export const HeaderTitle = styled.h2`
   font-size: 200%;
   font-weight: 700;
   text-align: center;
   margin-top: 2%;
   text-shadow: 0px 0px 3px black;
`;
export const SectionAboutProduct = styled.section`
   margin: 8vh 0;
   display: flex;
   justify-content: center;
   width: 100%;
`;
export const AboutProductWrapper = styled(AppWrapper)`
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
`
export const AboutProductImg = styled.div`
   width: 280px;
   height: 355px;
   img {
      -webkit-box-shadow: 10px 10px 26px 0px rgba(0,0,0,0.26);
      -moz-box-shadow: 10px 10px 26px 0px rgba(0,0,0,0.26);
      box-shadow: 10px 10px 26px 0px rgba(0,0,0,0.26);

   }
`;

export const ArticleContainer = styled.article`
   text-align: center;
   height: 100%;
   width: 50%;
`;
export const ArticleTitle = styled.h4`
   font-size: 140%; 
   margin: 0;
`;
export const ArticleImgContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
`;
export const ArticleText = styled.p`
   font-size: 1em;
`;
export const HorizontalLine = styled.div`
   margin: 20px auto;
   height: 2px;
   width: 240px;
   background-color: black;
`;
export const FilterSearchWrapper = styled.div`
   margin-top: 8vh;
   display: flex;
   justify-content: center;
   width: 100%;
`;
export const FilterSearchContainer = styled.div`
   width: 800px;
   display: flex;
   justify-content: space-between;
`;
export const SearhContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 325px;
`;
export const SearchLabel = styled.label`
   font-size: 1.1em;
`;
export const SearchInput = styled.input`
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
export const FilterContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 350px;
`;
export const FilterButtonsContainer = styled.div`
   display: flex;
`;
export const FilterButton = styled(BannerButton)`
   background: white;
   color: black;
   font-size: 12px;
   width: 75px;
   height: 30px;
   margin: 0 2.5px;
   &:hover {
      box-shadow: rgb(183 172 158 / 80%) 0px 0px 36px 0px;
   }
`;
export const FiltersText = styled.p`
   font-size: 1.1em;
`;
export const SectionCoffeeList = styled(SectionAboutProduct)``;
export const CoffeeListGrid = styled.div`
   width: 800px;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 75px;
`;
export const ItemContainer = styled.div`
   display: flex;
   justify-content: center;
   box-shadow: 5px 5px 10px #bebebe,
             -10px -10px 20px #ffffff;
   transition: all .3s ease-in-out;
   cursor: pointer;
   &:hover {
      transform: scale(1.05);
      box-shadow: 10px 10px 20px #bebebe,
             -10px -10px 20px #ffffff;
   }
`;
export const ItemEntryWrapper = styled.div`
   
`;
export const ItemTextFolder = styled.div`
   text-align: right;`

export const ItemThumbnail = styled.div`
   margin-top: 20px;

`;
export const ItemTitle = styled.h5`

`;
export const ItemCountry = styled.p`

`;
export const ItemPrice = styled.p`
font-weight: 700`;
