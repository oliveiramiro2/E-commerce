"use client";

import React, { useLayoutEffect } from "react";
import { SlPencil } from "react-icons/sl";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { FcSearch } from "react-icons/fc";
import clsx from "clsx";
import { gsap } from "gsap";
import Modal from "react-modal";

import { IProps } from "./interface";
import { useData, useModalAddEditProduct, useModalConfirm } from "./hook";
import { tiro, arnekG } from "@/functions/fonts";
import {
    ModalConfirmDelete,
    ModalCreateEditProduct,
    Pagination,
} from "./components";

export const ManagerContain: React.FC<IProps> = ({
    dataCategory,
    dataProduct,
    numberItemsPagination = 1,
}) => {
    const {
        showModalConfirm,
        showLoading,
        idItem,
        setShowModalConfirm,
        setShowLoading,
        setIdItem,
    } = useModalConfirm();
    const {
        data,
        page,
        numPage,
        options,
        numItems,
        search,
        setSearch,
        handleItemPerPage,
        handlePagPerIndex,
        handlePagMore,
        handlePagMinus,
    } = useData(
        dataProduct,
        dataCategory,
        numberItemsPagination,
        showLoading,
        idItem
    );
    const {
        openModalProduct,
        setOpenModalProduct,
        addNew,
        setAddNew,
        dataActionProduct,
        handleSingleData,
        handleCleanData,
    } = useModalAddEditProduct();

    useLayoutEffect(() => {
        gsap.timeline({ delay: 1 })
            .from(".add", { opacity: 0, xPercent: -100, ease: "slow" })
            .from(".search", { opacity: 0, y: -100, ease: "slow" })
            .from(".select", { opacity: 0, xPercent: 100, ease: "slow" });
    }, []);

    useLayoutEffect(() => {
        if (search === "")
            gsap.from(".lineTable", {
                duration: 0.5,
                ease: "back",
                opacity: 0,
                scale: 0,
                stagger: 0.3,
            });
    }, [data]);

    return (
        <div>
            <div className="flex mt-10 justify-between flex-wrap max-md:gap-y-5 max-md:pl-3 max-md:pr-3">
                <button
                    type="button"
                    className={`add font-bold text-lg flex items-center gap-x-1 border-2 border-pallet-purple p-1 pr-2 rounded-md bg-white hover:bg-gray-100 transition-colors text-center ${tiro.className}`}
                    onClick={() => {
                        setAddNew(true);
                        setOpenModalProduct(true);
                    }}
                >
                    <FiPlus color="#32f34c" size={22} />
                    Adicionar {dataProduct.length > 1 ? "Produto" : "Categoria"}
                </button>
                <div className="search flex items-center relative right-[2vw]">
                    <input
                        type="text"
                        className={`w-40 outline-none border-l-2  border-t-2  border-b-2 border-pallet-purple p-1 pl-2 rounded-l-lg ${tiro.className}`}
                        placeholder="Procure um nome"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <FcSearch
                        size={25}
                        className="bg-white border-r-2  border-t-2  border-b-2 border-pallet-purple rounded-r-lg h-[35.1px] w-8"
                    />
                </div>
                <select
                    className={clsx(
                        `select text-center outline-none border-2 border-pallet-purple p-1 pl-1 rounded-lg ${tiro.className}`,
                        {
                            invisible: search !== "",
                        }
                    )}
                    value={numItems}
                    onChange={e => handleItemPerPage(Number(e.target.value))}
                >
                    {options.map(item => (
                        <option key={item.value} value={item.value}>
                            {item.value} Produtos
                        </option>
                    ))}
                </select>
            </div>
            <table className="rounded-md border-separate border-tools-table-outline w-[97vw] bg-white mt-5 mb-10 self-center border border-blue-200">
                <thead>
                    <tr className="h-14">
                        <th
                            className={`font-bold text-center ${tiro.className}`}
                        >
                            Nome do produto
                        </th>
                        <th
                            className={`font-bold text-center border-l border-r border-blue-200 ${tiro.className}`}
                        >
                            Editar
                        </th>
                        <th
                            className={`font-bold text-center ${tiro.className}`}
                        >
                            Excluir
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr
                            key={item.id}
                            className="lineTable h-10 rounded-sm odd:bg-slate-100 border border-blue-200 border-separate border-tools-table-outline bg-white"
                        >
                            <td
                                className={`border-t border-blue-200 pl-2 font-medium ${arnekG.className}`}
                            >
                                {item.name}
                            </td>
                            <td className="text-center border-t border-l border-r border-blue-200">
                                <button type="button">
                                    <SlPencil color="#e68a00" size={20} />
                                </button>
                            </td>
                            <td className="border-t border-blue-200 text-center">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowModalConfirm(true);
                                        setIdItem(item.id);
                                    }}
                                >
                                    <FaRegTrashAlt color="#ff6666" size={20} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {search === "" && (
                <Pagination
                    page={page}
                    numPage={numPage}
                    handlePagPerIndex={handlePagPerIndex}
                    handlePagMinus={handlePagMinus}
                    handlePagMore={handlePagMore}
                />
            )}
            <Modal
                ariaHideApp={false}
                isOpen={showModalConfirm}
                onRequestClose={() => setShowModalConfirm(false)}
                contentLabel="Tem certeza desta ação?"
                overlayClassName="modal-overlay"
                className="bg-white border border-black rounded-lg h-[250px] w-[250px] m-2"
            >
                <ModalConfirmDelete
                    handleClose={setShowModalConfirm}
                    showLoading={setShowLoading}
                    loading={showLoading}
                    product={dataProduct.length > 1}
                    id={idItem}
                />
            </Modal>
            <Modal
                ariaHideApp={false}
                isOpen={openModalProduct}
                onRequestClose={() => setOpenModalProduct(false)}
                contentLabel="Adicionar produto!"
                overlayClassName="modal-overlay-center"
                className="bg-white border border-black rounded-lg min-w-[50vw] max-lg:min-w-[70vw] max-md:min-w-[85vw]"
            >
                <ModalCreateEditProduct
                    add={addNew}
                    dataProduct={dataActionProduct}
                    handleSingle={handleSingleData}
                    cleanData={handleCleanData}
                    closeModal={setOpenModalProduct}
                />
            </Modal>
        </div>
    );
};
