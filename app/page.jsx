"use client"

import React, { useState, useEffect } from "react"

import { auth } from "./fireBaseAuth.jsx";
import { onAuthStateChanged } from "firebase/auth";

import SignIn from "./SignIn.jsx";
import ChatRoom from "./ChatRoom.jsx";

export default function Page() {

    const [user, setUser] = useState();

    useEffect(() =>{
        onAuthStateChanged(auth, (userAuth) => {
            setUser(userAuth);
        });
    }, [])

    return (
        <>
            {user? <ChatRoom /> : <SignIn />}
        </>
    )
 
}