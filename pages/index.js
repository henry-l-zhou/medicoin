import React, { useState, useContext } from 'react';
import LoginPage from './login';
import ProfilePage from '../components/profile';
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
        <li><a><Image src="/profile_icon.webp" alt="me" width="64" height="64" className="pfp"/></a></li>
      )}
    </div>
  );
}

export default function Home() {
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
              <LoginCheck/>
            </ul>
          </div>
        </div>
        <LoginPage/>
      </section>
    </>
  )
}