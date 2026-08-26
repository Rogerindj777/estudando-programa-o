#exercicio 3
nomes = ["Rafael", "Sarah", "Claudio", "Isaque", "Maria", "Marcia", "Carlos", "Gabriel", "Lucas", "Laura"]

while True:

    nome = input("Encontre seu nome(Fim para sair): ").title()

    if nome == "Fim":
        break
    elif nome in nomes:
        print(f"{nome} existe na lista e está na posição {nomes.index(nome)}. continue")
    else:
        print("Este nome não existe na lista, procure outro.")