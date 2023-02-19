import React, { useState, useContext } from 'react';
import LoginPage from './login';
import ProfilePage from '../components/profile';
import Image from 'next/image';
import { useSession, signIn, signOut } from "next-auth/react";
import { TokenContext } from '@/contexts/TokenContext';
import Swiper from './tester/js/swiper-bundle.min.js';

function LoginCheck() {

  const { data: session } = useSession()

  return (
    <div>
      {session ? (
        <li><a><ProfilePage></ProfilePage></a></li>
      ) : (
        <li><a><Image src="/profile_icon.webp" alt="me" width="64" height="64" className="pfp" /></a></li>
      )}
    </div>
  );
}

export default function Home() {
  const [imagesArray, setImagesArray] = useState([]);
  const tokenMode = useContext(TokenContext);

  const addTokens = (number) => {
    tokenMode.setTokenAmount(tokenMode.tokenAmount + number)
  }
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



  const swiper = new Swiper(".slide-container", {
    slidesPerView: 4,
    spaceBetween: 20,
    sliderPerGroup: 4,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });




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
              <li><a href="#" className="token_amount"> {tokenMode.tokenAmount} </a></li>
              <LoginCheck />
            </ul>
          </div>
        </div>
        <div className="page_elements">
          <div className="welcome">
            <LoginPage />
          </div>
          <div>



            <div className="container swiper">
              <div className="slide-container">
                <div className="card-wrapper swiper-wrapper">
                  <div className="card swiper-slide">
                    <div className="image-box">
                      <Image src="/images/fullDev.jpg" alt="coin" width="18" height="18" />
                    </div>
                    <div className="profile-details">
                      <Image src="/images/profile1.jpg" alt="coin" width="18" height="18" />
                      <div className="name-job">
                        <h3 className="name">David Cardlos</h3>
                        <h4 className="job">Full Stack Developer</h4>
                      </div>
                    </div>
                  </div>
                  <div className="card swiper-slide">
                    <div className="image-box">
                      <Image src="/images/photographer.jpg" alt="coin" width="18" height="18" />
                    </div>
                    <div className="profile-details">
                      <Image src="/images/profile2.jpg" alt="coin" width="18" height="18" />
                      <div className="name-job">
                        <h3 className="name">Siliana Ramis</h3>
                        <h4 className="job">Photographer</h4>
                      </div>
                    </div>
                  </div>
                  <div className="card swiper-slide">
                    <div className="image-box">
                      <Image src="/images/dataAna.jpg" alt="coin" width="18" height="18" />
                    </div>
                    <div className="profile-details">
                      <Image src="/images/profile3.jpg" alt="coin" width="18" height="18" />
                      <div className="name-job">
                        <h3 className="name">Richard Bond</h3>
                        <h4 className="job">Data Analyst</h4>
                      </div>
                    </div>
                  </div>
                  <div className="card swiper-slide">
                    <div className="image-box">
                      <Image src="/images/appDev.jpg" alt="coin" width="18" height="18" />
                    </div>
                    <div className="profile-details">
                      <Image src="/images/profile1.jpg" alt="coin" width="18" height="18" />
                      <div className="name-job">
                        <h3 className="name">Priase</h3>
                        <h4 className="job">App Developer</h4>
                      </div>
                    </div>
                  </div>
                  <div className="card swiper-slide">
                    <div className="image-box">
                      <Image src="/images/blogger.jpg" alt="coin" width="18" height="18" />
                    </div>
                    <div className="profile-details">
                      <Image src="/images/profile5.jpg" alt="coin" width="18" height="18" />
                      <div className="name-job">
                        <h3 className="name">James Laze</h3>
                        <h4 className="job">Blogger</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-button-next swiper-navBtn"></div>
              <div className="swiper-button-prev swiper-navBtn"></div>
              <div className="swiper-pagination"></div>
            </div>


          </div>
          {/* <button onClick={() => addTokens(1)}> Add 1 Token</button> */}
          {/* <div className="upload">
            <input type="file" accept="image/jpeg, image/png, image/jpg" onChange={handleChange} />
            <div>
              {imagesArray.map((image, index) => (
                <div className="image" key={index}>
                  <img src={URL.createObjectURL(image)} alt="image" />
                  <span onClick={() => handleDelete(index)}>&times;</span>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </section>
    </>
  )
}