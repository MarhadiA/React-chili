import ItemFilm from "./ItemFilm";
import Image from "../../../elements/Images";
import Dont from "../../../../assets/Images/img-233.svg";
import Batman from "../../../../assets/Images/batman.svg";
import Blueblock from "../../../../assets/Images/blueblock.png";
import Bintang from "../../../../assets/Images/Bintang.svg";
import Otto from "../../../../assets/Images/otto.svg";
import Jurasic from "../../../../assets/Images/jurasic.svg";
import Suzume from "../../../../assets/Images/suzume.svg";
import Allog from "../../../../assets/Images/allog.svg";
import Big from "../../../../assets/Images/bighero.svg";
import Tomorrow from "../../../../assets/Images/tomorow.svg";
import Quantum from "../../../../assets/Images/quantumania.svg";
import Guardian from "../../../../assets/Images/guardian.svg";
import Otopotret from "../../../../assets/Images/otopotret.svg";
import Mermaid from "../../../../assets/Images/mermaid.svg";
import Sonic from "../../../../assets/Images/sonic.svg";
import Right from "../../../../assets/Images/right.svg";
import Left from "../../../../assets/Images/left.svg";
import Episode from "../../../../assets/Images/episode.png";
import Duty from "../../../../assets/Images/duty.png";
import Missing from "../../../../assets/Images/mising.png";
import Top from "../../../../assets/Images/top.png";
import Button from "../../../elements/Button";
import "../../HomePage/app.css";
import { Fragment } from "react";

