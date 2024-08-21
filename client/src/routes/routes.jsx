import React from "react";
// import Home from "../pages/home/Home";
import NewBoard from "../pages/newboard/NewBoard";
import { CardsSection } from "../components/cardsSection/CardsSection";
import { Users } from "../pages/users/Users";




const publicRoutesList = [
  // { path: "/", element: <Home /> },
  { path: "/", element: <CardsSection /> },
  { path: "/add-board", element: <NewBoard /> },
  { path: "/users", element: <Users /> },
 
];

const privateRoutesList = [
  // {path:"/*", element : <Home />}
];

export { publicRoutesList, privateRoutesList };
