export interface IDataApi {
    id: number;
    title: string;
    price: number;
    description: string;
    category: {
      id: number;
      name: string;
      image: string[] | string;
    };
    images: string[];
}

export interface ICategoryApi {
    id: number;
    name: string;
    image: string;
}
