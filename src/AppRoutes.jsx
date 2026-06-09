import { Route, Routes } from "react-router-dom";
import Portfolio from "./Components/Portfolio";


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Portfolio />} />
        </Routes>
    )}