import React, { useState } from 'react';
import LoginPage from './login';
import ProfilePage from './assets/profile';
import Image from 'next/image';
import { useSession, signIn, signOut } from "next-auth/react";

function logincheck() {

  const { data: session } = useSession()

  return (
    <div>
      {session ? (
        <li><a><ProfilePage></ProfilePage></a></li>
      ) : (
        <li><a><Image src="/profile_icon.webp" alt="me" width="64" height="64" className="pfp"/></a></li>
      )}
    </div>
  );
}

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
        <div className="sticky">
          <div className="home">
            <a href="#" className="name">
              <h2>Medi<span className="yellow_text">Coin</span></h2>
            </a>
          </div>
          <div className="pfp-token">
            <ul>
              <li><a><Image src="/logo.png" alt="coin" width="18" height="18" className="icon" /></a></li>
              <li><a href="#" className = "token_amount">143</a></li>
              {logincheck()}
              {/* <li><a><Image src="/profile_icon.webp" alt="me" width="64" height="64" className="pfp"/></a></li> */}
              {/* <li><a><ProfilePage></ProfilePage></a></li> */}
            </ul>
          </div>
        </div>
        <LoginPage></LoginPage>
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