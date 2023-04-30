import { v4 as uuidv4 } from 'uuid';
import aromisticoCoffee from "../../resourses/images/Coffee/AromisticoCoffee.png";
import solimoCoffee from "../../resourses/images/Coffee/SolimoCoffee.png";
import prestoCoffee from "../../resourses/images/Coffee/PrestoCoffee.png";


export const postItems = [
   {id: uuidv4(), img: solimoCoffee, title: "Solimo Coffee Beans 2 kg", price: "10.99$", country: "Brazil", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
   {id: uuidv4(), img: prestoCoffee, title: "Presto Coffee Beans 1 kg", price: "15.99$", country: "Columbia", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
   {id: uuidv4(), img: aromisticoCoffee, title: "AROMISTICO Coffee 1 kg", price: "6.99$", country: "Kenya", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
   { id: uuidv4(), title: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "10.99$", img: aromisticoCoffee, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
   { id: uuidv4(), title: "AROMISTICO Coffee 1 kg", country: "Kenya", price: "10.99$", img: aromisticoCoffee, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
   { id: uuidv4(), title: "AROMISTICO Coffee 1 kg", country: "Columbia", price: "10.99$", img: aromisticoCoffee, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
];

export const filterProps = ["Brazil","Kenya", "Columbia"];

export const ourCoffeDesripiton = `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.\n
\nAfraid at highly months do things on at. Situation recommend objection do intention so questions.
\nAs greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.`;

export const forYourPleasureDescriotion = `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
Afraid at highly months do things on at. Situation recommend objection do intention
so questions. 
As greatly removed calling pleased improve an. Last ask him cold feel
met spot shy want. Children me laughing we prospect answered followed. At it went
is song that held help face.`;

