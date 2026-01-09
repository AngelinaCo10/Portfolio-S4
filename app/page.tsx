import Link from "next/link";

export default function Page() {
  return (
    <main className="page">
      {/* Header */}
      <header>
        <div className="container">
          <section className="header">
            <p className="header-description">Hi, I am</p>

            <h1 className="header-title typer">
              <span>A</span><span>n</span><span>g</span><span>e</span><span>l</span><span>i</span><span>n</span><span>a</span>{" "}
              <span>C</span><span>o</span><span>f</span><span>f</span><span>i</span><span>e</span>
            </h1>

            <p className="header-description">
              Your designer that loves making and learning new things.
            </p>

            <Link href="/#greenSection" className="header-button">
              Get to know me more
            </Link>

            <div className="animationArrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="38" viewBox="0 0 24 38" fill="none">
                <path
                  d="M11.5469 38L23.0939 18L-0.000131171 18L11.5469 38ZM11.5469 0L9.54688 -8.74228e-08L9.54687 20L11.5469 20L13.5469 20L13.5469 8.74228e-08L11.5469 0Z"
                  fill="#686767ff"
                />
              </svg>
            </div>
          </section>
        </div>
      </header>

      {/* Balk full width (bloem mag full width blijven) */}
<section className="balk">
  <div className="balk--contained"></div>
</section>

        <img src="/images/Bloem foto.png" alt="" className="bloemfoto" />

      {/* About Me */}
      <section className="aboutmeSection" id="aboutmeSection">
        <div className="container">
          <div className="aboutmeContent">
            <div className="textProjects">
              <h1>About Me.</h1>
              <p>
                I am 22 years old and I am currently studying HBO-ICT Media Design.
                I have a strong interest in UI/UX design and web development.
                I enjoy creating websites and apps that are user-friendly, visually
                appealing, and easy to use.
                <br /><br />
                I would like to learn new skills and technologies and continue developing myself.
                In the future, I want to combine UI/UX design with development, so I can both
                design and build digital products.
              </p>
            </div>

            <img src="/images/Mefoto.jpeg" alt="foto" className="mefoto" />
          </div>
        </div>
      </section>

<section className="balk">
  <div className="balk--contained"></div>
</section>

      {/* Skills */}
      <section className="skillsSection">
        <div className="container">
          <div className="skillsContent">
            <div className="titleSkills">
              <h1>Skills.</h1>
            </div>

            <div className="skillsColumns">
              <div className="skills">
                <h3>Design</h3>
                <h4>Figma</h4>
                <h4>UX/UI</h4>
                <h4>Responsive Design</h4>
                <h4>Wireframing</h4>
                <h4>Photoshop</h4>
                <h4>Illustrator</h4>
                <h4>InDesign</h4>
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
        </div>
      </section>

<section className="balk">
  <div className="balk--contained"></div>
</section>

        <img src="/images/Bloem foto.png" alt="" className="bloemfoto2" />

      {/* Projects */}
      <section className="greenSection" id="greenSection">
        <div className="container">
          <div className="contents">
            <div className="textProjects">
              <h1>My Work.</h1>
              <p>Visit my projects to see what I have worked on.</p>
            </div>

            <div className="containerprojects">
              <div className="containerProjectCards">
                {/* Card 1 */}
                <div className="projectCard">
                  <img src="/images/Mario foto.svg" alt="Mario foto" className="projectImage1" />
                  <h2>Mario & Luigi’s<br />Pizzaria</h2>
                  <p>
                    I made an orderwebsite for a pizzeria to make the orderprocess
                    easier and it saves time, because they don’t have many employees.
                  </p>
                  <Link href="/project1" className="cardButton">
                    Visit project
                  </Link>
                </div>

                {/* Card 2 */}
                <div className="projectCard">
                  <img src="/images/LinAir foto.svg" alt="LinAir foto" className="projectImage1" />
                  <h2>Travel Agency LinAir</h2>
                  <p>
                    This is a personal project I did. I made my own travel agency
                    website so that people can order flights for the best destinations.
                  </p>
                  <Link href="/project2" className="cardButton">
                    Visit project
                  </Link>
                </div>

                {/* Card 3 */}
                <div className="projectCard">
                  <img src="/images/Klets foto.svg" alt="Klets foto" className="projectImage1" />
                  <h2>KLETS!</h2>
                  <p>
                    KLETS! is a Dutch learning app I made with my group for refugees
                    that live at a AZC in the Netherlands to learn the Dutch language
                    on their own.
                  </p>
                  <Link href="/project3" className="cardButton">
                    Visit project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
