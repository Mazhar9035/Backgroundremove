import React from "react";
import styles from "./Contact.module.css";
import Swal from "sweetalert2";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d5b66f2c-79d8-46ea-b853-3bc0b9968aca");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  };

  return (
    <div className={styles.contact}>
      <form onSubmit={onSubmit}>
        <h2>Contact Us</h2>
        <div className={styles.input}>
          <label>Full Name</label>
          <input
            type="text"
            className={styles.field}
            placeholder="Enter your name"
            name="name"
            required
          />
        </div>
        <div className={styles.input}>
          <label>Email Address</label>
          <input
            type="email"
            className={styles.field}
            placeholder="Enter your email"
            name="email"
            required
          />
        </div>
        <div className={styles.input}>
          <label>Your message</label>
          <textarea
            name="message"
            className={styles.fieldmess}
            placeholder="Enter your message"
          ></textarea>
        </div>
        <button type="submit"> Send message</button>
      </form>
    </div>
  );
};

export default Contact;
