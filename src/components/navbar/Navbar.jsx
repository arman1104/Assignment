import React, { useState } from "react";
import "./Navbar.css";
import { ChevronDown, Menu, X } from "lucide-react";
import Avatar from "../../assets/nav-avatar.jpg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="main-container">
        <h3>Untitled UI</h3>
        <div className={`list-container ${isMobileMenuOpen ? "open" : ""}`}>
          <ul>
            <li>Home</li>
            <li>
              Products
              <span>
                <ChevronDown size={"1.2rem"} />
              </span>
            </li>
            <li>
              Resources
              <span>
                <ChevronDown size={"1.2rem"} />
              </span>
            </li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className="img-container">
          <img src={Avatar} alt="User Avatar" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={"1.5rem"} /> : <Menu size={"1.5rem"} />}
        </button>
      </div>
    </>
  );
};

export default Navbar;
