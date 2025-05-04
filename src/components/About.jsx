import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Background Remover</h1>
      <p className={styles.description}>
        Our Background Remover project is a powerful tool designed to
        automatically remove backgrounds from images using AI. Whether you're
        editing product photos, creating content, or just playing around with
        images, this tool makes background removal effortless and fast.
      </p>
      <div className={styles.features}>
        <h2>Key Features:</h2>
        <ul>
          <li>AI-powered background detection</li>
          <li>Fast processing with high accuracy</li>
          <li>Supports common image formats (JPG, PNG)</li>
          <li>Download output with transparent background</li>
          <li>Easy-to-use interface</li>
        </ul>
      </div>
      <p className={styles.footerNote}>
        Built with ❤️ using React and modern web technologies.
      </p>
    </div>
  );
};

export default About;
