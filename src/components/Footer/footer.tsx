import React, { useContext } from "react";
import Link from "next/link";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

import { tiro } from "@/functions/fonts";
import { UserDataContext } from "@/contexts/userDataLogin";
import { useRedirect } from "@/hooks";

export const Footer: React.FC = () => {
    const { logined, setRedirectOnLogin } = useContext(UserDataContext);
    const { push } = useRedirect();

    return (
        <footer className="w-screen min-h-[15vh] bg-pallet-purple flex relative bottom-0 justify-between items-center">
            <nav className="h-full">
                <ul className="flex h-full gap-x-8 items-center pl-10 max-md:flex-col max-md:gap-y-5 max-md:pt-3 max-md:pb-3">
                    <li>
                        <Link
                            href="/"
                            className={`text-pallet-white font-medium hover:border-b hover:transition-colors hover:drop-shadow-xl border-pallet-blue ${tiro.className}`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <button
                            type="button"
                            className={`text-pallet-white font-medium hover:border-b hover:transition-colors hover:drop-shadow-xl border-pallet-blue ${tiro.className}`}
                            onClick={() => {
                                if (!logined)
                                    setRedirectOnLogin("redirecionar=produtos");
                                push("/produtos");
                            }}
                        >
                            Comprar
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            className={`text-pallet-white font-medium hover:border-b hover:transition-colors hover:drop-shadow-xl border-pallet-blue ${tiro.className}`}
                            onClick={() => {
                                if (!logined)
                                    setRedirectOnLogin("redirecionar=carrinho");
                                push("/carrinho");
                            }}
                        >
                            Carrinho
                        </button>
                    </li>
                </ul>
            </nav>
            <nav className="h-full">
                <ul className="flex h-full gap-x-8 items-center">
                    <li className="bg-[#cf5df8] rounded-[10px]">
                        <Link href="/">
                            <AiFillInstagram
                                color="#fff"
                                size={25}
                                className="shadow-md shadow-[#cf5df8] rounded-[10px]"
                            />
                        </Link>
                    </li>
                    <li className="bg-[#cf5df8] rounded-[10px]">
                        <Link href="/">
                            <AiFillFacebook
                                color="#fff"
                                size={25}
                                className="shadow-md shadow-[#cf5df8] rounded-[10px]"
                            />
                        </Link>
                    </li>
                </ul>
            </nav>
            <nav className="h-full max-md:w-1/4">
                <ul className="flex h-full gap-x-8 items-center pr-14 max-md:flex-col max-md:gap-y-5 max-md:pt-3 max-md:pb-3">
                    <li>
                        <Link
                            href="/"
                            className={`text-pallet-white font-medium text-sm hover:border-b hover:transition-colors border-pallet-blue ${tiro.className}`}
                        >
                            Política de privacidade
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/"
                            className={`text-pallet-white font-medium text-sm hover:border-b hover:transition-colors border-pallet-blue ${tiro.className}`}
                        >
                            Termos de serviço
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};
