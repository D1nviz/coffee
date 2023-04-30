import { Link } from "react-router-dom";
import { sectionAboutContext } from "../Context";
import { useContext } from "react";
import {
   SectionBest,
   WrapperBest,
   BestTitle,
   BestCardFolder,
   BestCardItem,
   CardItemThumbnail,
   CardItemPrice,
   CardItemTitle
} from "../styles/";
import { postItems } from "../Constants";

const bestPosts = postItems.slice(0, 3).map(({ title, price, img, id }) => {
   return (
      <Link to={`/${id}`}>
         <BestCardItem>
            <CardItemThumbnail src={img} alt={title} />
            <CardItemTitle>{title}</CardItemTitle>
            <CardItemPrice>{price}</CardItemPrice>
         </BestCardItem>
      </Link>
   )
});

const AppBest = () => {
   const { appBestRef } = useContext(sectionAboutContext);
   return (
      <SectionBest ref={appBestRef}>
         <WrapperBest>
            <BestTitle>Our best</BestTitle>
            <BestCardFolder>
               {bestPosts}
            </BestCardFolder>
         </WrapperBest>
      </SectionBest>
   )
}

export default AppBest;