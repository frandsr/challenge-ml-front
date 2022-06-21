// import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { ListItem } from "./ListItem";
import { render, screen } from "@testing-library/react";
import { LoadingProvider } from "contexts/LoadingContext";
import { BrowserRouter } from "react-router-dom";

test("Check for correct render of List Item Component", () => {
    const mockItemData = {
      id: "MLA777828098",
      title: "Mochila Tactica Asalto Militar 30 Lts Trekking Seguridad",
      price: {
        currency: "ARS",
        amount: 6399,
        decimals: 0
      },
      picture: "http://http2.mlstatic.com/D_980193-MLA44000303895_112020-O.jpg",
      condition: "new",
      free_shipping: true,
      location: "Capital Federal"
    }; 

   const { container } = render(
     <BrowserRouter>
       <LoadingProvider>
         <ListItem itemData={mockItemData} />
       </LoadingProvider>
     </BrowserRouter>
   );
  //console.log(prettyDOM(container));
  screen.getByText("Mochila Tactica Asalto Militar 30 Lts Trekking Seguridad");//Check for Item Description
  screen.getByText("$ 6.399");//Check for correct formated item price
  screen.getByText("Capital Federal");//Check for location
  //container.querySelector(".shippingLogo");//Check for img existance
});
