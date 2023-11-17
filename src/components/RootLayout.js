import React from "react";
import { Outlet } from "react-router-dom";
import Navbar_basic from "./Navbar_basic";
import { Provider } from "react-redux";
import store from "../store/store";

const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <Navbar_basic />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};

export default RootLayout;
