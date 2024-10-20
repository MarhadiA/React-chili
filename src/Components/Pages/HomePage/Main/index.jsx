import { Fragment } from "react";
import HeroSection from "./HeroSection";
import "./main.css";
import FilmSection from "./FilmSection";

const Main = () => {
    return(
        <Fragment>
            <HeroSection/>      
            <FilmSection/>
              
        </Fragment>
    )
}

export default Main