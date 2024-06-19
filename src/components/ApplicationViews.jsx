import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Authorized } from "./Authorized"
import { Login } from "../pages/Login.jsx"
import Home from "../pages/Home"
import { Register } from '../pages/Register.jsx'
import { Games } from "./Games.jsx"
import { GameForm } from "./GameForm.jsx"


export const ApplicationViews = () => {

    let authToken = `Token ${JSON.parse(localStorage.getItem("game_token"))}`

    return <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<Games authToken={authToken}/>} />
                <Route path="/create" element={<GameForm authToken={authToken}/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
}