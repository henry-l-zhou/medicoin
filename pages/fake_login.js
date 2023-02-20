import React, { useState, useContext } from 'react';
import LoginPage from './login';
import ProfilePage from '../components/profile';
import CalendarApp from '../components/calendar';
import SwiperPage from '../components/swiper';
import Image from 'next/image';
import { useSession, signIn, signOut } from "next-auth/react";
import { TokenContext } from '@/contexts/TokenContext';



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
              <LoginCheck />
            </ul>
          </div>
        </div>
        
        <div className="login_page">
          <Image src="/background.jpg" width="1440" height="1024" className="background_login"/>
          <div className="login_text">
            <p>Building healthy habits</p>
            <p>one day at a time. </p>
            <div className="LearnMore"><p>Learn More</p></div>
          </div>
          <div className = "login_user">
            <Image src="/logo.png" alt="coin" width="70" height="70" className="login_icon" />
            <p>Login</p>
            <p>Username</p>
            <p>Password</p>
            <p>Forgot Username?</p>
            <p>Forgot Password?</p>
            <p>Remember Me</p>
            <div className="login_buttion_index"><p>Log In</p></div>
          </div>
        </div>

      </section>
    </>
  )
}
