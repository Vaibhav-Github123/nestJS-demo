"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const decorators_1 = require("@nestjs/common/decorators");
const product_service_1 = require("./product.service");
let ProductController = exports.ProductController = class ProductController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    addProduct(prodTitle, prodDesc, prodPrice) {
        const generatedId = this.productsService.insertProduct(prodTitle, prodDesc, prodPrice);
        return { id: generatedId };
    }
    getAllProduct() {
        return this.productsService.getProducts();
    }
    getProduct(prodId) {
        return this.productsService.getSingleProduct(prodId);
    }
    updateProduct(prodId, prodTital, prodDesc, prodPrice) {
        this.productsService.updateProduct(prodId, prodTital, prodDesc, prodPrice);
        return null;
    }
    removeProduct(prodId) {
        this.productsService.deleteProduct(prodId);
        return null;
    }
};
__decorate([
    (0, decorators_1.Post)(),
    __param(0, (0, decorators_1.Body)('title')),
    __param(1, (0, decorators_1.Body)('description')),
    __param(2, (0, decorators_1.Body)('price')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "addProduct", null);
__decorate([
    (0, decorators_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getAllProduct", null);
__decorate([
    (0, decorators_1.Get)(':id'),
    __param(0, (0, decorators_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getProduct", null);
__decorate([
    (0, decorators_1.Patch)(':id'),
    __param(0, (0, decorators_1.Param)('id')),
    __param(1, (0, decorators_1.Body)('title')),
    __param(2, (0, decorators_1.Body)('description')),
    __param(3, (0, decorators_1.Body)('price')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "updateProduct", null);
__decorate([
    (0, decorators_1.Delete)(':id'),
    __param(0, (0, decorators_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "removeProduct", null);
exports.ProductController = ProductController = __decorate([
    (0, decorators_1.Controller)('products'),
    __metadata("design:paramtypes", [product_service_1.ProductsSrvice])
], ProductController);
//# sourceMappingURL=products.controller.js.map