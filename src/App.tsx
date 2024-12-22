import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/home/Home";
import { Layout } from "./components/layout/Layout";
import "./App.css";

function App() {
    return (
        <Routes>
            <Route path="" element={<Layout />}>
                <Route index element={<Home />} />{" "}
                <Route path="home" element={<Home />} />
            </Route>
        </Routes>
    );
}

export default App;
