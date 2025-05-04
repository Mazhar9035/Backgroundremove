import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import { useState } from "react";
import Footer from "./Footer";
export default function Home() {
  const navigate = useNavigate();
  const handleRemovClick = () => {
    navigate("/remove");
  };

  const [bgImage, setBgImage] = useState("remove-bg.jpg");

  const handleImageChange = (category) => {
    const imageMap = {
      People: "remove-bg.jpg",
      Products: "product.jpeg",
      Animals: "animal.jpeg",
      Cars: "car.jpeg",
      Graphics: "graphic.jpeg",
    };

    setBgImage(imageMap[category]);
  };

  return (
    // section1
    <div className={styles.container}>
      <div className={styles.section1}>
        <div className={styles.left}>
          {/* <img src="" alt="" /> */}
          {bgImage && <img src={bgImage} alt="Preview" />}

          <h1 className={styles.h1}>
            Remove Image
            <span className={styles.h1}> Background</span>
          </h1>
          <p className={styles.p}>
            100% automatically and
            <span className={styles.span}> free</span>
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.upper}>
            <input type="file" id="upload" />
            <label htmlFor="upload" onClick={handleRemovClick}>
              Upload Image
            </label>
            <h2>or drop a file,</h2>
            <p>Paste image or url</p>
          </div>
        </div>
      </div>

      {/* /* section2  */}
      <div className={styles.section2}>
        <div>
          <h1>Stunnig quality</h1>
          <div className={styles.buttons}>
            {["People", "Products", "Animals", "Cars", "Graphics"].map(
              (cat) => (
                <button key={cat} onClick={() => handleImageChange(cat)}>
                  {cat}
                </button>
              )
            )}
            {/* <button>People</button>
            <button>Products</button>
            <button>Animals</button>
            <button>Cars</button>
            <button>Graphics</button> */}
          </div>
          <div
            className={styles.images}
            style={{ backgroundImage: `url(${bgImage})` }}
          ></div>
        </div>
      </div>

      {/* section3 */}
      <div>
        <div className={styles.section3}>
          <div className={styles.content}>
            <h1>
              Remove backgrounds 100% automatically in 5 seconds with one click
            </h1>
            <p>
              Thanks to remove.bg's clever AI, you can slash editing time - and
              have more fun!
            </p>
            <p>
              No matter if you want to make a background transparent (PNG), add
              a white background to a photo, extract or isolate the subject, or
              get the cutout of a photo - you can do all this and more with
              remove.bg, the AI background remover for professionals.
            </p>
          </div>
          <div className={styles.pic}></div>
        </div>
      </div>

      {/* section4 */}

      <div className={styles.section4}>
        <div>
          <h1>They love us. you will too.</h1>
        </div>
        <div className={styles.reviews}>
          <div className={styles.review}>
            <div className={styles.icon1}></div>
            <h3>
              "We are impressed by the AL and think it's the best choice on the
              market."
            </h3>
            <div className={styles.img1}></div>
            <p>Emil Barso Rheinlaender</p>
            <p>Content & Marketing Coordinator</p>
          </div>

          <div className={styles.review}>
            <div className={styles.icon2}></div>

            <h3>
              “remove.bg is leaps and bounds ahead of the competition. A
              thousand times better. It simplified the whole process.”
            </h3>
            <div className={styles.img2}></div>
            <p>Marc Cohen</p>
            <p>CEO</p>
          </div>

          <div className={styles.review}>
            <div className={styles.icon3}></div>

            <h3>
              “We were impressed by its ability to account for pesky, feathery
              hair without making an image look jagged and amateurish.”
            </h3>
            <div className={styles.img3}></div>
            <p>Taylor Hatmaker</p>
            <p>Senior Technology Editor</p>
          </div>
        </div>
      </div>

      <hr />
      {/* footer */}
      <div className={styles.footer}>
        <div className={styles.topfooter}>
          <ul>
            <h3>Learn more</h3>
            <li>
              <a href="">Magic Brush</a>
            </li>
            <li>
              <a href="">Individuals</a>
            </li>
            <li>
              <a href="">Photographers</a>
            </li>
            <li>
              <a href="">Marketing</a>
            </li>
            <li>
              <a href="">Developers</a>
            </li>
            <li>
              <a href="">Ecommerce</a>
            </li>
            <li>
              <a href="">Media</a>
            </li>
            <li>
              <a href="">Car Dealerships</a>
            </li>
            <li>
              <a href="">Enterprise</a>
            </li>
            <li>
              <a href="">Success Stories</a>
            </li>
          </ul>
          <ul>
            <h3>Tools & API</h3>
            <li>
              <a href="">API Documentation</a>
            </li>
            <li>
              <a href="">Integrations, tools & apps</a>
            </li>
            <li>
              <a href="">Photoshop Extension</a>
            </li>
            <li>
              <a href="">Windows/ Mac/ Linux</a>
            </li>
            <li>
              <a href="">Android App</a>
            </li>
            <li>
              <a href="">Design Templates</a>
            </li>
          </ul>
          <ul>
            <h3>Support</h3>
            <li>
              <a href="">Help & FAQs</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
            <li>
              <a href="">Refunds</a>
            </li>
            <li>
              <a href="">Platform Status</a>
            </li>
          </ul>
          <ul>
            <h3>Company</h3>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Affiliate Program</a>
            </li>
            <li>
              <a href="">Create automatic designs</a>
            </li>
            <li>
              <a href="">Video Background Removal</a>
            </li>
            <li>
              <a href="">Careers </a>
            </li>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Press & Partnerships</a>
            </li>
          </ul>
        </div>
        <div className={styles.bottomfooter}>
          <div className={styles.leftfooter}></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
