frutas = ["Banana", "Maçã", "Uva", "Pera"]

while True:
    fruta = input("Digite uma fruta ou fim para finalizar: ").title()

    if fruta == "Fim":
        break

    if fruta in frutas:
        print("Aproveite sua fruta.")
    else:
        print("Fruta não encontrada")