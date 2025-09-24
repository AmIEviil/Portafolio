import "./BodyHome.css";
const BodyHome = () => {
  return (
    <>
      <section id="home">
        <div className="card_center-container ">
          <div className="card_center-content shiny">
            <h3 className="card_center-title">Desarrollador Full Stack</h3>
            <p className="card_center-label">
              Me gusta desarrollar productos robustos y escalables con una grata
              experiencia de usuario
            </p>
          </div>
        </div>
        <div className="card_image-container">
          <img src="" alt="" />
        </div>
      </section>
      <section id="about-me">
        <div className="card_about ">
          <div className="card_about-content ">
            <h1 className="">Diseño</h1>
            <p className="card_about-label">
              Me gusta siempre poder llevar a cabo diseños unicos y siempre con
              enfoque en la experiencia del usuario
            </p>
          </div>
        </div>
        <div className="card_about-me">
          <div className="card_about-content">
            <h1 className="">Gonzalo Caro</h1>
            <p className="card_about-label">Comenzando en esto mi rey</p>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="card_projects-container">
          <div className="card_projects-content">
            <h3 className="card_projects-title">Ultimos años</h3>
            <p className="card_projects-label">
              Le he puesto weno a la wea yo creo
            </p>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="card_contact-container">
          <div className="card_contact-content">
            <h3 className="card_contact-title">Enviame un mensaje </h3>
            <p>
              Cualquier duda, inquietud, proyecto, lo que sea, no dudes en
              contactarme
            </p>
            <form action="/action_page.php">
              <label>First name:</label>
              <br />
              <input type="text" id="fname" name="fname" value="John" />
              <br />
              <label>Last name:</label>
              <br />
              <input type="text" id="lname" name="lname" value="Doe" />
              <br />
              <br />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </section>
      <section id="footer">
        <div className="card_footer-container">
          <div className="card_footer-content">
            <h3 className="card_footer-title">Gonzalo Caro</h3>
            <p className="card_footer-label">Desarrollador FrontEnd</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BodyHome;
