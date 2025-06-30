import { useState, useEffect, useRef } from "react";
import  getCategories from '../../services/categoryService';
import { addProduct, updateProductService } from "../../services/productService";
import { Toast } from 'primereact/toast';
import noImage from '../../assets/no-image.jpg';
import styles from "./productForm.module.css";

export default function ProductForm({product, action}) {

    const [name, setName] = useState(product ? product.name: '');
    const [description, setDescription] = useState(product ? product.description: '');
    const [quantity, setQuantity] = useState(product ? product.quantity: '');
    const [category_id, setCategory_id] = useState(product ? product.category_id: '');
    const [price, setPrice] = useState(product ? product.price: '');
    
    // Se a prop mudar
    useEffect(()=> {
        if (product) {
            setName(product.name);
            setDescription(product.description);
            setQuantity(product.quantity);
            setCategory_id(product.category_id);
            setPrice(product.price);
        }

    }, [product]);

    // Pega as categorias

    const [categories, setCategories] = useState([]);
    const toast = useRef(null);
    const [isThereImage, setIsThereImage] = useState(false);

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

      // Quando o formulário for enviado, pega os dados e envia para a API para salvar no banco de dad
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        const submitButton = document.getElementById('sendForm');
        // Desabilita o botão
        submitButton.disabled = true;
        
        let nome = document.getElementById('nome').value.trim();
        let descricao = document.getElementById('descricao').value.trim();
        let categoria = parseInt(document.getElementById('categoria').value);
        let quantidade = parseInt(document.getElementById('quantidade').value);
        let preco = parseFloat(document.getElementById('preco').value); // float
        let estoque = document.querySelector('input[name="estoque"]:checked').value;
        let imagem = document.getElementById('imagem').files[0];

        // Validação dos campos
        if (nome !== '' && descricao !== '' && preco !== "" && categoria !== "" && (estoque === 'Nao' || (estoque === 'Sim' && quantidade > 0))) {
           
            toast.current.show({
                severity: 'info',
                summary: 'Cadastrando produto',
                detail: 'O produto está sendo cadastrado...',
                life: 3000
            });

            let formData = new FormData();
            formData.append('name', nome);
            formData.append('description', descricao);
            formData.append('category_id', categoria);
            formData.append('quantity', quantidade);
            formData.append('price', preco);

            if (imagem) {
                formData.append('image', imagem);
                console.log('Imagem: ', imagem);
            }        

            let response = null;

            if (action === "update") {
                response = await updateProductService(formData);
            } else {
                response = await addProduct(formData);
            }

            
            if (response.status === 200) {

                toast.current.show({
                    severity: 'success',
                    summary: 'Produto cadastrado com sucesso!',
                    detail: 'O produto foi cadastrado com sucesso!',
                    life: 3000
                });

                document.getElementById('nome').value = '';
                document.getElementById('descricao').value = '';
                document.getElementById('categoria').value = '';
                document.getElementById('quantidade').value = '';
                document.getElementById('preco').value = '';
                
                const checkedRadio = document.querySelector('input[name="estoque"]:checked');
                if (checkedRadio) {
                    checkedRadio.checked = false;
                }

            } else {
                toast.current.show({
                    severity: 'error',
                    summary: 'Não foi possível cadastrar o produto!',
                    detail: 'Ocorreu um erro ao cadastrar o produto!',
                    life: 3000
                });
            }

        } else {
            toast.current.show({
                severity: 'error',
                summary: 'Não foi possível cadastrar o produto!',
                detail: 'Preencha todos os campos obrigatórios!', 
                life: 3000
            });
        }
        
        // Habilita o botão
        submitButton.disabled = false;
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const ProductImage = document.getElementById('product-image');


        if (!file) {
            ProductImage.src = noImage;
            setIsThereImage(false);
            return;
        }

        // Se for outro tipo de arquivo, exibe uma mensagem de erro
        if (!file.type.match('image.*')) {
            toast.current.show({
                severity: 'error',
                summary: 'Não foi possível cadastrar o produto!',
                detail: 'O arquivo selecionado não é uma imagem!',
                life: 3000
            });
            return;
        }
        
        // Se for uma imagem, exibe a imagem
        ProductImage.src = URL.createObjectURL(file);
        setIsThereImage(true);
    }

    const handleRemoveImage = (event) => {
        // Limpa a imagem
        const ProductImage = document.getElementById('product-image');
        ProductImage.src = noImage;
        
        // Limpa o input file
        const ProductImageInput = document.getElementById('imagem');
        ProductImageInput.value = ''; 
        setIsThereImage(false);

    }

    const handleNameChange = (event) => {
        // Get the input value
        const name = event.target.value;
        setName(name);
    }

    const handleDescriptionChange = (event) => {
        // Get the input value
        const description = event.target.value;
        setDescription(description);
    }

    const handleQuantityChange = (event) => {
        // Get the input value
        const quantity = event.target.value;
        setQuantity(quantity);
    }

    const handlePriceChange = (event) => {
        // Get the input value
        const price = event.target.value;
        setPrice(price);
    }

    const handleCategoryChange = (event) => {
        // Get the input value
        const category_id = event.target.value;
        setCategory_id(category_id);
    }

    return (

        <>
            <Toast ref={toast} />
            <section className='py-5'>
                <div className='container'>
                    <form onSubmit={handleFormSubmit} method="post" className='px-3'>
                        <div className='row bg-white p-4 d-flex flex-wrap radius'>
                            <div className='col-7'>

                                <div>
                                    <label htmlFor="nome">Nome</label>
                                    <input 
                                        required 
                                        placeholder="Nome do produto..." 
                                        className="mt-2" 
                                        type="text" 
                                        value={name ? name : ''} 
                                        onChange={(e) => handleNameChange(e)}
                                        name="nome" 
                                        id="nome" 
                                    />
                                </div>

                                <div className="mt-4">
                                    <label htmlFor="descricao">Descrição</label>
                                    <textarea 
                                        value={description ? description : ''} 
                                        onChange={(e) => handleDescriptionChange(e)}
                                        required 
                                        placeholder="Descrição do produto..." 
                                        className="mt-2 textarea" 
                                        type="text" 
                                        name="descricao" 
                                        id="descricao"
                                    />
                                </div>

                                <div className="d-flex flex-wrap gap-4">

                                    <div className="mt-4">
                                        <label htmlFor="categoria">Categoria</label>
                                        
                                        <select 
                                            value={category_id ? category_id : ''} 
                                            onChange={(e) => handleCategoryChange(e)}
                                            required 
                                            className="mt-2 d-block" 
                                            name="categoria" 
                                            id="categoria"
                                        >
                                            <option value="">Escolha uma categoria</option>
                                            {categories.data && categories.data.map((category) => {
                                                return (
                                                    <option key={category.id} value={category.id}>{category.name}</option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                    
                                    <div className="mt-4">
                                        <label htmlFor="descricao">Quantidade</label>
                                        <input 
                                            value={quantity ? quantity : ''} 
                                            onChange={(e) => handleQuantityChange(e)}
                                            placeholder="Estoque disponível" 
                                            className="mt-2" 
                                            type="number" 
                                            name="quantidade" 
                                            id="quantidade" 
                                        />
                                    </div>

                                </div>

                                <div className="d-flex align-items-center flex-wrap gap-4">

                                    <div className="mt-4">
                                        <label htmlFor="preco">Preço</label>
                                        
                                        <input 
                                            value={price ? price : ''} 
                                            onChange={(e) => handlePriceChange(e)}
                                            required 
                                            className="mt-2" 
                                            id="preco" 
                                            name="preco" 
                                            type="text" 
                                            placeholder="Preço do produto..." 
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <label>Controlar Estoque</label>

                                        <div className="d-flex gap-2 mt-2">
                                            <label className="radio-option">
                                              <input required value="Sim" type="radio" name="estoque"/>
                                                Sim
                                            </label>

                                            <label className="radio-option">
                                                <input required value="Nao" type="radio" name="estoque"/>
                                                Não
                                            </label>

                                        </div>
                                    </div>

                                </div>

                                <div className="mt-5 d-flex gap-4">
                                    <button id="sendForm" type="submit" className="button">Enviar</button> 
                                    
                                    {
                                        action === "update" ? (
                                            <button type="button" className="button red">Excluir</button>   
                                        ) : null
                                    }
                                </div>

                            </div>

                            <div className='col-5'>
                                <h2>Imagem</h2>

                                <div className={`${styles.image_area} mt-3`}>
                                    <img id="product-image" src={ (product != null && product.image != null)? product.image : noImage } alt="Imagem do produto" />       
                                </div>

                                <input onChange={handleFileChange} className="mt-3" type="file" name="imagem" id="imagem"/>

                               {
                                    (isThereImage || (product != null && product.image)) &&
                                    <button onClick={handleRemoveImage} type="button" className="button red mt-3">Remover Imagem</button>
                               }
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}