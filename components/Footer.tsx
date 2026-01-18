export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footerContainer">
        <h1>Contact me.</h1>
        <div className="iconsContainer">
          {/* <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/Linkedin.svg" alt="LinkedIn" className="footerImages" />
          </a> */}

          <a href="mailto:537166@student.fontys.nl">
            <img src="/images/Email.svg" alt="Email" className="footerImages" />
          </a>

          <div className="phoneContainer">
            <a href="tel:+31 6 58906957" className="phoneLink">
              <img
                src="/images/Phone.svg"
                alt="Telefoon"
                className="footerImages"
              />
              <span className="phoneNumber">+31 6 58906967</span>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

