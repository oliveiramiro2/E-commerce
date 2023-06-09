import React, { useContext } from "react";
import Link from "next/link";
import { FaHome, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { BiCartAdd, BiLogIn } from "react-icons/bi";
import { MdCategory } from "react-icons/md";
import clsx from "clsx";

import { tiro } from "@/functions/fonts";
import { UserDataContext } from "@/contexts/userDataLogin";
import { useRedirect } from "@/hooks";

export const ContentHeaderMobile: React.FC = () => {
    const { logined, setRedirectOnLogin, allUserData } =
        useContext(UserDataContext);
    const { push } = useRedirect();

    return (
        <div className="bg-black pt-2 pb-2 hidden max-lg:block">
            <nav>
                <ul className="flex flex-col gap-y-1 items-center">
                    <li className="border-b w-full border-gray-800 pt-2 pb-5 pl-5">
                        <Link
                            className={`text-pallet-white w-[74px] flex items-center gap-x-2 font-medium text-md hover:border-b hover:transition-colors hover:drop-shadow-xl border-pallet-blue ${tiro.className}`}
                            href="/"
                        >
                            <FaHome
                                size={18}
                                className="relative bottom-[3px]"
                            />{" "}
                            Home
                        </Link>
                    </li>
                    {allUserData.role === "customer" ? (
                        <>
                            <li className="border-b w-full border-gray-800 pt-3 pb-5 pl-5">
                                <button
                                    type="button"
                                    className={`text-pallet-white w-24 flex items-center gap-x-2 font-medium text-md hover:border-b hover:transition-colors hover:drop-shadow-xl border-pallet-blue ${tiro.className}`}
                                    onClick={() => {
                                        if (!logined)
                                            setRedirectOnLogin(
                                                "redirecionar=produtos"
                                            );
                                        push("/produtos");
                                    }}
                                >
                                    <FaShoppingBag className="relative bottom-[3px]" />{" "}
                                    Comprar
                                </button>
                            </li>
                            <li
                                className={clsx(
                                    "w-full pt-3 pb-5 pl-5",
                                    {
                                        "border-b": !logined,
                                    }
                                )}
                            >
                                <button
                                    type="button"
                                    className={`text-pallet-white flex items-center w-24 gap-x-2 font-medium text-md hover:border-b hover:transition-colors hover:drop-shadow-xl border-pallet-blue ${tiro.className}`}
                                    onClick={() => {
                                        if (!logined)
                                            setRedirectOnLogin(
                                                "redirecionar=carrinho"
                                            );
                                        push("/carrinho");
                                    }}
                                >
                                    <FaShoppingCart className="relative bottom-[3px]" />{" "}
                                    Carrinho
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                        <li className="border-b w-full border-gray-800 pt-3 pb-5 pl-5">
                            <button
                                type="button"
                                className={`text-pallet-white w-52 flex items-center gap-x-2 font-medium text-md hover:border-b hover:transition-colors hover:drop-shadow-xl border-pallet-blue ${tiro.className}`}
                                onClick={() => {
                                    if (
                                        !logined ||
                                        allUserData.role === "customer"
                                    )
                                        push("/");
                                    push("/gerenciar_produtos");
                                }}
                            >
                                <BiCartAdd
                                    size={20}
                                    className="relative bottom-[3px]"
                                />{" "}
                                Gerenciar produtos
                            </button>
                        </li>
                        <li className="w-full pt-3 pb-5 pl-5">
                            <button
                                type="button"
                                className={`text-pallet-white w-52 flex items-center gap-x-2 font-medium text-md hover:border-b hover:transition-colors hover:drop-shadow-xl border-pallet-blue ${tiro.className}`}
                                onClick={() => {
                                    if (
                                        !logined ||
                                        allUserData.role === "customer"
                                    )
                                        push("/");
                                    push("/gerenciar_categorias");
                                }}
                            >
                                <MdCategory
                                    size={20}
                                    className="relative bottom-[3px]"
                                />{" "}
                                Gerenciar categorias
                            </button>
                        </li>
                        </>
                    )}
                    {!logined && (
                        <button
                            className="bg-pallet-orange hover:bg-[#ff9748] transition-colors shadow shadow-pallet-white h-5 p-20 mt-2 mb-2 pt-4 pb-4 rounded-lg flex justify-center items-center"
                            type="button"
                        >
                            <Link
                                href="/entrar"
                                className="text-pallet-white flex gap-x-1 font-bold tracking-wider"
                            >
                                <BiLogIn
                                    className="relative top-1"
                                    size={18}
                                    color="#f7f8f9"
                                />
                                Login
                            </Link>
                        </button>
                    )}
                </ul>
            </nav>
        </div>
    );
};
