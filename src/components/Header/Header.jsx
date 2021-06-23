import { useState } from "react";
import "./header.css";
import Hamburger from "hamburger-react";
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header>
      <div className="header__container">
        <div className="upper__header">
        <h1 className="header__title">Shortly</h1>
        <Menu/>
        </div>
        <div className="header__buttons">
        <button className="mobile__login">Login</button>
        <button className="mobile__register">Sign Up</button>
        </div>
        <div className="burger">
          <Hamburger
            color="hsl(257, 7%, 63%)"
            toggled={openMenu}
            toggle={setOpenMenu}
            size={20}
            rounded
          />
        </div>
      </div>
      {openMenu && <MobileMenu />}
    </header>
  );
};

export default Header;
