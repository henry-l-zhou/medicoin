import React from 'react';
import Image from 'next/image';
import { useSession, signIn, signOut } from "next-auth/react";

export default function ProfilePage() {
    const { data: session } = useSession()
    if (session) {
        return (
            <div>
                <p><Image src = {session.user.image} alt="me" width="64" height="64" className="pfp"/></p>
            </div>
        )
    }

}
