import React, {Fragment} from "react";
// import "../../HomePage/app.css";
import "./main.css";
import Button from "../../../elements/Button";
import Image from "../../../elements/Images";
import Outline from "../../../../assets/Images/outline.svg";
import VolumeOff from "../../../../assets/Images/VolumeOff.svg";

const HeroSection = () => {
    return(
        <>
             <section className="section-hero">
            <div className="section-hero-content">
                <div 
                className="section-hero-content-heading-description">
                    <h1>Duty After School</h1>
                    <p>Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.</p>
                </div>
                <div className="section-hero-media-buttons-container">
                    <div className="section-hero-media-buttons-section1">
                        <Button className="button start-button">
                            <p>Mulai</p>
                        </Button>
                        <Button className="button info-button">
                        <Image src={Outline} alt="info-icon"></Image>
                            <p>Selengkapnya</p>
                        </Button>
                        <p className="info">18+</p>
                    </div>
                    <div className="section-hero-media-buttons-section2">
                        <Image className="info" src={VolumeOff} alt="volume off"/>
                    </div>
                </div>
        </div>
        </section>
        </>
    )
}

export default HeroSection