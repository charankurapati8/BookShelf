import { SearchBook } from "@/lib/books";
 export default async function Handler(req,res){
    const {keyword} = req.query;
    if(!keyword){
        return res.status(400).json({error:'keyword is requried'});
    }
    const result = SearchBook(keyword);
    res.status(200).json(results);
    
 }