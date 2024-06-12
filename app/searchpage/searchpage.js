'use client'
import React from "react";
import { useState } from "react";
import SearchForm from "./search-form";
import SearchResults from "./search-results";
function SearchPage(){
    const [results,setResults] = useState('');
    const handleSearch = async(keyword) => {
    const res = await fetch(`/search?keyword=${keyword}`);
    const data = await res.json();
    setResults(data);
    };
    return(
        <>
        <SearchForm onSearch={handleSearch}/>
        <SearchResults results={results}/>
        </>
    )
}
export default SearchPage;
