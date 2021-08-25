import React from "react";

function About() {
  return (
    <div className="container mt-4">
      <div className="jumbotron">
        <h1 className="display-4">M.Asim Maqsood</h1>

        <h3>Web Developer</h3>
        <p>Work links</p>
        <p className="lead">
          <a href="http://">Youtube</a>
          <br />
          <a href="http://">Instagram</a>
          <br />
          <a href="http://">FaceBook</a>
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>

        <p>User ID : 123456789</p>
        <p>Name : M.Asim Maqsood</p>
        <p>email : asimmaqsood57@gmail.com</p>
        <p>phone : 1234567889</p>
        <p>Profession : Web developer</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
