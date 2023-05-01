import { useParams } from "react-router-dom";

import { postItems } from "../../Constants";
import AppHeader from "../../AppHeader";
import AppProductsInfo from "../../AppProductsInfo";
import coffee from "../../../resourses/images/Coffee/coffee.jpg"
import background from "../../../resourses/images/backgrounds/ourCoffee.png";

const SingleCoffeePage = () => {
   const { coffeId } = useParams();
   const currentItem = postItems.filter(item => item.id === coffeId);
   const { description, price, country } = currentItem[0];
   return (
      <>
         <AppHeader
            background={background}
            text={"Our Coffee"}
         />
         <AppProductsInfo
            title={"About it"}
            image={coffee}
            description={description}
            price={price}
            country={country} />
      </>
   )
}

export default SingleCoffeePage;