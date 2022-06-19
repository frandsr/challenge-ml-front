import React from "react";
import { useSearchParams } from "react-router-dom";

export const ItemsList = () => {
  let [searchParams] = useSearchParams();
  console.log("searchParams", searchParams);
  return <h1>ItemsList: {searchParams.get("search")}</h1>;
};
