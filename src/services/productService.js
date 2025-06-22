import {deleteProduct, fetchProducts} from "../api/productApi";

export function getProducts () {

    return fetchProducts();
}

export function deleteProductService(productId) {
    return deleteProduct(productId);
}