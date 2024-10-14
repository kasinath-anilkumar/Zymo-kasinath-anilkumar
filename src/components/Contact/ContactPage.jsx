import React from "react";
import ContactUs from "../Contact/ContactUs";

import { useEffect } from "react";
import { Helmet } from "react-helmet";

function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <link rel="canonical" href="https://zymo.app/contact" />
      </Helmet>
      <ContactUs />;
    </div>
  );
}

export default ContactPage;
