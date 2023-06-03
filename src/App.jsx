import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ContextAuth } from "./components/context/ContextAuth";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./global.css"
import Register from "./pages/Register";
import Test from "./Test";

export default function App() {
    let [isLogin, setLogin] = useState(localStorage.getItem("isLogin"));
    let [userDetail, setUserDeatil] = useState(JSON.parse(localStorage.getItem("userDetail")));
    // console.log("is login ",isLogin );
    // console.log("userDetail ",userDetail ); 
    let [currentBlogId, setBlogId] = useState("default");
    
    return (
        <BrowserRouter>
            <ContextAuth.Provider value={{isLogin,userDetail}}>
                <Routes>
                    <Route path="/*" element={<Home setBlogId={setBlogId} />} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/test" element={<Test userDetail={userDetail}/>} />
                </Routes>
            </ContextAuth.Provider>
        </BrowserRouter>
    )
}