import React from "react";
import { useParams } from "react-router-dom";

export const ItemDetail = () => {
   let {id} = useParams();
  return <h1>ItemDetail: {id} </h1>;
};
