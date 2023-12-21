import { Product } from './product.model';
export declare class ProductsSrvice {
    private products;
    insertProduct(title: string, desc: string, price: number): string;
    getProducts(): Product[][];
    getSingleProduct(productId: string): {
        id: string;
        title: string;
        description: string;
        price: number;
    };
    updateProduct(productId: string, title: string, desc: string, price: number): void;
    deleteProduct(productId: string): void;
    private findProduct;
}
