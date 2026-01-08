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
            A project where we had to improve the management of the chaotic restaurant of Mario & Luigi, where there was no usement of any technology. Orders were written down on paper and Mario shouted the orders to Luigi in the kitchen. This often caused many mistakes and confusion.
            <br />
            <br />
            Semester 1
          </p>

        </section>
      </header>
      <section className="balk"></section>
      <section className="contentProcess">
        <div className="step1">
          <div className="text">
            <h2>Problem Description</h2>
            <div className="description">
              <p>
                The main problem was that the ordering process was not efficient. Because everything was done manually, orders were sometimes lost or passed on incorrectly. This caused stress in the kitchen and unhappy customers.
                Our solution was to create a website where customers can place their orders digitally. These orders are automatically sent to Luigi in the kitchen. This makes the ordering process faster and more organized, without Mario having to shout the orders.

              </p>
            </div>
          </div>
          <img src="/images/Bestelpagina .png" alt="foto" />
        </div>


        <div className="step2">
          <img src="/images/menu.png" alt="foto" />

          <div className="text">
            <h2>Website Features</h2>
            <div className="description">
              <p>
                The website includes the following features:
                <br /><br />
                •	Ordering different pizzas
                <br />

                •	Ordering drinks
                <br />

                •	A clear menu overview
                <br />

                •	A checkout page where customers can review their order
                <br /><br />
                We also designed a separate menu card so customers can clearly see all available products and prices.

              </p>
            </div>
          </div>
        </div>
        <div className="step3">
          <div className="text">
            <h2>My Contribution to the Project</h2>
            <div className="description">
              <p>
                During this project, I mainly worked on the design of the website. My tasks included:
                <br /><br />
                •	Designing the order page, where customers can choose pizzas and drinks
                <br />
                •	Creating the checkout page, where customers can review their order before submitting it
                <br />
                •	Designing the menu
                <br /><br />
                I focused on usability, clarity, and a logical layout by testing regularly to make ordering as easy as possible for customers.

              </p>
            </div>
          </div>
          <img src="/images/Gegevens klant.png" alt="foto" />
        </div>
                <div className="step3">
          <div className="text">
            <h2>Reflection</h2>
            <div className="reflection">
              <p>
                As one of my first projects in web design, I learned a lot about creating user-friendly interfaces. I realized how important it is to think from the user's perspective and to test designs regularly. In future projects, I want to focus even more on usability and accessibility to ensure that everyone can easily use the websites I create.
              </p>
            </div>
          </div>
        </div>

      </section>
    </main>
  )
}
