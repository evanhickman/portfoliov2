import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <form
        className="Form"
        action="https://formspree.io/travisevanhickman@gmail.com"
        method="POST"
      >
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Name" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" placeholder="Email" />
        </div>

        <div>
          <label htmlFor="textarea">Message</label>
          <textarea
            cols="40"
            rows="8"
            name="textarea"
            id="textarea"
            placeholder="Message"
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
