export default function Page() {
    return (
        <>

            {/* Navbar */}
            <main>
                <div className="navbar">
                    <div className="navbar-links-left">
                        <a href="home.html" className="navbar-logo">
                            <img src="/images/AC Logo.svg" alt="Logo" className="logo-img" />
                        </a>
                    </div>

                    <div className="navbar-links-center">
                        <a href="home.html"></a>
                        {/* <img src="images/Huis.svg" alt=""></a> */}
                        <a href="#greenSection">My Work</a>
                        <a href="#about">About Me</a>
                    </div>

                    <div className="navbar-links-rechts">
                        {/* <a href="https://nl.linkedin.com/" aria-label="LinkedIn">
            <img src="/images/linkedin logo.svg" alt="" />
          </a>
          <a href="mailto:537166@student.fontys.nl" aria-label="E-mail">
            <img src="/images/Email logo.svg" alt="Email" />
          </a> */}
                        <div className="contact">
                            <a href="#contact">Contact</a>
                        </div>
                    </div>
                </div>

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

                        <a href="#projects" className="header-button">
                            Get to know me more
                        </a>
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
                                    <a href="project1.html" className="cardButton">
                                        More
                                    </a>
                                </div>

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
                                    <a href="project2.html" className="cardButton">
                                        More
                                    </a>
                                </div>

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
                                    <a href="project3.html" className="cardButton">
                                        More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="balk">
                    {/* <img src="/images/Bloem foto.png" alt="" className="bloemfoto" /> */}
                </section>


                {/* SKills */}
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
            </main>
                <section className="balk">
                    {/* <img src="/images/Bloem foto.png" alt="" className="bloemfoto" /> */}
                </section>

            {/* Footer */}

            <footer>
                <div className="footerContainer">
                    <h1>Where to find me</h1>

                    <a href="https://nl.linkedin.com/">
                        <img src="/images/Linked 1.svg" alt="" className="footerImages" />
                    </a>

                    <a href="mailto:537166@student.fontys.nl">
                        <img src="/images/Email logo.svg" alt="" className="footerImages" />
                    </a>
                </div>
            </footer>
        </>
    );
}
