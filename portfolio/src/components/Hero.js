import React from "react";

function Hero() {
  return (
    <section className="hero" id="about">

      <h1>Hello, I'm Shaik Sabiha</h1>
      <h2>Aspiring Software Engineer
& Full Stack Developer</h2>
      <p>
        I build modern, responsive and scalable web applications using
        React, Node.js and MongoDB.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="btn">View Projects</a>
        <a href="#contact" className="btn-outline">Contact Me</a>
      </div>
    </section>
  );
}

export default Hero;
