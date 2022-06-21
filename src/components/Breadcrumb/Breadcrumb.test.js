// import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { LoadingProvider } from "contexts/LoadingContext";
import { BrowserRouter } from "react-router-dom";
import { Breadcrumb } from "./Breadcrumb";

test("Check for correct render of Breadcrumb Component", () => {
  const mockCategoryPath = [
    "Ropa y Accesorios",
    "Equipaje, Bolsos y Carteras",
    "Mochilas"
  ];

  render(
    <BrowserRouter>
      <LoadingProvider>
        <Breadcrumb categoryPath={mockCategoryPath} />
      </LoadingProvider>
    </BrowserRouter>
  );
  //console.log(prettyDOM(container));
    let listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(3);
});
