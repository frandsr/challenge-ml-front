import { Breadcrumb } from "components/Breadcrumb/Breadcrumb";
import { ListItem } from "components/ListItem/ListItem";
import { getQueryParamsURlFromString } from "helpers/routingHelpers";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const BASE_SERVER_ITEMS_URL = "http://localhost:8080/api/items?";

export const ItemsList = () => {
  let [searchParams] = useSearchParams();
  const [itemsList, setItemsList] = useState([]);
  const [categoriesPath, setCategoriesPath] = useState();


  useEffect(() => {
    const queryParamsURL = getQueryParamsURlFromString(
      searchParams.get("search")
    );
    fetch(BASE_SERVER_ITEMS_URL + queryParamsURL)
      .then((response) => response.json())
      .then((data) => {
        setItemsList(data.items);
        setCategoriesPath(data.category_path);
        
      });
  }, [searchParams])
  
  return (
    <>
      <div className="container">
        {categoriesPath && <Breadcrumb categoryPath={categoriesPath} />}
        {itemsList.length > 0 ? (
          <ul>
            {itemsList.map((item) => {
              return (
                <ListItem key={item.id} itemData={item}>
                  {item.title}
                </ListItem>
              );
            })}
          </ul>
        ) : (
          <p>No hay elementos</p>
        )}
      </div>
    </>
  );
};
