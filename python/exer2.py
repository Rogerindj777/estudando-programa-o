#exercicio 2

linguagens = ["Python", "Java", "C++", "JavaScript"]

linguagem = input("Qual linguagem você procura? ").title()

if linguagem in linguagens:
    print(f"A linguagem {linguagem} está na posição {linguagens.index(linguagem)}")
else:
    print("Linguagem não encontrada")