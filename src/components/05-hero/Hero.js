import "./Hero.css";
import heroImg from "./hero.jpg";

const Hero = () => {
  return (
    <div className="section_hero">
      <header
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${heroImg})`,
        }}
      >
        <nav className="container">
          <div>LOGO</div>
          <div>NAVIGATION</div>
        </nav>

        <div className="header-container">
          <div className="header-container-inner">
            <h1>A healty meal delivered to your day, every single day</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
              soluta numquam quaerat perspiciatis error voluptate praesentium
              debitis facilis optio obcaecati.
            </p>
            <a href="#" className="btn">
              Start eating well
            </a>
          </div>
        </div>
      </header>
      <section>
        <div className="container">
          <h2>Lorem, ipsum dolor.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eum
            distinctio. Perferendis id error necessitatibus sed eum aliquam
            optio nihil.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
