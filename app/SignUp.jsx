"use client"

import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider, FirestoreDB } from "./fireBaseAuth.jsx"

import { doc, setDoc, getDocs, collection, query } from "firebase/firestore";

import Image from 'next/image'
import Link from 'next/link'

import GoogleImage from "./images/google.png"
import UserImage from "./images/user.png"

import React, { useState, useEffect } from "react"

export default function SignIn() {

    // useEffect(() => {
    //     onAuthStateChanged(auth, async (user) => {
    //         if (!user) {
    //             const result = await signInWithPopup(auth, provider)
    //             const docRef = doc(FirestoreDB, "users", result.user.uid); //Doc e come il ref, serve a indicare il path del database e in questo caso richiede un id univoco da dare al documento
    //             await setDoc(docRef, {                                     //Si puo usare collection e firestore si occupera di assegnare un id univoco
    //                 email: result.user.email,
    //                 name: result.user.displayName,
    //                 username: "",
    //                 photoURL: result.user.photoURL,
    //             });


    //             const q = query(collection(FirestoreDB, "users")); //Collection prede il path assoluto senza dover specificare un id specifico del documento
    //                                                                //il metodo query serve a filtrare i documenti, ma dato che non ho specificato un where li prendera tutti
    //             const querySnapshot = await getDocs(q);            //getDocs mi restituisce un array di documenti che soddisfano la query
    //             querySnapshot.forEach((doc) => {
    //                 console.log(doc.id, " => ", doc.data().email);
    //             })
    //         }
    //     })
    // }, []);

    async function GoogleSignUp() {
        const result = await signInWithPopup(auth, provider)
        const docRef = doc(FirestoreDB, "users", result.user.uid); //Doc e come il ref, serve a indicare il path del database e in questo caso richiede un id univoco da dare al documento
        await setDoc(docRef, {                                     //Si puo usare collection e firestore si occupera di assegnare un id univoco
            email: result.user.email,
            username: result.user.displayName,
            photoURL: result.user.photoURL,
        });
    }


    return (
        <>
            <main className="flex items-center justify-center h-screen bg-[#383838]">
                <div className="p-[20px] rounded-lg bg-[#272727] text-white flex flex-col items-center justify-center w-[300px]">
                    <h1 className="text-[20px] font-bold mb-[20px]">SignIn</h1>
                    <button onClick={GoogleSignUp} className="flex items-center justify-center bg-[#ffffff] px-[20px] py-[10px] text-[#333] rounded-[10px] w-[250px] mb-4"><Image src={GoogleImage} alt='google image' className="rounded-[10px] mr-[10px]" width={20} height={20} />SignIn with Google</button>
                    <Link href="/SignUpWithEmail"><button className="flex items-center justify-center bg-[#5d17ad] px-[20px] py-[10px] text-[#fff] rounded-[10px] w-[250px]"><Image src={UserImage} alt='user image' className="rounded-[10px] mr-[10px]" width={20} height={20} />SignUp with Email</button></Link>
                </div>
            </main>
        </>
    )
}

// TODO: togliere l'authentication e quindi usare useContext() per passare i dati tra le varie componenti e rendermi indipendente dall'authentication system