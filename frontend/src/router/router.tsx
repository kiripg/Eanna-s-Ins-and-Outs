import React from "react";
import { Routes, Route } from 'react-router-dom';
import LandingPage from "../pages/landingPage";
import Characters from "../pages/characters";
import Writters from "../pages/writters";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/writters" element={<Writters />} />
        </Routes>
    );
};

export default Router;