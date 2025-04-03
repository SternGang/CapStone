import React from "react";
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bulma/css/bulma.min.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import InputBone from "./components/InputBone";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />             
            <Route path="/InputBone" element={<InputBone />} />

        </Routes>
    </BrowserRouter>
);

