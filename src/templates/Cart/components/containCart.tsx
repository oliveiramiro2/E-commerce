import React, { useContext } from "react";
import { FaWindowClose } from "react-icons/fa";

import { IDataApi } from "@/interface";
import { arnekG, oswald } from "@/functions/fonts";
import { useCountBuyItems } from "../hooks";
import { CartUserContext } from "@/contexts/cartUser";
import { notify } from "@/functions/notifications";
import { CountManyItems } from "@/components";

export const ContainCart: React.FC<{
    data: IDataApi;
    handlePriceItems: Function;
    handleRemoveItem: Function;
    handleOpenModal: Function;
    setBuyId: Function;
    setNumberItems: Function;
    setPriceBuying: Function;
}> = ({
    data,
    handlePriceItems,
    handleRemoveItem,
    handleOpenModal,
    setBuyId,
    setNumberItems,
    setPriceBuying,
}) => {
    const { count, handleCountLess, handleCountPlus } = useCountBuyItems();
    const { cartData, setCartData } = useContext(CartUserContext);

    return (
        <div>
            <div className="relative top-8 left-7">
                <button
                    type="button"
                    onClick={() => {
                        const removeItem = cartData.filter(
                            item => item.id !== data.id
                        );
                        setCartData(removeItem);
                        handleRemoveItem(count, data.price);
                        notify(
                            "warning",
                            "Removido,",
                            "Item removido do carrinho!"
                        );
                    }}
                >
                    <FaWindowClose color="#f00" size={22} />
                </button>
            </div>
            <div className="bg-white border flex items-center justify-between border-gray-300 ml-6 mr-6 mb-2 pl-1 rounded-md">
                <div className="flex items-center m-5 ml-6">
                    <img
                        alt="produto"
                        src={data.images[0]}
                        className="w-32 h-24 rounded-lg shadow-lg shadow-black"
                    />
                    <div className="flex flex-col self-start ml-5 gap-y-1">
                        <p
                            className={`text-pallet-orange font-black text-lg ${arnekG.className}`}
                        >
                            {data.title}
                        </p>
                        <p
                            className={`text-pallet-black font-medium text-sm ${arnekG.className}`}
                        >
                            {data.description}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-around">
                    <CountManyItems
                        price={data?.price || 0}
                        count={count}
                        handleCountLess={handleCountLess}
                        handleCountMore={handleCountPlus}
                        handlePriceItems={handlePriceItems}
                    />
                    <button
                        type="button"
                        className={`self-center rounded-xl p-1 pl-8 pr-8 mt-3 mr-2 bg-pallet-purple text-pallet-white tracking-wide shadow-lg shadow-gray-400 hover:bg-[#bf3eee] hover:transition-colors ${oswald.className}`}
                        onClick={() => {
                            setBuyId(data.id);
                            setNumberItems(count);
                            setPriceBuying(data.price);
                            handleOpenModal();
                        }}
                    >
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    );
};
