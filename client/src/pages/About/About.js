import "./About.css";
import imgg from "./imgg.png";
const About = () => {
  return (
    <div className="sec1">
      <div className="inner">
        <div className="sec1-c1">
          <div className="box">
            <img src={imgg} alt="img" />
          </div>
        </div>
        <div className="sec2-c2">
          <p className="hi">
            {" "}
            <span>CodeFoxes</span>{" "}
          </p>
          <h1 className="me">
            Learn the ways <br /> of Competitive Programming. <br />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
