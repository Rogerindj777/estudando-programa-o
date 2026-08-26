#exercicio 1

numeros = [10, 25, 40, 80, 95]

numero = int(input("DIgite um número: "))

if numero in numeros:
    print(f"{numero} existe na lista.")
else:
    print(f"{numero} não existe na lista")