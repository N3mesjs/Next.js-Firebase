"use client"

import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider, FirestoreDB } from "./fireBaseAuth.jsx"

import { doc, setDoc, getDocs, collection, query } from "firebase/firestore";

import React, { useState, useEffect } from "react"

export default function SignIn() {

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (!user) {
                const result = await signInWithPopup(auth, provider)
                const docRef = doc(FirestoreDB, "users", result.user.uid); //Doc e come il ref, serve a indicare il path del database e in questo caso richiede un id univoco da dare al documento
                await setDoc(docRef, {                                     //Si puo usare collection e firestore si occupera di assegnare un id univoco
                    email: result.user.email,
                    username: result.user.displayName,
                    photoURL: result.user.photoURL,
                });


                const q = query(collection(FirestoreDB, "users")); //Collection prede il path assoluto senza dover specificare un id specifico del documento
                                                                   //il metodo query serve a filtrare i documenti, ma dato che non ho specificato un where li prendera tutti
                const querySnapshot = await getDocs(q);            //getDocs mi restituisce un array di documenti che soddisfano la query
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data().email);
                })
            }
        })
    }, []);
}

// TODO: togliere l'authentication e quindi usare useContext() per passare i dati tra le varie componenti e rendermi indipendente dall'authentication system