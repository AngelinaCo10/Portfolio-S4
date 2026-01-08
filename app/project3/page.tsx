import "../project-styles.css";
import ImageModal from "@/components/ImageModal";


export default function Page() {
  return (
    <main>

      <header>
        <section className="headertop">

          <h1 className="header-title typer">
            KLETS!
          </h1>

          <p className="header-description">
            A Dutch learning especially made for refugees so that they can learn Dutch from their own language.
            <br />
            <br />
            Semester 3
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
                For this project we had to create a solution for one of the problems IMA Projects faces when working working with the refugees. We decided to create an app mobile app they can use to learn Dutch, because at the moment they only can get a one hour lesson in a week given by volunteers. With this app they can learn Dutch on their own pace and in their own time in their rooms.
              </p>
            </div>
          </div>
          <ImageModal src="/images/Language.png" alt="foto" />

        </div>

        <section className="balk"></section>

        <div className="step2">
          <ImageModal src="/images/Words Page.png" alt="foto" />

          <div className="text">
            <h2>App features</h2>
            <div className="description">
              <p>
                The app includes several useful features:
                <br /><br />
                • Learning Dutch starting from the user’s own language
                <br />
                • Speaking practice, so users can practice pronunciation
                <br />

                • Learning new words and sentences step by step
                <br />

                • Playing language games to make learning fun
                <br />

                • Learning at your own speed
                <br />

                A user-friendly and easy-to-use design
                <br /><br />

                The focus of the app is to support refugees in their daily life and help them communicate better in the Netherlands.
              </p>
            </div>
          </div>
        </div>
        <section className="balk"></section>
        <div className="step1">
          <div className="text">

            <h2>My Contribution to the Project</h2>
            <div className="description">
              <p>
                In this project, I worked on the concept and design of the app. I helped think about how the app should work, what features were needed, and how to make it easy and clear for users. I focused on simplicity and accessibility, so the app can be used by people with different language levels.
              </p>
            </div>
          </div>
          <ImageModal src="/images/Sentence Page.png" alt="foto" />

        </div>

        <section className="balk"></section>


      </section>
    </main>
  )
}
