import React from "react";
import "../../HomePage/app.css";
import Image from "../../../elements/Images";
import Logo from "../../../../assets/Logo.svg";
import Profile from "../../../../assets/Images/profile.svg";
import ArrowDown from "../../../../assets/Images/ArrowDown.svg";
import Vprofile from "../../../../assets/Images/Vprofile.svg";
import Bintang from "../../../../assets/Images/Bintang.svg";
import Vkeluar from "../../../../assets/Images/Vkeluar.svg";
import NavItem from "../../../elements/NavItem";
import LinkItem from "../../../elements/Link";

const Navbar = () => {
    return (
      <>
        <div className="navbar">
          <ul className="navbar-logo-links-container">
             <li>
             <NavItem href="/">
                <Image src={Logo}></Image>
              </NavItem>
             </li>
             <li>
             <NavItem href="/">Series
             </NavItem>
             </li>
             <li>
              
             <NavItem href="/">Film
              </NavItem>
             </li>
             <li>
              
             <NavItem href="/">Daftar Saya
              </NavItem>
             </li>


          </ul>
          <div className="navbar-avatar-container">
          <Image className="avatar" src={Profile}></Image>
          <Image src={ArrowDown}></Image>
          <ul className="avatar-dropdown">
            <li>
              <Image src={Vprofile}></Image>
              <LinkItem className="dropdown-active" href="/" ><span>Profil Saya</span>
              </LinkItem>
            </li>
            <li>
              <Image src={Bintang}></Image>
            <LinkItem href="/">Ubah Premium
            </LinkItem>
            </li>
            <li>
              <Image src={Vkeluar}></Image>
            <LinkItem href="/">Keluar
            </LinkItem>
            </li>
          </ul>
          </div>
        </div>
      </>
    )
}

export default Navbar