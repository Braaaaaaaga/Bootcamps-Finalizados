import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Musicas from "./pages/musicas/Musicas";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import Adicionar from "./pages/adicionar/Adicionar";
import Editar from "./pages/editar/Editar";

function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/musicas" element={<Musicas />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/adicionar" element={<Adicionar />} />
                    <Route path="/editar/:idCard" element={<Editar />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Rotas;