'use client';
import {useFormStatus} from 'react-dom'
export default function BookFormSubmit(){
    const {pending} = useFormStatus();
    return <button disabled={pending}>
        {pending ? 'submitting...' : 'Add Book'}
    </button>
}