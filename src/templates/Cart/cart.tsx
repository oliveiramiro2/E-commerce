"use client";

import React, { useContext, useEffect } from "react";
import Modal from "react-modal";

import { DefaultTemplate } from "../default";
import { CartUserContext } from "@/contexts/cartUser";
import { arnekG, oswald } from "@/functions/fonts";
import { ContainCart } from "./components";
import { useIdBuy, usePriceItems } from "./hooks";
import { MaskCoin } from "@/functions/maskCoin";
import { FinishedSeller } from "@/components/FinishedSeller";
import { useModal } from "@/hooks";

export const CartTemplate: React.FC = () => {
    const { cartData } = useContext(CartUserContext);
    const { openModal, handleCloseModal, handleOpenModal } = useModal();
    const {
        buyId,
        setBuyId,
        buyAll,
        setBuyAll,
        priceBuying,
        setPriceBuying,
        numberItems,
        setNumberItems,
    } = useIdBuy();
    const {
        priceItems,
        handleFirstTime,
        handlePriceItems,
        handleRemoveItem,
        handleRemoveItems,
    } = usePriceItems();

    useEffect(() => {
        document.title = "RM E-commerce - Carrinho";
        if (cartData.length > 0) {
            let totalValue = 0;
            cartData.forEach(item => {
                totalValue += Number(item.price);
            });
            handleFirstTime(totalValue);
        }
        handleCloseModal();
    }, []);

    return (
        <DefaultTemplate>
            <section className="w-screen min-h-[72vh] bg-gray-100 flex flex-col items-center">
                <div className="w-[45%] max-xl:w-[60%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%] flex flex-col justify-center mb-3 mt-6">
                    <h3
                        className={`font-black text-3xl self-center max-lg:right-0 ${oswald.className}`}
                    >
                        Carrinho
                    </h3>
                    <span
                        className={`text-pallet-black self-center font-bold tracking-wide ${oswald.className}`}
                    >
                        Compre seus produtos agora!
                    </span>
                </div>
                <div className="w-full flex flex-col self-center pb-5 pt-5 border-gray-200">
                    {cartData.length > 0 ? (
                        cartData.map(item => (
                            <ContainCart
                                key={item.id}
                                data={item}
                                handlePriceItems={handlePriceItems}
                                handleRemoveItem={handleRemoveItem}
                                handleOpenModal={handleOpenModal}
                                setBuyId={setBuyId}
                                setNumberItems={setNumberItems}
                                setPriceBuying={setPriceBuying}
                            />
                        ))
                    ) : (
                        <div className="w-full h-full flex items-center justify-center mb-3 mt-6">
                            <span
                                className={`text-pallet-orange pl-6 font-black text-sm ${arnekG.className}`}
                            >
                                Você ainda não tem items no seu carrinho.
                            </span>
                        </div>
                    )}
                </div>
                {cartData.length > 0 && (
                    <div className="w-full flex flex-col pr-20 pl-5 justify-end items-end mb-10">
                        <p
                            className={`text-pallet-orange font-black text-lg ${arnekG.className}`}
                        >
                            Total: {MaskCoin(priceItems)}
                        </p>
                        <button
                            type="button"
                            className={`rounded-xl relative left-8 w-44 p-1 pl-8 pr-8 mt-3 mr-2 bg-pallet-purple text-pallet-white tracking-wide shadow-lg shadow-gray-400 hover:bg-[#bf3eee] hover:transition-colors ${oswald.className}`}
                            onClick={() => {
setBuyAll(true)
handleOpenModal()
}}
                        >
                            Comprar tudo
                        </button>
                    </div>
                )}
                <Modal
                    isOpen={openModal}
                    onRequestClose={handleCloseModal}
                    contentLabel="Finalize sua compra, entre com seu endereço!"
                >
                    <FinishedSeller
                        close={handleCloseModal}
                        allItemsCart={buyAll}
                        cartId={buyId}
                        buyFromCart
                        priceBuying={priceBuying}
                        numberItems={numberItems}
                        setNewPriceCart={handleRemoveItem}
                        setRemovePrice={handleRemoveItems}
                    />
                </Modal>
            </section>
        </DefaultTemplate>
    );
};
