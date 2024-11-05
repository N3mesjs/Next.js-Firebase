"use client"

import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider, FirestoreDB } from "./fireBaseAuth.jsx"

import { doc, setDoc, getDocs, collection, query, Firestore } from "firebase/firestore";

import Image from 'next/image'
import Link from 'next/link'

import GoogleImage from "./images/google.png"
import UserImage from "./images/user.png"

import React, { useState, useEffect } from "react"

export default function SignIn() {

    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [errEmailPass, setErrEmailPass] = useState(false);
    const [errUsername, setErrUsername] = useState(false);

    const variazioneEmail = (e) => {
        setEmail(e.target.value)
    }

    const variazioneUsername = (e) => {
        setUsername(e.target.value)
    }

    const variazionePassword = (e) => {
        setPassword(e.target.value)
    }

    async function GoogleSignUp() {
        const result = await signInWithPopup(auth, provider)
        const docRef = doc(FirestoreDB, "users", result.user.uid); //Doc e come il ref, serve a indicare il path del database e in questo caso richiede un id univoco da dare al documento
        await setDoc(docRef, {                                     //Si puo usare collection e firestore si occupera di assegnare un id univoco
            email: result.user.email,
            username: result.user.displayName,
            photoURL: result.user.photoURL,
        });
    }

    async function handleSubmit() {
        const queue = query(collection(FirestoreDB, "users"));
        const querySnapshot = await getDocs(queue);
        querySnapshot.forEach((doc) => {
            if(doc.data().email == email || doc.data().password == password){
                setErrEmailPass(true)
            }
            if(doc.data().username == username){
                setErrUsername(true)
            }
        })
    }


    return (
        <>
            <main className="flex items-center justify-center h-screen bg-[#383838]">
                <div className="p-[20px] rounded-lg bg-[#272727] text-white flex flex-col items-center justify-center w-[400px]">
                    <h1 className="text-[20px] font-bold mb-[20px]">SignIn</h1>
                    <button onClick={GoogleSignUp} className="flex items-center justify-center bg-[#ffffff] px-[20px] py-[10px] text-[#333] rounded-[10px] w-[250px] mb-4"><Image src={GoogleImage} alt='google image' className="rounded-[10px] mr-[10px]" width={20} height={20} />SignUp with Google</button>
                    <hr className="border-[1px] w-[150px] mb-4" />
                    <form className="flex flex-col justify-center text-black" onSubmit={handleSubmit}>
                        <label for="email"></label>
                        <input className="inpt" type="email" placeholder="email" value={email} onChange={variazioneEmail} id="email"/>
                        <input className="inpt" type="text" placeholder="username" value={username} onChange={variazioneUsername} id="username"/>
                        <input className="inpt" type="password" placeholder="password" value={password} onChange={variazionePassword} id="password"/>
                        <button type="submit"></button>
                    </form>
                    {errEmailPass ? <p className="text-red font-bold">Un account con queste email e password già esiste!</p> : null}
                </div>
                
            </main>
        </>
    )
}
