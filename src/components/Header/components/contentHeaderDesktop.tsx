import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FaHome, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { IPropsContentHeaderDesktop } from "@/interface";
import { tiro } from "@/functions/fonts";
import { UserDataContext } from "@/contexts/userDataLogin";
import { useRedirect } from "@/hooks";
import { logout } from "../functions/logout";

export const ContentHeaderDesktop: React.FC<IPropsContentHeaderDesktop> = ({
    showMenu,
    setShowMenu,
}) => {
    const { logined, setRedirectOnLogin, setLogined, setAllUserData } =
        useContext(UserDataContext);
    const { push } = useRedirect();

    return (
        <div className="w-screen h-20 bg-pallet-white flex justify-between items-center">
            <Link href="/" className="absolute left-3">
                <Image
                    src="/imgs/ecom.png"
                    alt="logo"
                    width={180}
                    height={20}
                    style={{ width: "auto", height: "auto" }}
                />
            </Link>
            <div />
            <nav className="h-full flex justify-center items-center max-lg:hidden">
                <ul className="flex gap-x-20 max-lg:gap-x-10">
                    <li
                        className={`text-pallet-blue font-medium text-lg hover:border-b hover:transition-colors hover:drop-shadow-xl border-pallet-blue ${tiro.className}`}
                    >
                        <Link className="flex gap-x-1" href="/">
                            <FaHome className="relative top-1" /> Home
                        </Link>
                    </li>
                    <li
                        className={`text-pallet-blue font-medium text-lg hover:border-b hover:transition-colors hover:drop-shadow-xl border-pallet-blue ${tiro.className}`}
                    >
                        <button
                            type="button"
                            className="flex gap-x-1"
                            onClick={() => {
                                if (!logined)
                                    setRedirectOnLogin("redirecionar=produtos");
                                push("/produtos");
                            }}
                        >
                            <FaShoppingBag className="relative top-1" /> Comprar
                        </button>
                    </li>
                    <li
                        className={`text-pallet-blue font-medium text-lg hover:border-b hover:transition-colors hover:drop-shadow-xl border-pallet-blue ${tiro.className}`}
                    >
                        <button
                            type="button"
                            className="flex gap-x-1"
                            onClick={() => {
                                if (!logined)
                                    setRedirectOnLogin("redirecionar=carrinho");
                                push("/carrinho");
                            }}
                        >
                            <FaShoppingCart className="relative top-1" />{" "}
                            Carrinho
                        </button>
                    </li>
                </ul>
            </nav>
            <div />
            {!logined ? (
                <button
                    type="button"
                    className="bg-pallet-orange hover:bg-[#ff9748] transition-colors shadow-md shadow-pallet-orange absolute right-5 h-5 p-8 pt-4 pb-4 rounded-md flex justify-center items-center max-lg:hidden"
                >
                    <Link
                        href="/entrar"
                        className="text-pallet-white font-bold tracking-wider flex gap-x-1"
                    >
                        <BiLogIn
                            className="relative top-1"
                            size={18}
                            color="#f7f8f9"
                        />
                        Login
                    </Link>
                </button>
            ) : (
                <button
                    className="bg-pallet-orange hover:bg-[#ff9748] transition-colors shadow-md shadow-pallet-orange absolute right-5 h-5 p-8 pt-4 pb-4 rounded-md text-pallet-white font-bold tracking-wider flex gap-x-1 justify-center items-center max-lg:hidden"
                    type="button"
                    onClick={() => logout(setLogined, setAllUserData)}
                >
                    <BiLogOut size={18} color="#f7f8f9" />
                    Sair
                </button>
            )}
            {showMenu ? (
                <AiOutlineClose
                    className="text-rose-600 cursor-pointer mr-6 hidden max-lg:block"
                    size={25}
                    onClick={() => setShowMenu()}
                />
            ) : (
                <AiOutlineMenu
                    className="text-pallet-orange cursor-pointer mr-6 hidden max-lg:block"
                    size={25}
                    onClick={() => setShowMenu()}
                />
            )}
        </div>
    );
};
