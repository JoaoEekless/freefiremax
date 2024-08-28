# Lista vazia para armazenar produtos
produtos = []

# Função para mostrar linha 
def mostra_linha():
    print('=' * 25)

# Função para adicionar produto
def adicionar_produto():
    nome = input('Digite o nome do produto: ')
    preco = float(input('Digite o preço do produto: '))
    quantidade = int(input('Digite a quantidade do produto: '))
    
    produto = { 
        'nome': nome,       
        'preco': preco,
        'quantidade': quantidade,
    }
    produtos.append(produto)  # Adiciona o produto na lista de produtos
    print(f"Produto '{nome}' adicionado com sucesso.")

# Função para listar produtos
def listar_produtos():
    if len(produtos) == 0:
        print('Nenhum produto cadastrado.')
    else:
        mostra_linha()
        print('         LISTA DE PRODUTOS         ')
        mostra_linha()
        for idx, produto in enumerate(produtos, 1):
            print(f"{idx}. Nome: {produto['nome']}, Preço: R${produto['preco']:.2f}, Quantidade: {produto['quantidade']}")

# Função para buscar produto pelo nome
def buscar_produto():
    if len(produtos) == 0:
        print('Nenhum produto cadastrado.')
        return
    
    nome_busca = input('Digite o nome do produto para ser buscado: ')
    encontrado = False 
    for produto in produtos:
        if produto['nome'].lower() == nome_busca.lower():
            print(f"Produto encontrado: Nome: {produto['nome']}, Preço: R${produto['preco']:.2f}, Quantidade: {produto['quantidade']}")
            encontrado = True
            break
    if not encontrado:
        print('Produto não encontrado.')

# Função menu principal
def main():
    while True:
        mostra_linha()
        print('         MENU       ')
        mostra_linha()
        print('1. Cadastrar produto')
        print('2. Listar produtos')
        print('3. Buscar produto pelo nome')
        print('4. Sair')

        opcao = input('Escolha uma opção: ')

        if opcao == "1":
            adicionar_produto()
        elif opcao == "2":
            listar_produtos()
        elif opcao == "3":
            buscar_produto()
        elif opcao == "4":
            print('Saindo do programa...')
            break
        else:
            print('Opção inválida. Por favor, escolha uma opção válida.')

if __name__ == "__main__":
    main()
