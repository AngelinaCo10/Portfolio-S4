import "../project-styles.css";
import ImageModal from "@/components/ImageModal";


export default function Page() {
  return (
    <main>

      <header>
        <section className="headertop">

          <h1 className="header-title typer">
            Travel Agency LinAir
          </h1>

          <p className="header-description">
            Because I love traveling I decided to create my own travel agency for my individual project, called LinAir. the goal of this project was to desgin a modern, friendly and clear website where users can get inspired and easily explore destinations.
            <br />
            <br />
            Semester 2
          </p>

        </section>
      </header>
      <section className="balk"></section>
      <section className="contentProcess">
        <div className="step1">
          <div className="text">

            <h2>Project description</h2>
            <div className="description">
              <p>
                LinAir is a travel agency that focuses on comfort, inspiration, and a relaxing travel experience. The website is designed to immediately give users a holiday feeling through colors, images, and layout. Visitors can see promotions, popular destinations, and information about the airline.
              </p>
            </div>
          </div>
          <a href="/zoom.html" target="_blank" rel="noopener noreferrer">
            <ImageModal src="/images/Webdesign versie 2.png" alt="foto" />
          </a>
        </div>

        <section className="balk"></section>

        <div className="step2">
          <ImageModal src="/images/Vleugel.png" alt="foto" />

          <div className="text">
            <h2>Website Features</h2>
            <div className="description">
              <p>
                The website includes several features, such as:
                <br /><br />
                • A homepage banner with special offers and a “destination of the month”
                <br /><br />
                • A countdown timer until the official opening
                <br /><br />

                • Information about the airline and its values
                <br /><br />

                • A section with favorite destinations, including Curaçao, Almería (Spain), and Panama City
                <br /><br />

                • A live flight map using Flightradar24 to show the position of flights
                <br /><br />

                •  A clear navigation menu and footer with destinations and contact options
                <br /><br />
                I also made a airplane wing with the logo of the travel agency i made in Adobe Illustrator.
              </p>
            </div>
          </div>
        </div>
        <section className="balk"></section>

      </section>
    </main>
  )
}
