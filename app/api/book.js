import { searchBooks } from "@/lib/books";
 export default function handler(req, res) {
  const { keyword } = req.query;
  if (!keyword) {
    return res.status(400).json({ error: 'Keyword is required' });
  }
const results = searchBooks(keyword);
res.status(200).json(results);
}
