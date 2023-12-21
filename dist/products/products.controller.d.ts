import { ProductsSrvice } from './product.service';
export declare class ProductController {
    private readonly productsService;
    constructor(productsService: ProductsSrvice);
    addProduct(prodTitle: string, prodDesc: string, prodPrice: number): {
        id: string;
    };
    getAllProduct(): import("./product.model").Product[][];
    getProduct(prodId: string): {
        id: string;
        title: string;
        description: string;
        price: number;
    };
    updateProduct(prodId: string, prodTital: string, prodDesc: string, prodPrice: number): any;
    removeProduct(prodId: string): any;
}
