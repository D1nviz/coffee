import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { postItems } from "../../Constants";
import AppHeader from "../../AppHeader";
import AppProductsInfo from "../../AppProductsInfo";
import coffee from "../../../resourses/images/Coffee/coffee.jpg"
import background from "../../../resourses/images/backgrounds/ourCoffee.png";

const SingleCoffeePage = () => {
   const { coffeId } = useParams();
   const { description, price, country, title } = postItems.find(item => item.id === coffeId);
   
   return (
      <>
         <Helmet>
            <meta name="description" content={`${title} page`} />
            <title>{title}</title>
         </Helmet>
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