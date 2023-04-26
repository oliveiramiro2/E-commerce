export interface INewProductData {
    title: string;
    price: number;
    description: string;
    categoryId: number;
    images: string[];
}

export interface IEditProduct {
    title: string;
    price: number;
    description: string;
    categoryId: number;
}
