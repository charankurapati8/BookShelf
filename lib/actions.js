'use server';
import { redirect } from "next/navigation";
import { Save } from "./addbook";

export async function ShareBook(formData) {
    const book = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        creator: formData.get('name'),
        instructions: formData.get('instructions'),
        creator_email: formData.get('email'),
        image: formData.get('image')
    };
        await Save(book);
        redirect('/Book');
}
