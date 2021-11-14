import React from "react";
import LogoGrin from "../svg/LogoGrin";
import "./Contact.css";
import EmailForm from "./EmailForm";

const Contact = () => {
  return (
    <div className="contact">
      <LogoGrin />
      <EmailForm />
    </div>
  );
};

export default Contact;
