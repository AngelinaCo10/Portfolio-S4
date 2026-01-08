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
        <Link href="/#greenSection">MY WORK</Link>
        <Link href="/#aboutmeSection">ABOUT ME</Link>
      </div>

      <div className="navbar-links-rechts">
        <div className="contact">
          <Link href="#contact">CONTACT</Link>
        </div>
      </div>
    </nav>
  );
}
