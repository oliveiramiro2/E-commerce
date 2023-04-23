import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import {
    FaHome,
    FaShoppingBag,
    FaShoppingCart,
    FaUserEdit,
    FaAngleDown,
} from "react-icons/fa";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Menu, MenuItem, MenuDivider } from "@szhsin/react-menu";

import { IPropsContentHeaderDesktop } from "@/interface";
import { arnekG, tiro } from "@/functions/fonts";
import { UserDataContext } from "@/contexts/userDataLogin";
import { useRedirect } from "@/hooks";
import { logout } from "../functions/logout";

export const ContentHeaderDesktop: React.FC<IPropsContentHeaderDesktop> = ({
    showMenu,
    setShowMenu,
}) => {
    const {
        logined,
        setRedirectOnLogin,
        setLogined,
        setAllUserData,
        allUserData,
    } = useContext(UserDataContext);
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
                <Menu
                    align="center"
                    arrow
                    menuButton={
                        <div className="bg-pallet-orange rounded-lg p-3 pt-1 pb-1 cursor-pointer text-pallet-white absolute right-5 max-lg:right-16 flex gap-x-1">
                            <img
                                alt="Avatar"
                                className="rounded-[100px] w-12 h-12"
                                src={allUserData.avatar}
                                onError={() => {
                                    setAllUserData({
                                        ...allUserData,
                                        avatar: "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png",
                                    });
                                }}
                            />
                            <FaAngleDown className="self-center" />
                        </div>
                    }
                >
                    <MenuItem
                        className={`flex gap-x-2 items-center text-sm ${arnekG.className}`}
                    >
                        <FaUserEdit
                            color="#555"
                            className="relative bottom-[3px]"
                        />{" "}
                        Editar perfil
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem
                        className={`flex gap-x-2 items-center text-sm ${arnekG.className}`}
                        onClick={() => logout(setLogined, setAllUserData)}
                    >
                        <BiLogOut
                            color="#555"
                            className="relative bottom-[3px]"
                        />{" "}
                        Sair
                    </MenuItem>
                </Menu>
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
