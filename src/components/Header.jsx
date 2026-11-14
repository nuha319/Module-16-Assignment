import { useState } from "react";
import { NavLink } from "react-router-dom";
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <NavLink className="brand" to="/" onClick={closeMenu}>
          <span className="brand-mark">N</span>northstar
          <span className="brand-dot">.</span>
        </NavLink>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav
          className={menuOpen ? "main-nav is-open" : "main-nav"}
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            className="nav-contact"
            href="mailto:your-email@example.com"
            onClick={closeMenu}
          >
            Let's talk ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
