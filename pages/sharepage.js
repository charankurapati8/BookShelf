'use client';
import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import classes from './sharepage.module.css'
import MainHeaderBackground from "@/component/main-header/main-header-background";
import Mainheader from "@/component/main-header/main-header"
const Sharepage = () => {
    const router = useRouter('');
    const {title,summary} = router.query;
    const [email,setEmail] = useState('');
    const [instructions,setInstructions] = useState('');
    useEffect(() => {
        if(title&&summary){
            setEmail('');
            setInstructions('');
        }
        document.body.style.backgroundColor = '#363234';
        document.body.style.color = '#eee7ea';
        return ()=>{
            document.body.style.backgroundColor='';
            document.body.style.color = '';
        };
    },[title,summary]);
        const handleSubmit = (e) => {
        const subject = `Sharing the book: ${title}`;
        const body = `summary: ${summary} \n\n instructions: ${instructions}`;
        const mailtoLink = `mailto:${email}?subject=${(subject)}&body=${(body)}`;
        window.location.href = mailtoLink;    
};
    return(
        <>
        <header className={classes.mainheader}>
            <Mainheader/>
        </header>
        <div className={classes.body}>
              <MainHeaderBackground/>
              </div>
           <div className={classes.h1}>
           <h1>SHAREBOOKS</h1>
           </div>
            <main className={classes.main}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.row}>
            
          <p>
            <label>Title</label>
            <input type="text" value={title}  readOnly />
          </p>
            <p>
              <label>Recipient email</label>
              <input type="email"
              value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required />
            </p>
          </div>
          <p>
            <label>Short Summary</label>
            <input type="text" value={summary}  readOnly />
          </p>
          <p>
            <label>Instructions</label>
            <textarea
            type ="text"
            value={instructions}
            onChange={(e)=>setInstructions(e.target.value)}
              rows="10"
              required
            ></textarea>
          </p>
            <button className={classes.button}
            type="submit">share</button>
           </form>
        </main>
        <div/>
        </>

    )
}
export default Sharepage;