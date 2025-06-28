import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import CategoriesList from "../../components/categoriesList/CategoriesList";
import getCategories, { deleteCategoryService } from "../../services/categoryService";
import { Toast } from 'primereact/toast'; // Importação do componente Toast

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const toast = useRef(null);
    // Get categories
    useEffect(() => {
        async function loadCategories() {
          try {
            const data = await getCategories();
            setCategories(data);
          } catch (err) {
            console.error('Failed to load orders:', err);
          }
        }
    
        loadCategories();
      }, []);

          // Função para deletar o produto
    const handleRemove = async (event) => {
        let deleteButtons = document.querySelectorAll(`.categories-list-delete-button`);


        deleteButtons.forEach(button => {
            button.disabled = true;
        });
        
        if (toast.current) {
            toast.current.show({
                severity: 'info',
                summary: 'Deletando categoria',
                detail: 'a categoria está sendo deletada...',
                life: 3000
            });
        }

        let categoryID = event.currentTarget.getAttribute('data-remove');

        if (categoryID) {
            // Remove o produto
            let data = await deleteCategoryService(categoryID);
            console.log(data);

            if (data.status == 200) {
                if (toast.current) {
                    toast.current.show({
                        severity: 'success',
                        summary: 'Categoria deletado',
                        detail: 'A categoria foi deletada com sucesso!',
                        life: 3000
                    });
                }

                // Atualiza a lista de produtos
                const categoryData = await getCategories();

                setCategories(categoryData);
            } else {
                if (toast.current) {
                    toast.current.show({
                        severity:'error',
                        summary: 'Erro ao deletar Categoria',
                        detail: 'A categoria não foi deletada!',
                        life: 3000
                    })
                }
            }
        }

        deleteButtons.forEach(button => {
            button.disabled = false;
        });
    }

    return (
        <>
            <Toast ref={toast}/>
            <Header/>

            <Title title="Categorias" linkbutton="criar-categoria" nameButton="Criar categoria" />
            
            <CategoriesList handleRemove={handleRemove} categories={categories}/>
        </>
    )
}