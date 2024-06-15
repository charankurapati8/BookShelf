import React from "react";
import Link from "next/link";
import logoimga from '@/assets/logoimg.png'
import classes from './main-header.module.css'
import MainHeaderBackground from "./main-header-background";
export default function Mainheader(){
    return(
<>  <header className={classes.header}>
    <MainHeaderBackground/>

            <Link className={classes.logo}  href={"/"}>
                <img  src={logoimga.src} alt="library"/>
    </Link>
 <h1>List of books in the library</h1>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href={"/Book"}>Browse books</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    
    )
}
    