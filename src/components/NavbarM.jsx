import { useState, useEffect } from "react";

export default function NavbarM() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let menuSrc;

  if (!isMenuOpen) menuSrc = "./menu_w.png";
  if (isMenuOpen) menuSrc = "./menu_v.png";

  useEffect(() => {}, []);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav id="NavbarM">
      <img className="logo" src="./logo_arcs_v2.png" alt="logo" />
      <button
        onClick={() => {
          toggleMenu();
        }}
      >
        <img className="menu" src={menuSrc} alt="menu" />
      </button>
      {isMenuOpen && (
        <div className="openMenu">
          <ul>
            <li>About</li>
            <li>House</li>
            <li>Community</li>
            <li>Gastronomy</li>
            <li>Agenda</li>
            <li className="membership">Apply for membership</li>

            <li className="flex">
              <img className="sign-in" src="./sign-in.svg" alt="sign in icon" />
              <p>Sign In</p>
              <img className="language" src="./en.png" alt="language" />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
