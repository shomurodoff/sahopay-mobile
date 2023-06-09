import React from "react";
import AuthLayout from "../layouts/auth";
import { Text } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";
import IsGuest from "../services/auth/IsGuest";
import IsAuth from "../services/auth/IsAuth";
// PAGES
import LoginPage from "../modules/auth/pages/login";
// PAGES
const Index = () => {
  return (
    <NativeRouter>
      <IsGuest>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<LoginPage />} />
          </Route>
        </Routes>
      </IsGuest>
      <Routes>
        <Route path="/" element={<Text>ERROR Page</Text>} />
      </Routes>
    </NativeRouter>
  );
};

export default Index;
