import Image from "next/image";
import React from "react";


export const Header: React.FC = () => {
    return (
        <header className="bg-pallet-white w-screen h-20 border-b border-pallet-blue flex justify-between">
            <Image src="/imgs/ecom.png" alt="logo" width={180} height={20} className="absolute top-3 left-3 " />
            <div />
            <nav className="h-full flex justify-center items-center">
                <ul className="flex gap-x-20">
                    <li>Home</li>
                    <li>Comprar</li>
                    <li>Carrinho</li>
                </ul>
            </nav>
            <button type="button">
                <span>Login</span>
            </button>
        </header>
    );
};
