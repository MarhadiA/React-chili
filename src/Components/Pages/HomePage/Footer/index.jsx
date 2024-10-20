import Image from "../../../elements/Images";
import Logo from "../../../../assets/Images/Logo.svg";

const Footer = () => {
    return (
        <>
        <div className="footer">
            <div className="footer-logo-copyright">
            <Image src={Logo}></Image>
            <p>@2024 Chill All Rights Reserved.</p>
            </div>
            <div class="footer-genre">
            <a href="#" class="footer-list-heading">Genre</a>
            <ul class="footer-grid-container">
                <li><a href="#">Aksi</a></li>
                <li><a href="#">Anak-anak</a></li>
                <li><a href="#">Anime</a></li>
                <li><a href="#">Britania</a></li>
                <li><a href="#">Drama</a></li>
                <li><a href="#">Fantasi Ilmiah & Fantasi</a></li>
                <li><a href="#">Kejahatan</a></li>
                <li><a href="#">KDrama</a></li>
                <li><a href="#">Komedi</a></li>
                <li><a href="#">Petualangan</a></li>
                <li><a href="#">Perang</a></li>
                <li><a href="#">Romantis</a></li>
                <li><a href="#">Sains & Alam</a></li>
                <li><a href="#">Thriller</a></li>
            </ul>
        </div>
        <div class="footer-bantuan">
            <a href="#" class="footer-list-heading">Bantuan</a>
            <ul class="footer-grid-container">
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Kontak Kami</a></li>
                <li><a href="#">Privasi</a></li>
                <li><a href="#">Syarat & Ketentuan</a></li>
            </ul>
        </div>
        </div>
        </>
    )
}
export default Footer