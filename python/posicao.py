nomes = ["Rafael", "Bruna", "Carlos", "Ana"]

nome = input("Nome: ").title()

if nome in nomes:
    print(f"{nome} está na posição {nomes.index(nome)}")
else:
    print("Nome não encontrado!")