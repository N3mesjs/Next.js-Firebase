"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image'

import { RealTimeDB, auth, FirestoreDB } from './fireBaseAuth';

import { ref, set, onValue, get } from "firebase/database";
import { getDocs, collection, query } from "firebase/firestore";

import { BsJustify } from "react-icons/bs";
import PopUp from "./PopUp.jsx"

export default function Page() {

    const [text, setText] = useState('');
    const [username, setUsername] = useState('');
    const [id, setId] = useState(0);
    const [messaggi, setMessaggi] = useState([]);
    const [showPopUp, setShowPopUp] = useState(false);

    const messageRef = ref(RealTimeDB, "messaggi/")
    const idRef = ref(RealTimeDB, "ID/");

    useEffect(() => {

        // Controllo se esiste ID, se non esiste lo creo
        get(idRef).then((snapshot) => {
            if (!snapshot.exists()) {
                set(idRef, 0)
            } else {
                setId(Number(snapshot.val()));
            }
        });

        // Aggiorno l'array messaggi con i valori dell'oggetto snapshot che ha il valore dei messagggi/ nel db
        onValue(messageRef, (snapshot) => {
            if (snapshot.exists()) {
                let data = snapshot.val();
                setMessaggi(Object.values(data));
            }
        });
        onValue(idRef, (snapshot) => {
            setId(Number(snapshot.val()));
        });

        const q = query(collection(FirestoreDB, "users")); 
        getDocs(q).then(querySnapShot => {
            querySnapShot.forEach((doc) => {
                if(doc.data().email == auth.currentUser.email)
                    setUsername(doc.data().username)
            })
        })   
    }, [])

    function variazioneTesto(e) {
        setText(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        // Prendo l'ID e lo assegno a id
        set(ref(RealTimeDB, `messaggi/${id}/`), {
            testo: text,
            author: auth.currentUser.email,
            authorUsername: username,
            authorPFP: auth.currentUser.photoURL
        }).then(() => {
            set(ref(RealTimeDB, "ID/"), id + 1);
            // Resetto il testo nell'input
            setText('');
        })
        // Incremento l'ID
    };

    return (
        <>
            <main className="flex flex-col h-screen">
                <nav className="flex justify-between p-[10px] bg-violet-950 text-white items-center w-full sticky top-0 h-[10%]">
                    <button className="border-2 border-white rounded-[10px] p-1"><BsJustify size={50} /></button>
                    <h2 className="text-[40px] font-bold">Chat App</h2>
                    <div className="flex items-center gap-3">
                        <Image src={auth.currentUser.photoURL} alt='Profile Pic' className="rounded-[50px]" width={50} height={50} />{auth.currentUser.displayName}
                        <button className="border-2 rounded-[20px] px-[21px] py-[7px] mr-[10px] bg-[#000] text-white border-transparent hover:text-black hover:bg-white hover:border-black" onClick={LogOut}>LogOut</button>
                    </div>
                </nav>

                <section className="flex h-[90%]">
                    <div className='w-[15%] overflow-auto flex flex-col items-center'>
                        <h1 className='text-[30px] font-bold'>LE TUE CHAT</h1>
                        <div className='flex-grow'>
                            
                        </div>
                        <div className="mb-4">
                            <button className="px-[15px] py-[7px] border-2 border-black rounded-[10px]" onClick={creaChat}>Aggiungi Chat</button>
                        </div>
                    </div>
                    <div className="flex flex-col w-[85%]">
                        <div className="text-black overflow-auto bg-[rgba(143,143,143,0.36)] flex-grow">
                            {/* Qui uso una map in modo da fare una funzione per ogni elemento dell'array messaggio, e creo una componente per ogni elemento */}
                            {messaggi.map((msg, i) => (
                                <Messaggio testo={msg.testo} author={msg.author} pfp={msg.authorPFP} username={msg.authorUsername} key={i} />
                            ))}
                        </div>
                        <footer className="text-white bg-black w-full">
                            <form>
                                <input type="text" className='bg-gray-900 p-[20px] w-[80%] focus:outline-none' placeholder='type you text here...' value={text} onChange={variazioneTesto}></input>
                                <button type="submit" className="w-[20%]" onClick={handleSubmit}>✈️</button>
                            </form>
                        </footer>
                    </div>
                </section>
                {showPopUp ? <PopUp /> : null}
            </main>
        </>
    );

    function Messaggio(props) {
        if (auth.currentUser.email == props.author) {
            return (
                <>
                    <div className='flex justify-end items-center p-3'>
                        <div className="mr-[10px] bg-[#141414] text-white p-2 rounded-lg">
                            {props.username}<br />
                            {props.testo}
                        </div>
                        <Image src={props.pfp} alt='Profile Pic' className="rounded-[50px]" width={50} height={50} />
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className='flex items-center p-3'>
                        <div className="mr-[10px] bg-[#141414] text-white p-2 rounded-lg">
                            {props.username}<br />
                            {props.testo}
                        </div>
                        <Image src={props.pfp} alt='Profile Pic' className="rounded-[50px]" width={50} height={50} />
                    </div>
                </>
            )
        }
    }

    function LogOut() {
        auth.signOut().catch((error) => {
            console.log('An error occurred:', error);
        });
    }

    function creaChat(){
        if(showPopUp){
            setShowPopUp(false)
        } else {
            setShowPopUp(true)
        }
        console.log(showPopUp)
    }
}