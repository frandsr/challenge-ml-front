import { Breadcrumb } from "components/Breadcrumb/Breadcrumb";
import { ListItem } from "components/ListItem/ListItem";
import { SkeletonBreadCrumb } from "components/SkeletonBreadCrumb/SkeletonBreadCrumb";
import { SkeletonListItem } from "components/SkeletonListItem/SkeletonListItem";
import { LoadingContext } from "contexts/LoadingContext";
import { getQueryParamsURlFromString } from "helpers/routingHelpers";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const BASE_SERVER_ITEMS_URL = "http://localhost:8080/api/items?";

export const ItemsList = () => {
  let [searchParams] = useSearchParams();
  const [itemsList, setItemsList] = useState([]);
  const [categoriesPath, setCategoriesPath] = useState();
  const { loading, contentIsLoaded, contentIsLoading } =
  useContext(LoadingContext);

  useEffect(() => {
    contentIsLoading();
    const queryParamsURL = getQueryParamsURlFromString(
      searchParams.get("search")
    );
    fetch(BASE_SERVER_ITEMS_URL + queryParamsURL)
      .then((response) => response.json())
      .then((data) => {
        setItemsList(data.items);
        setCategoriesPath(data.category_path);
        contentIsLoaded();
      });
  }, [searchParams]);

  return (
    <>
      <div className="container">
        {!loading && categoriesPath  ? (
          <Breadcrumb categoryPath={categoriesPath} />
        ) : (
          <SkeletonBreadCrumb />
        )}
        {!loading ? (
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
          <ul>
            {[...Array(4)].map((x, i) => {
              return <SkeletonListItem key={i} />;
            })}
          </ul>
        )}
      </div>
    </>
  );
};
