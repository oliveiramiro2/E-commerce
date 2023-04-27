export interface IDataCategory {
    name: string;
    trySendErro: boolean;
}

export interface IPropsAddEditCategory {
    add: boolean;
    requestIsLoading: boolean;
    dataCategory: IDataCategory;
    handleData: Function;
    setRequestIsLoading: Function;
    closeModal: Function;
    editId: number;
    setIdNewItem: Function;
    setProductEdited: Function;
}
