#exercicio 1
lis = []
par=[]
impar=[]

for i in range(8):
    numeros=int(input(f"Digite o valor {i+1}: "))
    lis.append(numeros)

    if numeros %2 ==0:
        par.append(numeros)
    else:
        impar.append(numeros)
        


print()
print(f"Todos os números {lis}\n")
print(f"Números pares: {par}")
print(f"Números impar: {impar}\n")
print(f"Existem {len(par)} números pares e {len(impar)} impares")


