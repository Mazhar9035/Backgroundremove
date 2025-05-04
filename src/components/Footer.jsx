import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaYoutube,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";
import { useState } from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const [language, setLanguage] = useState("English");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "English" ? "Deutsch" : "English"));
  };

  return (
    <footer className={styles.footer}>
      {/* Language Selector */}
      <div className={styles.first}>
        <button className={styles.btn} onClick={toggleLanguage}>
          <FaGlobe />
          {language}
        </button>
        {/* Copyright */}
        <div className={styles.brand}>
          © remove.bg, a Canva Austria GmbH brand
        </div>
      </div>

      <div className={styles.sec}>
        {/* Social Media Icons */}

        <div className={styles.icon}>
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.a}
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.a}
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.a}
          >
            <FaTwitter />
          </a>
          <a
            href="https://tiktok.com/@yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.a}
          >
            <FaTiktok />
          </a>
          <a
            href="https://youtube.com/@yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.a}
          >
            <FaYoutube />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.a}
          >
            <FaLinkedin />
          </a>
        </div>
        {/* Links */}
        <div className={styles.link}>
          <a href="#" className={styles.A}>
            Terms of Service
          </a>
          <a href="#" className={styles.A}>
            General Terms and Conditions
          </a>
          <a href="#" className={styles.A}>
            Privacy Policy
          </a>
          <a href="#" className={styles.A}>
            Cookie Policy
          </a>
          <a href="#" className={styles.A}>
            Imprint
          </a>
        </div>
      </div>
    </footer>
  );
}
