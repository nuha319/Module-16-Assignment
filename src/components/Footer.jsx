import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <Link className="brand" to="/">
            <span className="brand-mark">N</span>northstar
            <span className="brand-dot">.</span>
          </Link>
          <p className="footer-note">
            Thoughtful ideas. Meaningful experiences.
          </p>
        </div>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Northstar Studio</span>
        <span>Made with care.</span>
      </div>
    </footer>
  );
}
