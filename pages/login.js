import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginPage() {
    const {data: session} = useSession()

    if (session) {
      return (
        <div> 
          <div className = "signin-message">
            <p>Welcome, {session.user.name}!</p>
            <p>Here are your goals for today</p>
          </div>
          
          <div className = "logout-message">
            <p>Not {session.user.name}?</p>
            <button onClick={()=> signOut()}> Sign Out </button>
            </div>
        </div>
      )
    } else {
      return (
        <div>
          <p> You are not signed in </p>
          <button onClick={() => signIn()}> Sign in </button>
        </div>
      )
    }

}

