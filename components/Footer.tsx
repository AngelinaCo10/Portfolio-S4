export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footerContainer">
        <h1>Where to find me</h1>
        <div className="iconsContainer">
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
            <img src="/images/Linkedin.svg" alt="LinkedIn" className="footerImages" />
          </a>

          <a href="mailto:537166@student.fontys.nl">
            <img src="/images/Email.svg" alt="Email" className="footerImages" />
          </a>
        </div>
      </div>
    </footer>
  );
}
