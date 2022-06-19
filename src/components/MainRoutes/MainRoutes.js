import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "views/Home";
import { ItemDetail } from "views/ItemDetail";
import { ItemsList } from "views/ItemsList";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/items" element={<ItemsList />} />
      <Route path="/items/:id" element={<ItemDetail />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
