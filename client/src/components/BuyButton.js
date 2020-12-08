import React from 'react';
import Buy from "../assets/icons/dollar.svg";

export default function BuyButton({ className, onClick }) {
    return (
        <div className={className} onClick={onClick}>
            <img src={Buy} alt="buy button" height={25} />
        </div>
    )
}
