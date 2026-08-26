#exercicio 4, desafio.
produtos=["Mouse", "Teclado", "Monitor", "Notebook", "Headset"]

while True:
    produto=input("Dgite o produto (fim para sair): ").title()
    print("=======consulta de produtos=======")

    if produto == "Fim":
        print("Fim de consulta")
        break
    if produto in produtos:
        print(f"\n{produto}\n")
        print("Produto encontrado!\n")
        print(f"Posição: {produtos.index(produto)}\n")       
    else:
        print("Produto não encontrado!")


