import React from 'react';
import Save from "../assets/icons/wishlist.svg";
import NotSaved from "../assets/icons/notSaved.svg";

export default function SavedButton({ className, onClick, split }) {
    return (
        <div className={className} onClick={onClick}>
            {split ? <img src={Save} alt="save bookmark" height={25} /> : <img src={NotSaved} alt="save bookmark" height={25} />}
        </div>
    )
}
