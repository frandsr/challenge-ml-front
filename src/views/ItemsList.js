import { Breadcrumb } from "components/Breadcrumb/Breadcrumb";
import { ListItem } from "components/ListItem/ListItem";
import { SkeletonBreadCrumb } from "components/SkeletonBreadCrumb/SkeletonBreadCrumb";
import { SkeletonListItem } from "components/SkeletonListItem/SkeletonListItem";
import useFetchItems from "hooks/useFetchItems";
import React from "react";
import { useSearchParams } from "react-router-dom";

export const ItemsList = () => {
  let [searchParams] = useSearchParams();
  const { itemsList, categoriesPath, loading } = useFetchItems(searchParams)

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
