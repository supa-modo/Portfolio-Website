import React from "react";
import "./intro.css";
import bg from "../../assets/image2.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">
          Hello, <br /> Welcome to my portfolio
        </span>
        <span className="introText">
          I'm <span className="introName"> Eddy Odhiambo</span> <br /> A
          Software Developer
        </span>
        <p className="introPara">
          I am a skilled developer with experience in creating visually
          appealing and user-friendly softwares and applications.
          <br /> I combine creativity and technical skills to bring ideas to
          life. Explore my portfolio to witness the synergy of my skills in
          action.
          <br />
          Whether you're seeking a mobile app, a web solution, or a combination
          of both, I am excited about the <br /> opportunity to bring your
          vision to life.
        </p>
        <Link>
          <button
            className="btn"
            onClick={() => {
              document
                .getElementById("contacts")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <img src={btnImg} alt="Hire Me" className="btnImg" /> Hire me
          </button>
        </Link>
        <span className="descrParaLast">
          Let's build something extraordinary together!
        </span>
        <img src={bg} alt="Profile" className="bg" />
      </div>
      
    </section>
  );
};

export default Intro;
