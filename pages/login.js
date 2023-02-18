import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginPage() {
    const {data: session} = useSession()

    if (session) {
      return (
        <div> 
          <p>Welcome, {session.user.email} </p>
          <button onClick={()=> signOut()}> Sign Out </button>
        </div>
      )
    } else {
      return (
        <div>
          <p> You are not signed on </p>
          <button onClick={() => signIn()}> Sign in </button>
        </div>
      )
    }

}

