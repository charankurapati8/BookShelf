'use server';
import { redirect } from "next/navigation";
import { SaveBook } from "./books";

export async function ShareBook(formData) {
    const book = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        creator: formData.get('name'),
        instructions: formData.get('instructions'),
        creator_email: formData.get('email'),
        image: formData.get('image')
    };
    await SaveBook(book);
    redirect('/Book');
}
