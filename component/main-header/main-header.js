'use client';
import React from "react";
import { useState } from "react";
import { FaBars } from 'react-icons/fa'
import Link from "next/link";
import logoimga from '@/assets/logoimg.png'
import classes from './main-header.module.css'
import MainHeaderBackground from "./main-header-background";
export default function Mainheader(){
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen)
    }

    return(
<>  <header className={classes.header}>
    <MainHeaderBackground/>

            <Link className={classes.logo}  href={"/"}>
                <img  src={logoimga.src} alt="library"/>
    </Link>
 <h1>List of books in the library</h1>
           <div className={classes.hamburger} onClick={toggleMenu}>
            <FaBars size={24}/>
           </div>
           {
            isMenuOpen && (
                <div className={classes.sideMenu}>
                    <button onClick={toggleMenu} className={classes.closeButton}>x</button>
                    <ul>
                        <li>
                            <Link href={"/Book"}>Browse Books</Link>
                        </li>
                        <li>
                            <Link href={"/Sharebook"}>Add Books</Link>
                        </li>
                        <li>
                            <Link href={"/favouritebooks"}>Favourite Books</Link>
                        </li>
                        <li>
                            <Link href={"/removebooks"}>Remove books</Link>
                        </li>
                    </ul>

                </div>
            )
           }
        </header>
        </>
    
    )
}
    