import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-links-left">
        <Link href="/" className="navbar-logo">
          <img
            src="/images/AC Logo.svg"
            alt="Angelina Coffie logo"
            className="logo-img"
          />
        </Link>
      </div>

      <div className="navbar-links-center">
        <Link href="/#greenSection">My Work</Link>
        <Link href="/#about">About Me</Link>
      </div>

      <div className="navbar-links-rechts">
        <div className="contact">
          <Link href="/#contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
