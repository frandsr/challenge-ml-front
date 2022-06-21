import { replaceBreakingSpaces } from "helpers/stringHelpers";
import { useState, useEffect } from "react";

const BASE_SERVER_ITEMS_URL = "http://localhost:8080/api/items/";


const useFetchItemInfo = (id, itemDescriptionRef) => {
  const [item, setItem] = useState();
  const [categoriesPath, setCategoriesPath] = useState();

  useEffect(() => {
    fetch(BASE_SERVER_ITEMS_URL + id)
      .then((response) => response.json())
      .then((data) => {
        setItem(data.item);
        setCategoriesPath(data.category_path);
        if (itemDescriptionRef.current) {
          itemDescriptionRef.current.innerHTML = replaceBreakingSpaces(
            data.item.description
          );
        }
      });
  }, [id, itemDescriptionRef]);

  return { item, categoriesPath };
};

export default useFetchItemInfo;
