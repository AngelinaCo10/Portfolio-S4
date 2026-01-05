import Link from "next/link";

export default function Page() {
  return (
    <main>
      {/* Header */}
      <header>
        <section className="header">
          <p className="header-description">Hi, I am</p>

          <h1 className="header-title typer">
            <span>A</span>
            <span>n</span>
            <span>g</span>
            <span>e</span>
            <span>l</span>
            <span>i</span>
            <span>n</span>
            <span>a</span>
            {" "}
            <span>C</span>
            <span>o</span>
            <span>f</span>
            <span>f</span>
            <span>i</span>
            <span>e</span>
          </h1>

          <p className="header-description">
            Your website designer that loves learning new stuff
          </p>

          <Link href="/#greenSection" className="header-button">
            Get to know me more
          </Link>
        </section>
      </header>

      <section className="balk">
        <img src="/images/Bloem foto.png" alt="" className="bloemfoto" />
      </section>

      {/* Projects */}
      <section className="greenSection" id="greenSection">
        <div className="contents">
          <div className="textProjects">
            <h1>My Work.</h1>
            <p>Visit my projects to see what I have worked on.</p>
          </div>

          <div className="containerprojects">
            <div className="containerProjectCards">
              {/* Card 1 */}
              <div className="projectCard">
                <img
                  src="/images/Mario foto.svg"
                  alt="Mario foto"
                  className="projectImage1"
                />
                <h2>
                  Mario & Luigi’s
                  <br />
                  Pizzaria
                </h2>
                <p>
                  I made an orderwebsite for a pizzaria to make the orderprocess
                  easier and it saves time, because they don’t have many employees.
                </p>
                <Link href="/project1" className="cardButton">
                  More
                </Link>
              </div>

              {/* Card 2 */}
              <div className="projectCard">
                <img
                  src="/images/LinAir foto.svg"
                  alt="LinAir foto"
                  className="projectImage1"
                />
                <h2>Travel Agency LinAir</h2>
                <p>
                  This is a personal project I did. I made my own travel agency
                  website so that people can order flights for the best destinations.
                </p>
                <Link href="/project2" className="cardButton">
                  More
                </Link>
              </div>

              {/* Card 3 */}
              <div className="projectCard">
                <img
                  src="/images/Klets foto.svg"
                  alt="Klets foto"
                  className="projectImage1"
                />
                <h2>KLETS!</h2>
                <p>
                  KLETS! is a Dutch learning app I made with my group for refugees
                  that live at a AZC in the Netherlands to learn the Dutch language
                  on their own.
                </p>
                <Link href="/project3" className="cardButton">
                  More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="balk">{/* spacer */}</section>

      {/* Skills */}
      <section className="skillsSection">
        <img src="/images/Bloem foto.png" alt="" className="bloemfoto2" />

        <div className="skillsContent">
          <div className="titleSkills">
            <h1>Skills.</h1>
          </div>

          <div className="skillsColumns">
            <div className="skills">
              <h3>Web design</h3>
              <h4>Figma</h4>
              <h4>UX/UI</h4>
              <h4>Responsive Design</h4>
              <h4>Wireframing</h4>
            </div>

            <div className="skills">
              <h3>Frontend</h3>
              <h4>HTML</h4>
              <h4>CSS</h4>
              <h4>Next.JS</h4>
            </div>

            <div className="skills">
              <h3>Backend</h3>
              <h4>Vercel</h4>
              <h4>Supabase</h4>
            </div>

            <div className="skills">
              <h3>Soft Skills</h3>
              <h4>Communication</h4>
              <h4>Teamworker</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="balk">{/* spacer */}</section>
    </main>
  );
}
