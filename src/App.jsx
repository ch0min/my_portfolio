import React from "react";
// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import {Route, Routes, useLocation, useNavigate} from "react-router";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";


import ProgressBar from "./components/progressbar/ProgressBar";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import BlogCards from "./components/blogcards/BlogCards";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
// import  from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";


import NavBlogs from "./components/navblogs/NavBlogs";
import Blogs from "./pages/blogs/Blogs";
import BlogArticle from "./pages/blogarticle/BlogArticle";


function App() {
    const location = useLocation()
    const navigate = useNavigate()

    const handleNavClick = () => {
        navigate("/")
    }

    return (
        <>
            <NavBlogs onClick={handleNavClick} />
            <Routes>
                <Route path="/blogs" element={<Blogs />}/>
                <Route path="/blogarticle" element={<BlogArticle />}/>
            </Routes>




            {["/blogs", "/blogarticle"].includes(location.pathname) ? null : (
                <>
                    <ProgressBar/>
                    <Nav/>
                    <Header/>
                    <BlogCards/>
                    <About/>
                    {/*<Blogs />*/}
                    <Experience/>
                    <Projects/>
                    <Contact/>
                    <Footer/>
                </>
            )}




        </>
    );
}

export default App;