#Procurando números
def main():
    numeros = [12, 45, 8, 91, 30]

    numero = int(input("Digite um número: "))

    if numero in numeros:
        print(f"Número encontrado! ")
    else:
        print("Número não encontrado")

main()

