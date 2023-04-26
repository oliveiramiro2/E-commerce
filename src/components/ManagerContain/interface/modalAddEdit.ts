export interface IDataProduct {
    title: string;
    description: string;
    price: string;
    category: number;
    trySendErro: boolean;
}

export interface IPropsAddEditProduct {
    add: boolean;
    data: IDataProduct;
    handleSingle: Function;
    cleanData: Function;
    closeModal: Function;
}
