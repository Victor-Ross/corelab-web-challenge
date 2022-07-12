import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { ImSun } from 'react-icons/im';
import { BsFillMoonFill } from 'react-icons/bs';

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const html = document.querySelector('html');
  html?.addEventListener('click', () => setIsNavOpen(false));

  return (
    <nav>
      <div className="container py-3 mx-3">
        <div className="brand">
          <span>DevMotors</span>
        </div>
        <div className="links-container" onClick={(e) => e.stopPropagation()}>
          <div className="toggle">
            {isNavOpen ? (
              <MdClose size="2rem" onClick={() => setIsNavOpen(false)} />
            ) : (
              <GiHamburgerMenu
                size="2rem"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsNavOpen(true);
                }}
              />
            )}
          </div>
          <div className={`links ${isNavOpen ? 'responsive-toggle' : ''}`}>
            <ul>
              <li>
                <a href="#">Search</a>
              </li>
              <li>
                <a href="#">Categories</a>
              </li>
              <li>
                <a href="#">Recommended</a>
              </li>
              <li>
                <a href="#">Favorites</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
