import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import {  Route, Routes, MemoryRouter } from "react-router-dom";
import { Home } from "views/Home";

test("Check for correct render of Home Component", () => {
  render(
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </MemoryRouter>
  );

  screen.getByText(/Mercado Libre/);
});
