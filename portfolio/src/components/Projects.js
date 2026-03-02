import React from "react";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="projects-container">

        <div className="project-card">
          <h3>Chat Application</h3>
          <p>Real-time chat app using Socket.IO with authentication and message storage.</p>
          <p><strong>Tech:</strong> React, Node.js, Express, MongoDB</p>
          <a href="https://github.com/shaiksabihasabiha26/CHAT-APPLICATION" target="_blank" rel="noreferrer">View Code</a>
        </div>

        <div className="project-card">
          <h3>Collaborative Document Editor</h3>
          <p>Real-time collaborative editor with autosave and multi-user synchronization.</p>
          <p><strong>Tech:</strong> React, Node.js, WebSockets, MongoDB</p>
          <a href="https://github.com/shaiksabihasabiha26/DOCUMENT-EDITOR" target="_blank" rel="noreferrer">View Code</a>
        </div>

        <div className="project-card">
          <h3>Chrome Productivity Extension</h3>
          <p>Tracks time spent on websites and generates weekly productivity analytics.</p>
          <p><strong>Tech:</strong> JavaScript, Chrome APIs</p>
          <a href="https://github.com/shaiksabihasabiha26/CHROME-EXTENSION-FOR-TIME-TRACKING" target="_blank" rel="noreferrer">View Code</a>
        </div>

        <div className="project-card">
          <h3>API Integration Project</h3>
          <p>Fetches and displays real-time data from public APIs.</p>
          <p><strong>Tech:</strong> HTML, CSS, JavaScript</p>
          <a href="https://github.com/shaiksabihasabiha26/API-INTEGRATION" target="_blank" rel="noreferrer">View Code</a>
        </div>

      </div>
      <div className="project-card">
  <h3>Supermarket Billing System</h3>
  <p>Developed a Python-based billing and inventory system to manage product sales, generate invoices, and calculate totals efficiently.</p>
  <p><strong>Tech:</strong> Python</p>
  <a 
    href="https://github.com/shaiksabihasabiha26/Supermarket-Bill-Generator-" 
    target="_blank" 
    rel="noreferrer"
  >
    View Code
  </a>
</div>

    </section>
  );
}

export default Projects;
