import { v4 as uuidv4 } from 'uuid';
import aromisticoCoffee from "../../resourses/images/Coffee/AromisticoCoffee.png";

export const postItems = [
   { id: uuidv4(), title: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "10.99$", img: aromisticoCoffee },
   { id: uuidv4(), title: "12313 Coffee 1 kg", country: "Kenya", price: "10.99$", img: aromisticoCoffee },
   { id: uuidv4(), title: "rqewqOMISTICO Coffee 1 kg", country: "Columbia", price: "10.99$", img: aromisticoCoffee },
   { id: uuidv4(), title: "AsfsfqqICO Coffee 1 kg", country: "Columbia", price: "10.99$", img: aromisticoCoffee },
   { id: uuidv4(), title: "AROMISTICO Coffee 1 kg", country: "Kenya", price: "10.99$", img: aromisticoCoffee },
   { id: uuidv4(), title: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "10.99$", img: aromisticoCoffee }
];
export const filterProps = ["Brazil","Kenya", "Columbia"];

