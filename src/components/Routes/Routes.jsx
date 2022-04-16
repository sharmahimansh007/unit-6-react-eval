import React from "react";
import { Route, Routes } from "react-router-dom";
import { City } from "../city/city";
import { Country } from "../country/country";
import { Home } from "../Home/home";
import { NavBar } from "../Navbar/Navbar";

export const Routers = () => {
    return (
        <>
        <NavBar/>
        <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/add-city" element={ <City/> }/>
            <Route path="/add-country" element={  <Country/> }/>
        </Routes>
        </>
    )
}
