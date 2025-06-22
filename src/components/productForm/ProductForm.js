export default function ProductForm() {

    const handleFormSubmit = (event) => {
        event.preventDefault();

        let nome = document.getElementById('nome').value;
        let descricao = document.getElementById('descricao').value;
        let categoria = document.getElementById('categoria').value;
        let quantidade = document.getElementById('quantidade').value;
        let preco = document.getElementById('preco').value;
        let estoque = document.querySelector('input[name="estoque"]:checked').value;

        // Validação dos campos
        if (nome != '' && descricao != '' && preco && (estoque == 'não' || (estoque == 'sim' && quantidade > 0))) {
            let data = {
                nome: nome,
                descricao: descricao,
                categoria: categoria,
                quantidade: quantidade,
                preco: preco,
                estoque: estoque
            }

            alert ("Produto cadastrado com sucesso!");

        } else {
            alert('Preencha todos os campos obrigatórios!');
        }


    }

    return (

        <>
            <section className='py-5'>
                <div className='container'>
                    <form onSubmit={handleFormSubmit} method="post" className='px-3'>
                        <div className='row bg-white p-4 d-flex flex-wrap radius'>
                            <div className='col-7'>

                                <div>
                                    <label htmlFor="nome">Nome</label>
                                    <input required placeholder="Nome do produto..." className="mt-2" type="text" name="nome" id="nome" />
                                </div>

                                <div className="mt-4">
                                    <label htmlFor="descricao">Descrição</label>
                                    <textarea required placeholder="Descrição do produto..." className="mt-2 textarea" type="text" name="descricao" id="descricao"></textarea>
                                </div>

                                <div className="d-flex flex-wrap gap-4">

                                    <div className="mt-4">
                                        <label htmlFor="categoria">Categoria</label>
                                        
                                        <select className="mt-2 d-block" name="categoria" id="categoria">
                                            <option value="">Escolha uma categoria</option>
                                            <option value="2">Categoria 2</option>
                                            <option value="3">Categoria 3</option>
                                        </select>
                                    </div>
                                    
                                    <div className="mt-4">
                                        <label htmlFor="descricao">Quantidade</label>
                                        <input placeholder="Estoque disponível" className="mt-2" type="number" name="quantidade" id="quantidade" />
                                    </div>

                                </div>

                                <div className="d-flex align-items-center flex-wrap gap-4">

                                    <div className="mt-4">
                                        <label htmlFor="preco">Preço</label>
                                        
                                        <input required className="mt-2" id="preco" name="preco" type="text" placeholder="Preço do produto..." />
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
                                    <button type="submit" className="button">Enviar</button>     
                                    <button type="button" className="button red">Excluir</button>                                    
                                </div>

                            </div>

                            <div className='col-5'>
                                Imagem
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}