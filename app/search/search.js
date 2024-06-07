'use client'
 import { useState } from "react";
import SearchForm from "./search-form";
 function SearchPage(){
    const [results,setResults] = useState('');
    const handleSearch = async(keyword)=>{
    const res = await fetch(`/api/books?keyword=${keyword}`);
    const data = await res.json();
    setResults(data)
    };
    return(
        <div>
            <SearchForm onSearch={handleSearch}/>
        </div>
    );
 }
 export default SearchPage;