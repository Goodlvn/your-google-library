import React from 'react'
import NavBar from "../../components/NavBar";
import Banner from "../../components/Banner"
import SearchResults from "../../components/SearchResults";

export default function Search() {
    return (
        <div>
            <NavBar />
            <Banner />
            <SearchResults />
        </div>
    )
}
