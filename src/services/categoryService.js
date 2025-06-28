import {createCategory, deleteCategory, fetchCategories} from "../api/categoriesApi";

export default function getCategories () {
    return fetchCategories();
}   

export function createCategoryService (data) {
    return createCategory(data);
}   

export function deleteCategoryService (id) {
    return deleteCategory(id);
}   

