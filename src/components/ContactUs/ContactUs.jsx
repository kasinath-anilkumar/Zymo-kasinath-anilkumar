import React from "react";
import classes from "./ContactUs.module.css";

function ContactUs() {
  return (
    <div className={classes.contactContainer}>
      <h1>Contact Us</h1>
      <div className={classes.contactusContent}>
        <p>
          <strong>Phone:</strong> +91 8277998715
        </p>

        <p>
          <strong>WhatsApp:</strong> +91 9987933348
        </p>

        <p>
          <strong>Email:</strong> hello@zymo.app
        </p>
      </div>
    </div>
  );
}

export default ContactUs;