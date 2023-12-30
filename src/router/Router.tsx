import React, { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LocationTable from "../pages/LocationTable";
import Layout from "../layout/Layout";
import { ROUTES } from "../constants/AppConstants";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to={ROUTES.MASTER} />} />
        </Route>
        <Route path={ROUTES.MASTER} element={<Layout />}>
          <Route index element={<Navigate to={ROUTES.LOCATION} />} />
          <Route path={ROUTES.LOCATION} element={<LocationTable />} />
        </Route>
        <Route path="*" element={<h1>page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
