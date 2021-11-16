import React, { useState } from "react";
import emailjs from "emailjs-com";
import { PulseLoader } from "react-spinners";

// TODO: DRY Up This Form
const EmailForm = () => {
  const defaultState = {
    emailAddress: "",
    message: "",
    sending: false,
    btn: "Send Message",
  };

  const [email, setEmail] = useState(defaultState);
  // Handle empty requests and also find email checker
  const [errors, setErrors] = useState("");

  const sendFeedback = (templateId, variables) => {
    if (process.env.REACT_APP_USER_ID) {
      console.log("something");
    } else {
      console.log("nothing");
    }
    setEmail({ ...email, sending: true, btn: "Sending" });
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        templateId,
        variables,
        process.env.REACT_APP_USER_ID
      )
      .then((res) => {
        setEmail({
          ...email,
          btn: ["Email successfully sent! ", <span>&#9989;</span>],
        });
        setTimeout(() => setEmail(() => defaultState), 3000);
      })
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // uses regex to check if a string is an email
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const notEmail = () => !re.test(String(email.emailAddress).toLowerCase());

    // TODO: Change the wording for error messaging
    if (email.emailAddress === "" && email.message === "")
      return setErrors("Please Fill out required fields");
    if (email.emailAddress === "" || notEmail())
      return setErrors("Please provide a proper email");
    if (email.message === "")
      return setErrors("Please add a message to your email");
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    setErrors("");
    sendFeedback(templateId, {
      message_html: email.message,
      reply_to: email.emailAddress,
    });
  };
  const handleChange = (e) => {
    const input = e.target.value;
    const key = e.target.name;
    setEmail({ ...email, [key]: input });
  };

  return (
    <div className="contact__header">
      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__errors">{errors}</div>

        <label className="label-email" htmlFor="email">
          Your Email <span style={{ color: "#ff8484" }}>*</span>
        </label>
        <input
          type="email"
          name="emailAddress"
          id="email"
          onChange={handleChange}
          value={email.emailAddress}
          placeholder="your.email@example.com"
        />

        <label className="label-message" htmlFor="message">
          Message <span style={{ color: "#ff8484" }}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          onChange={handleChange}
          value={email.message}
          placeholder="Type your message here..."
        />

        {email.sending ? (
          <button className="btn">
            {email.btn} <br />
            <PulseLoader size="5" />
          </button>
        ) : (
          <button className="btn">{email.btn}</button>
        )}
      </form>
    </div>
  );
};

export default EmailForm;
