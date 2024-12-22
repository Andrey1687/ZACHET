import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/home/Home";
import { Layout } from "./components/layout/Layout";
import { ShopBasket } from "./components/pages/shopBasket/ShopBasket";
import { Shop } from "./components/pages/Shop/Shop";
import "./App.css";
import Furniture from "./components/pages/furniture/Furniture";
import AboutUs from "./components/pages/AboutUs/AboutUs";

function App() {
    return (
        <Routes>
            <Route path="" element={<Layout />}>
                <Route path="Furniture" element={<Furniture />} />
                <Route path="AboutUs" element={<AboutUs />} />
                <Route path="ShopBasket" element={<ShopBasket />} />
                <Route path="Shop" element={<Shop />} />
                <Route index element={<Home />} />{" "}
                <Route path="home" element={<Home />} />
            </Route>
        </Routes>
    );
}

export default App;
