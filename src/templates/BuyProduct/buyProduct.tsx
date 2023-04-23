"use client";

import React, { useContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { Power1, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";
import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import Modal from "react-modal";

import { DefaultTemplate } from "../default";
import { arnekG, oswald } from "@/functions/fonts";
import { buyProduct } from "@/services/api";
import { IDataApi } from "@/interface";
import { useCount, useGetParam } from "./hooks";
import { useModal, useRedirect } from "@/hooks";
import { CountManyItems, LoadingUser } from "@/components";
import { CartUserContext } from "@/contexts/cartUser";
import { notify } from "@/functions/notifications";
import { FinishedSeller } from "@/components/FinishedSeller";

export const BuyProductTemplate: React.FC = () => {
    const { getParam, setGetParam } = useGetParam();
    const { data, isLoading } = useQuery<IDataApi | undefined>({
        queryKey: ["buyProduct", getParam],
        queryFn: () => buyProduct(getParam),
        keepPreviousData: true,
    });
    const path = useSearchParams();
    const { back } = useRedirect();
    const { count, handleCountLess, handleCountMore } = useCount();
    const { openModal, handleCloseModal, handleOpenModal } = useModal();
    const { setCartData, cartData } = useContext(CartUserContext);

    useEffect(() => {
        document.title = "RM E-commerce - Comprar produto";
        if (path.toString().split("idProduto=")[1] !== undefined) {
            if (path.toString().split("idProduto=")[1] === "") back();
            setGetParam(Number(path.toString().split("idProduto=")[1]));
        }
        handleCloseModal();
    }, []);

    useEffect(() => {
        if (!isLoading) {
            gsap.registerPlugin(ScrollTrigger);

            const sectionsImgs = gsap.utils.toArray(".imgsSnap");

            gsap.to(sectionsImgs, {
                xPercent: -100 * (sectionsImgs.length + 1.2),
                ease: Power1.easeIn,
                scrollTrigger: {
                    trigger: ".contain",
                    pin: true,
                    scrub: 1,
                },
            });
        }
    }, [isLoading]);

    if (isLoading) return <LoadingUser />;

    return (
        <DefaultTemplate>
            <section className="w-screen min-h-[72vh] bg-gray-100 flex flex-col items-center pl-6 pr-6">
                <div className="w-[45%] max-xl:w-[60%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%] flex flex-col justify-center mb-3 mt-6">
                    <h3
                        className={`font-black text-center text-3xl self-center max-lg:right-0 ${oswald.className}`}
                    >
                        Comprar {data?.title}
                    </h3>
                </div>
                <div>
                    <div id="contain" className="flex bg-white contain">
                        {data?.images !== undefined &&
                            data?.images.map((item: string) => (
                                <div
                                    key={item}
                                    className={clsx(
                                        "relative w-[100vw] flex justify-center pt-[2.5vh]",
                                        {
                                            "left-[100vw]":
                                                data?.images.length > 1,
                                        }
                                    )}
                                >
                                    <img
                                        className="h-[95vh] rounded-lg imgsSnap"
                                        src={item}
                                        alt="produto"
                                        height={window.innerHeight}
                                    />
                                </div>
                            ))}
                    </div>
                </div>
                <div className="flex gap-x-3 items-center mt-5 mb-5">
                    <CountManyItems
                        price={data?.price || 0}
                        count={count}
                        handleCountLess={handleCountLess}
                        handleCountMore={handleCountMore}
                        handlePriceItems={() => {}}
                    />
                    <button
                        type="button"
                        className={`bg-green-500 pb-2 pt-3 pl-3 pr-3 flex items-center justify-center gap-x-1 rounded-md font-bolder text-center text-sm text-pallet-white first-letter:capitalize hover:bg-green-400 transition-colors shadow-md shadow-green-500 ${arnekG.className}`}
                        onClick={handleOpenModal}
                    >
                        <FaShoppingBag
                            color="#f7f8f9"
                            className="relative bottom-[3px]"
                        />{" "}
                        Finalizar a compra
                    </button>
                    <button
                        type="button"
                        className={`bg-pallet-orange pb-2 pt-3 pl-3 pr-3 flex items-center justify-center gap-x-1 rounded-md font-bolder text-center text-sm text-pallet-white first-letter:capitalize hover:bg-[#ff9748] transition-colors shadow-md shadow-pallet-orange ${arnekG.className}`}
                        onClick={() => {
                            const checkRepeat = cartData.filter(
                                (item: IDataApi) => item.id !== data?.id
                            );
                            setCartData([...checkRepeat, data]);
                            notify(
                                "success",
                                "Sucesso,",
                                "Produto adicionado ao carrinho!"
                            );
                        }}
                    >
                        <FaShoppingCart
                            color="#f7f8f9"
                            className="relative bottom-[3px]"
                        />{" "}
                        Adicionar ao carrinho
                    </button>
                </div>
                <p
                    className={`font-bold mb-5 text-center text-sm ${arnekG.className}`}
                >
                    {data?.description}
                </p>
                <Modal
                    isOpen={openModal}
                    onRequestClose={handleCloseModal}
                    contentLabel="Finalize sua compra, entre com seu endereço!"
                >
                    <FinishedSeller
                        close={handleCloseModal}
                        allItemsCart={false}
                        cartId={undefined}
                        buyFromCart={false}
                        numberItems={0}
                        priceBuying={0}
                        setNewPriceCart={() => {}}
                        setRemovePrice={() => {}}
                    />
                </Modal>
            </section>
        </DefaultTemplate>
    );
};
