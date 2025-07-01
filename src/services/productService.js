import {deleteProduct, fetchProducts, createProduct, getProductById, updateProduct} from "../api/productApi";

export function getProducts (page) {

    return fetchProducts(page);
}

export function addProduct (data) {

    return createProduct(data);

}

export function updateProductService (data) {

    return updateProduct(data);
}

export function deleteProductService(productId) {
    return deleteProduct(productId);
}

export const getProductByIdService = async (id) => {
    try {
        let response = await getProductById(id);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar produto por ID:', error);
        return -1;
    }
}