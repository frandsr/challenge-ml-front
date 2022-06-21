import { LoadingContext } from "contexts/LoadingContext";
import { getQueryParamsURlFromString } from "helpers/routingHelpers";
import { useState, useEffect, useContext } from "react";

const BASE_SERVER_ITEMS_URL = "http://localhost:8080/api/items?";

const useFetchItems = (searchParams) => {
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

  return { itemsList, categoriesPath, loading };
};

export default useFetchItems;
