import React from "react";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <div className="contact-container">
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <p><strong>Email:</strong> shaiksabihasabiha26@gmail.com</p>
          <p><strong>Phone:</strong> +91 6304572427</p>
          <p><strong>Location:</strong> Kakinada, Andhra Pradesh</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
