'use client';
import { FaCartPlus, FaHourglassEnd } from 'react-icons/fa';
import {useFormStatus} from 'react-dom'
export default function BookFormSubmit(){
    const {pending} = useFormStatus();
    return <button disabled={pending}>
        {pending ? <FaHourglassEnd/> : <FaCartPlus/>}
    </button>
}