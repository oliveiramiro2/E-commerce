"use client";

import React, { useContext } from "react";
import { SiFireship } from "react-icons/si";
import clsx from "clsx";
import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";

import { IDataApi } from "@/interface";
import { arnekG } from "@/functions/fonts";
import { useShowInfo } from "./hooks/useShowInfo";
import { useRedirect } from "@/hooks";
import { UserDataContext } from "@/contexts/userDataLogin";
import { CartUserContext } from "@/contexts/cartUser";
import { notify } from "@/functions/notifications";
import { MaskCoin } from "@/functions/maskCoin";

export const Product: React.FC<{ param: IDataApi }> = ({ param }) => {
    const { show, handleShow, handleHide } = useShowInfo();
    const { logined, setRedirectOnLogin } = useContext(UserDataContext);
    const { push } = useRedirect();
    const { setCartData, cartData } = useContext(CartUserContext);

    return (
        <div
            className="product z-10 bg-pallet-black flex flex-col h-min items-center gap-y-2 p-2 pr-3 pl-3 rounded-xl border-2 border-pallet-orange shadow-lg shadow-pallet-orange"
            onMouseOver={handleShow}
            onFocus={handleShow}
            onMouseOut={handleHide}
            onBlur={handleHide}
        >
            <p
                className={`font-bold max-w-[20vw] max-md:w-[80vw] text-center first-letter:capitalize text-lg text-pallet-white ${arnekG.className}`}
            >
                {param.title}
            </p>
            <img
                src={param.images[0]}
                alt="imagem produto"
                className="w-[20vw] max-md:w-[80vw] object-cover"
            />
            <p
                className={clsx(
                    `font-medium max-w-[20vw] max-md:w-[80vw] mt-1 content-center text-center text-sm text-pallet-white first-letter:capitalize ${arnekG.className}`,
                    {
                        flex: show,
                        hidden: !show,
                    }
                )}
            >
                {param.description}
            </p>
            <div className="flex gap-x-2 mt-2">
                <SiFireship color="#f00" />
                <p
                    className={`font-bold text-sm text-pallet-white ${arnekG.className}`}
                >
                    {MaskCoin(param.price)}
                </p>
            </div>
            <div className="w-full flex justify-around mb-4 gap-x-5">
                <button
                    type="button"
                    className={clsx(
                        `bg-pallet-orange pt-3 p-2 pl-4 pr-3 w-32 flex items-center justify-center gap-x-1 rounded-md font-bolder text-center text-sm text-pallet-white first-letter:capitalize hover:bg-[#ff9748] transition-colors shadow-md shadow-pallet-orange ${arnekG.className}`,
                        {
                            flex: show,
                            hidden: !show,
                        }
                    )}
                    onClick={() => {
                        if (logined) {
                            const checkRepeat = cartData.filter(
                                (item: IDataApi) => item.id !== param.id
                            );
                            setCartData([...checkRepeat, param]);
                            notify(
                                "success",
                                "Sucesso,",
                                "Produto adicionado ao carrinho!"
                            );
                        } else {
                            push("/entrar");
                        }
                    }}
                >
                    <FaShoppingCart
                        color="#f7f8f9"
                        className="relative bottom-[3px]"
                    />{" "}
                    Carrinho
                </button>
                <button
                    type="button"
                    className={clsx(
                        `bg-pallet-orange pt-3 p-2 pl-4 pr-3 w-32 flex items-center justify-center gap-x-1 rounded-md font-bolder text-center text-sm text-pallet-white first-letter:capitalize hover:bg-[#ff9748] transition-colors shadow-md shadow-pallet-orange ${arnekG.className}`,
                        {
                            flex: show,
                            hidden: !show,
                        }
                    )}
                    onClick={() => {
                        if (!logined)
                            setRedirectOnLogin(
                                `redirecionar=comprar_produto&idProduto=${param.id}`
                            );
                        push(`comprar_produto?idProduto=${param.id}`);
                    }}
                >
                    <FaShoppingBag
                        color="#f7f8f9"
                        className="relative bottom-[3px]"
                    />{" "}
                    Comprar
                </button>
            </div>
        </div>
    );
};
