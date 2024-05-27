import React from "react";
import { Routes, Route } from 'react-router-dom';
import LandingPage from "../pages/landingPage";
import Characters from "../pages/characters";
import Writters from "../pages/writters";
import Arunia from "../pages/arunia";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/writters" element={<Writters />} />
            <Route path="/arunia" element={<Arunia />} />
        </Routes>
    );
};

export default Router;