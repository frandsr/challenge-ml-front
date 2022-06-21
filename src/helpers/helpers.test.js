// import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {
  getQueryParamsURlFromString,
  getSearchParamsURlFromString
} from "./routingHelpers";
import { capitalizeString, translateCondition } from "./stringHelpers";

describe("correct functioning for rounting helpers", () => {
  test("getSearchParamsURlFromString correct functioning", () => {
    const mockSearchValue = "Samsung s22";
    expect(getSearchParamsURlFromString(mockSearchValue)).toEqual(
      "search=Samsung+s22"
    );
  });

  test("getQueryParamsURlFromString correct functioning", () => {
    const mockSearchValue = "Samsung s22";
    expect(getQueryParamsURlFromString(mockSearchValue)).toEqual(
      "q=Samsung+s22"
    );
  });
});

describe("correct functioning for string helpers", () => {
  test("capitalizeString correct functioning", () => {
    const string = "palabra";
    expect(capitalizeString(string)).toEqual("Palabra");
  });
  test("translateCondition correct functioning", () => {
    const condition = "new";
    expect(translateCondition(condition)).toEqual("Nuevo");
  });
});
