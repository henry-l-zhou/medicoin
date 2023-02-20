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


        <div className="login_page">
          <Image src="/fake_background.png" width="1440" height="1024" className="background_login" />
          <div className="welcome_landing">
            <LoginPage />
            <div className = "login_user_fake">
          </div>
          </div>
        </div>

      </section>
    </>
  )
}
