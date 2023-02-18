import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react";

export default function ProfilePage() {
    const { data: session } = useSession()
    if (session) {
        return (
            <div>
                <p><img src = {session.user.image} className = "pfp"></img></p>
            </div>
        )
    }

}