const FilmSection = () => {
 return(
 <>
    <section className="film-section">
    <h2 className="film-section-heading">Melanjutkan Tonton Film</h2>
    <div className="film-section-landscape">
                <div className="film-section-landscape-films">
                    <ItemFilm className="film-landscape-item">
                        <Image src={Dont} alt="dont look up poster"/>
                        <div className="film-landscape-item-text-container">
                            <p className="film-landscape-item-title">Don't Look Up</p>
                            <div className="film-landscape-item-rating-container">
                        
                                <Image src={Bintang} alt="rating icon"/>
    
                                <p className="film-landscape-item-rating">4.5/5</p>
                           
                            </div>
                        </div>
                    </ItemFilm>
                    <ItemFilm className="film-landscape-item">
                        <Image src={Batman} alt="the batman poster"/>
                        <div className="film-landscape-item-text-container">
                            <p className="film-landscape-item-title">The Batman</p>
                            <div className="film-landscape-item-rating-container">
                                <Image src={Bintang} alt="rating icon"/>
                                <p className="film-landscape-item-rating">4.2/5</p>
                            </div>
                        </div>
                    </ItemFilm>
                    <ItemFilm className="film-landscape-item">
                        <Image src={Blueblock} alt="blue lock poster"/>
                        <div className="film-landscape-item-text-container">
                            <p className="film-landscape-item-title">Blue Lock</p>
                            <div className="film-landscape-item-rating-container">
                                <Image src={Bintang} alt="rating icon"/>
                                <p className="film-landscape-item-rating">4.6/5</p>
                            </div>
                        </div>
                    </ItemFilm>
                    <ItemFilm className="film-landscape-item">
                        <Image src={Otto} alt="a man called otto poster"/>
                        <div className="film-landscape-item-text-container">
                            <p className="film-landscape-item-title">A Man Called Otto</p>
                            <div className="film-landscape-item-rating-container">
                                <Image src={Bintang} alt="rating icon"/>
                                <p className="film-landscape-item-rating">4.4/5</p>
                            </div>
                        </div>
                    </ItemFilm>
                </div>
                <div className="film-section-arrow-buttons">
                    <Button className="media-button media-button-left">
                        <Image src={Left} alt="arrow left"/>
                    </Button>
                    <Button className="media-button media-button-right">
                        <Image src={Right} alt="arrow left"/>
                    </Button>                    
                </div>
            </div>
    </section>
    <section className="film-section">
         <h2 className="film-section-heading">Top Rating Film dan Series Hari ini</h2>
    <div className="film-section-portrait">
                <div className="film-section-portrait-films">
                    <ItemFilm className="film-portrait-item">
                        <Image className="film-portrait-item-poster" src={Suzume} alt="dont look up poster"/>
                                <Image className="film-portrait-item-episode-baru-label" src={Episode} alt="rating icon"/>

                    </ItemFilm>
                    <ItemFilm className="film-portrait-item">
                        <Image className="film-portrait-item-poster" src={Jurasic} alt="dont look up poster"/>
                    </ItemFilm>
                    <ItemFilm className="film-portrait-item">
                        <Image className="film-portrait-item-poster" src={Sonic} alt="dont look up poster"/>
                    </ItemFilm>
                    <ItemFilm className="film-portrait-item">
                        <Image className="film-portrait-item-poster" src={Allog} alt="dont look up poster"/>
                                <Image className="film-portrait-item-episode-baru-label" src={Episode} alt="rating icon"/>

                    </ItemFilm>
                    <ItemFilm className="film-portrait-item">
                        <Image className="film-portrait-item-poster" src={Big} alt="dont look up poster"/>
                                <Image className="film-portrait-item-episode-baru-label" src={Episode} alt="rating icon"/>

                    </ItemFilm>
                </div>
   
                <div className="film-section-arrow-buttons">
                    <Button className="media-button media-button-left">
                        <Image src={Left} alt="arrow left"/>
                    </Button>
                    <Button className="media-button media-button-right">
                        <Image src={Right} alt="arrow left"/>
                    </Button>                    
                </div>
                </div>
    </section>
    <section className="film-section">
         <h2 className="film-section-heading">Film Trending</h2>
         <div className="film-section-portrait">
                <div className="film-section-portrait-films">
                    <ItemFilm className="film-portrait-item">
                        <Image className="film-portrait-item-poster" src={Tomorrow} alt="dont look up poster"/>
                                <Image className="film-portrait-item-top-10-label" src={Top} alt="rating icon"/>

                    </ItemFilm>
                    <ItemFilm className="film-portrait-item">
                        <Image className="film-portrait-item-poster" src={Quantum} alt="dont look up poster"/>
                                <Image className="film-portrait-item-top-10-label" src={Top} alt="rating icon"/>

                    </ItemFilm>
                    <ItemFilm className="film-portrait-item">
                        <Image className="film-portrait-item-poster" src={Guardian} alt="dont look up poster"/>
                                <Image className="film-portrait-item-top-10-label" src={Top} alt="rating icon"/>

                    </ItemFilm>
                    <ItemFilm className="film-portrait-item">
                        <Image className="film-portrait-item-poster" src={Otopotret} alt="dont look up poster"/>
                                <Image className="film-portrait-item-top-10-label" src={Top} alt="rating icon"/>

                    </ItemFilm>
                    <ItemFilm className="film-portrait-item">
                        <Image className="film-portrait-item-poster" src={Mermaid} alt="dont look up poster"/>
                                <Image className="film-portrait-item-top-10-label" src={Top} alt="rating icon"/>

                    </ItemFilm>

                </div>
   
                <div className="film-section-arrow-buttons">
                    <Button className="media-button media-button-left">
                        <Image src={Left} alt="arrow left"/>
                    </Button>
                    <Button className="media-button media-button-right">
                        <Image src={Right} alt="arrow left"/>
                    </Button>                    
                </div>
         </div>
    </section>
    <section className="film-section">
         <h2 className="film-section-heading">Rilis Baru</h2>
             <div className="film-section-portrait">
                <div className="film-section-portrait-films">
                <ItemFilm className="film-portrait-item">
                     <Image className="film-portrait-item-poster" src={Mermaid} alt="dont look up poster"/>
                     <Image className="film-portrait-item-top-10-label" src={Top} alt="rating icon"/>

                </ItemFilm>
                <ItemFilm className="film-portrait-item">
                        <Image className="film-portrait-item-poster" src={Duty} alt="dont look up poster"/>
                                <Image className="film-portrait-item-episode-baru-label" src={Episode} alt="rating icon"/>

                    </ItemFilm>
                    <ItemFilm className="film-portrait-item">
                        <Image className="film-portrait-item-poster" src={Big} alt="dont look up poster"/>
                                <Image className="film-portrait-item-episode-baru-label" src={Top} alt="rating icon"/>

                    </ItemFilm>
                    <ItemFilm className="film-portrait-item">
                        <Image className="film-portrait-item-poster" src={Allog} alt="dont look up poster"/>
                                <Image className="film-portrait-item-episode-baru-label" src={Episode} alt="rating icon"/>

                    </ItemFilm>
                 <ItemFilm className="film-portrait-item">
                        <Image className="film-portrait-item-poster" src={Missing} alt="dont look up poster"/>
                </ItemFilm>

                </div>
   
                <div className="film-section-arrow-buttons">
                    <Button className="media-button media-button-left">
                        <Image src={Left} alt="arrow left"/>
                    </Button>
                    <Button className="media-button media-button-right">
                        <Image src={Right} alt="arrow left"/>
                    </Button>                    
                </div>
                </div>
    </section>
</>
 )

}
export default FilmSection