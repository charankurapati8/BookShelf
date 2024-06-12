'use client';
import React from "react";
import { useEffect,useState } from "react";
import Image from "next/image";
import classes from './images-slideshow.module.css';
import javaimg from '@/assets/java.png'
import pythonimg from '@/assets/python.png'
import nextjsimg from '@/assets/nextjs.png'
import reactimg from '@/assets/react.png'

const images = [
    {image: javaimg, alt:"topics in java"},
    {image: nextjsimg, alt: "book on next"},
    {image: pythonimg,alt: "basic of python"},
    {image: reactimg,alt:"comonents of react"}
];
export default function ImageSlideShow(){
const [currentImageIndex, setCurrentImageIndex] = useState(0);
useEffect(()=>{
    const interval = setInterval(()=>{
        setCurrentImageIndex((prevIndex)=>
        prevIndex < images.length-1 ? prevIndex+1 : 0
        );
    },3000);
    return() =>clearInterval(interval);
},[]);

return(
    <div className={classes.slideshow}>
        {
            images.map((image,index)=>(
                <Image
                key={index}
                src={image.image}
                className={index === currentImageIndex ? classes.active : ''}
                alt={image.alt}
                />
            ))
        }

    </div>
)

    
}

