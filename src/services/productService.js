import {deleteProduct, fetchProducts, createProduct} from "../api/productApi";

export function getProducts () {

    return fetchProducts();
}

export function addProduct (data) {

    return createProduct(data);
}

export function deleteProductService(productId) {
    return deleteProduct(productId);
}