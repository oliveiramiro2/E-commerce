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
    images: string[] | string;
}
