import "../project-styles.css";


export default function Page() {
  return (
    <main>

      <header>
        <section className="headertop">

          <h1 className="header-title typer">
            Mario & Luigi's Pizzaria
          </h1>

          <p className="header-description">
            A project where we had to improve the management of the chaotic restaurant of Mario & Luigi, where there was no usement of any technology .
            <br />
            <br />
            Semester 1
          </p>

        </section>
      </header>
      <section className="balk"></section>
      <section className="contentProcess">
        <h1>Project 1 Page</h1>
        <div className="step1">
          <div className="text">
            
            <h2>Step 1</h2>
            <div className="description">
              <p>This is the description of project 1. Here you can explain what the project is about, the technologies used, and any other relevant information.</p>
            </div>
          </div>
          <img src="/images/Webdesign versie 2.png" alt="foto" />
        </div>


        <div className="step2">
          <img src="/images/menu.png" alt="foto" />

          <div className="text">
            <h2>Step 2</h2>
            <div className="description">
              <p>This is the description of project 1. Here you can explain what the project is about, the technologies used, and any other relevant information.</p>
            </div>
          </div>
        </div>
        <div className="step3">
          <div className="text">
            <h2>Step 3</h2>
            <div className="description">
              <p>This is the description of project 1. Here you can explain what the project is about, the technologies used, and any other relevant information.</p>
            </div>
          </div>
          <img src="/images/Gegevens klant.png" alt="foto" />
        </div>
      </section>
    </main>
  )
}
