import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Tổng quan", end: true },
  { to: "/career", label: "Sự nghiệp" },
  { to: "/albums", label: "Album" },
  { to: "/milestones", label: "Dấu mốc" },
  { to: "/sources", label: "Nguồn", source: true },
];

function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Taylor Swift — trang chủ" onClick={closeMenu}>
        <span className="brand-mark">T</span>
        <span>TAYLOR SWIFT<small>HÀNH TRÌNH ÂM NHẠC</small></span>
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="primary-nav"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="sr-only">Mở menu</span><i /><i />
      </button>
      <nav className={`primary-nav${isOpen ? " is-open" : ""}`} id="primary-nav" aria-label="Điều hướng chính">
        {links.map(({ to, label, end, source }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            onClick={closeMenu}
            className={({ isActive }) => `${source ? "nav-source " : ""}${isActive ? "is-current" : ""}`.trim()}
            aria-current={location.pathname === to ? "page" : undefined}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default SiteHeader;
