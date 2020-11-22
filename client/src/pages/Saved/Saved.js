import React from 'react'
import NavBar from "../../components/NavBar";
import SavedBanner from "../../components/SavedBanner"
import Library from '../../components/Library';

export default function Search() {
    return (
        <div>
            <NavBar/>
            <SavedBanner/>
            <Library />
        </div>
    )
}
