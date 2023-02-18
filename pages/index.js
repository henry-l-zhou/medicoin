import React, { useState } from 'react';
import LoginPage from './login';
import ProfilePage from './assets/profile';
export default function Home() {
  const [imagesArray, setImagesArray] = useState([]);

  const handleChange = (event) => {
    const file = event.target.files[0];
    const index = imagesArray.findIndex((image) => image.name === file.name);
    if (index === -1) {
      setImagesArray([...imagesArray, file]);
    } else {
      const newImagesArray = [...imagesArray];
      newImagesArray[index] = file;
      setImagesArray(newImagesArray);
    }
  };

  const handleDelete = (index) => {
    setImagesArray((prevImagesArray) =>
      prevImagesArray.filter((_, i) => i !== index)
    );
  };

  return (
    <>
      <section>
        <header>
          <div className="sticky">
            <div className="home">
              <div>
                <a href="#" className="name">
                  <h2>Medicoin</h2>
                </a>
              </div>
            </div>
            <ul>
              <li><a href="#">Daily</a></li>
              <li><a href="#">Checkup</a></li>
              <li><a href="#">Tokens</a></li>
              <li><a><ProfilePage></ProfilePage></a></li>
            </ul>
          </div>
        </header>
        <LoginPage></LoginPage>
        {/* <ProfilePage></ProfilePage> */}
        <div className="upload">
          <input type="file" accept="image/jpeg, image/png, image/jpg" onChange={handleChange} />
          <div>
            {imagesArray.map((image, index) => (
              <div className="image" key={index}>
                <img src={URL.createObjectURL(image)} alt="image" />
                <span onClick={() => handleDelete(index)}>&times;</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}