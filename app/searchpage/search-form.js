import { useState } from "react";
import React from "react";
 function SearchForm({onSearch}){
    const [keyword,setKeyword] = useState('');
    const submit = (e) => {
        if(keyword.trim()){
            onSearch(keyword);
        }
    };
    return(
        <>
        <form onSubmit={submit}>
            <input
            type="text"
            value={keyword}
            onChange={(e)=> setKeyword(e.target.value)}
            placeholder="search books....."
            />
<button type="submit">Search</button>
        </form>
        </>
    )
}
export default SearchForm;
 
