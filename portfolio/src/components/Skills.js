import React from "react";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>

      <div className="skills-container">

        <div className="skill-card">
          <h3>Programming Languages</h3>
          <ul>
            <li>C</li>
            <li>C++</li>
            <li>Java</li>
            <li>Python (Basic)</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Web Development</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Database</h3>
          <ul>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Core Concepts</h3>
          <ul>
            <li>Data Structures & Algorithms</li>
            <li>Problem Solving</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;
