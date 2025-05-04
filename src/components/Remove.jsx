import { useState } from "react";
import styles from "./Remove.module.css";

function Remove() {
  const [image, setImage] = useState(null);
  const [bgremove, setBgremove] = useState(null);

  const handleChangebg = () => {
    const apikey = "b7iZjXYbWV6W1Mw2hS46cjKT";
    // "oRNsn21P1E9jVjGaEaRVFCrm"
    const url = "https://api.remove.bg/v1.0/removebg";

    const formdata = new FormData();
    formdata.append("image_file", image, image.name);
    formdata.append("size", "auto");

    fetch(url, {
      method: "POST",
      headers: {
        "X-Api-key": apikey,
      },
      body: formdata,
    })
      .then((res) => res.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onloadend = () => setBgremove(reader.result);
        reader.readAsDataURL(blob);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className={styles.container}>
        <div>
          <h2 className={styles.heading}>
            Upload an image to remove the background
          </h2>
          <div>
            <div className={styles.right}>
              <div className={styles.upper}>
                <input
                  id="upload"
                  className={styles.inp}
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <label htmlFor="upload">Upload Image</label>
                <h2>or drop a file,</h2>
                <p>Paste image or url</p>
              </div>
            </div>
            <button className={styles.btn} onClick={handleChangebg}>
              Remove Background
            </button>
          </div>
          <div>
            {/* {bgremove && <img src={bgremove} alt="Remove Background" />} */}
            {bgremove && (
              <div className={styles.result}>
                <img src={bgremove} alt="Removed Background" />
                <a
                  href={bgremove}
                  download="no-background.png"
                  className={styles.downloadBtn}
                >
                  Download Image
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Remove;

// import { useState } from "react";
// import styles from "./Remove.module.css";

// function Remove() {
//   const [image, setImage] = useState(null);
//   const [bgremove, setBgremove] = useState(null);

//   const handleChangebg = () => {
//     const apikey = "oRNsn21P1E9jVjGaEaRVFCrm";
//     const url = "https://api.remove.bg/v1.0/removebg";

//     const formdata = new FormData();
//     formdata.append("image_file", image, image.name);
//     formdata.append("size", "auto");

//     fetch(url, {
//       method: "POST",
//       headers: {
//         "X-Api-key": apikey,
//       },
//       body: formdata,
//     })
//       .then((res) => res.blob())
//       .then((blob) => {
//         const reader = new FileReader();
//         reader.onloadend = () => setBgremove(reader.result);
//         reader.readAsDataURL(blob);
//       })
//       .catch((error) => console.error(error));
//   };

//   return (
//     <>
//       <div className={styles.container}>
//         <div>
//           <h2 className={styles.heading}>Remove Background Image</h2>
//           <div>
//             <div>
//               <input
//                 className={styles.inp}
//                 type="file"
//                 onChange={(e) => setImage(e.target.files[0])}
//               />
//             </div>
//             <button className={styles.btn} onClick={handleChangebg}>
//               Remove Background
//             </button>
//           </div>
//           <div>
//             {bgremove && <img src={bgremove} alt="Remove Background" />}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Remove;
