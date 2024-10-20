import React, {Fragment} from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
import "./app.css";
import "./reset.css";


const Homepage = () => {
    return (
        <div className="background-beranda">  
            <Navbar/>
            <Main/>
            <Footer/>
        </div>
    )
}
export default Homepage