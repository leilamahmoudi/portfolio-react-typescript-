import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import "./contact.css";

const Contact = () => {
  const form = useRef(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current !== null) {
      emailjs.sendForm(
        "service_22xdmbf",
        "template_7pwh4ow",
        form.current,
        "QeS7vzvCtYos0JkMn"
      );
      // e.target.reset();
    }
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>leila.mahmoudi9169@gmail.com</h5>
            <a
              href="mailto:leila.mahmoudi9169@gmail.com"
              target="_blank"
              className="link"
            >
              Send A Messeage
            </a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>leila.mahmoudi9169@gmail.com</h5>
            <a
              href="https://www.facebook.com/leila.mahmoudi.7739"
              target="_blank"
              className="link"
            >
              Send A Messeage
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+46729100426</h5>
            <a
              href="https://whatsapp.com/send?phone=+46729100426"
              target="_blank"
              className="link"
            >
              Send A Messeage
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            rows={7}
            name="message"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
