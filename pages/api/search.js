import { SearchBook } from "@/lib/books";
export default function handler(req,res){
    const {keyword} = req.query;
    if(!keyword){
        return res.status(400).json({error:'keyword is required'});
    }
    const results =  SearchBook(keyword);
    res.status(200).json(results);
}