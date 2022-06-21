// import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { LoadingProvider } from 'contexts/LoadingContext';
import { BrowserRouter } from 'react-router-dom';
import {  render, screen } from "@testing-library/react";
import { Header } from "./Header";

test('Check for correct render of Header Component', () => {
 render(
    <BrowserRouter>
      <LoadingProvider>
        <Header />
      </LoadingProvider>
    </BrowserRouter>
  );
  screen.getByRole("heading"); //Check for header
  screen.getByText("Mercado Libre"); //Check for Logo
})
