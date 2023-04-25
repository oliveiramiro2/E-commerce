import { IDataApi, ICategoryApi } from "@/interface";

export interface IProps {
    dataProduct: IDataApi[]
    dataCategory: ICategoryApi[];
    numberItemsPagination?: number;
}

export interface IDataTable {
    name: string;
    id: number;
}
