import { Routes, Route } from "react-router-dom";
import { Header, Footer, BlogContainer } from '../components/Conmponent'
import Contact from "./default/Contact";
import About from "./default/About";
import ReadBlog from "./ReadBlog";
import React from 'react'
import Terms from "./default/Terms";
import Privacy from "./default/Privacy";
import CreateBlog from "./CreateBlog";
import UpdateBlog from "./UpdateBlog";
import Manage from "./Manage";
import Admin from "./Admin";

function Home() {
    return (
        <div>
            <div className="ribbon" ></div>
            <Header />

            <Routes>
                <Route exact path="/" element={<BlogContainer />} />
                <Route path="/readBlog/*" element={<ReadBlog />} />
                <Route path="/write" element={<CreateBlog />} />
                <Route path="/update" element={<UpdateBlog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/terms" element={<Terms/>} />
                <Route path="/privicy" element={<Privacy />} />
                <Route path="/manage" element={<Manage />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Home