const turista = prompt ("Qual seu nome?")

let cities = ""

let count = 0

let continuar = prompt("Você visitou alguma cidade?") 

while (continuar === "Sim") {
    let city = prompt("Qual?")

    cities += " - " + city + "\n"

    count++

    continuar = prompt("Alguma mais?")
}

alert(
    "Turista: " + turista +
    
    "\nNumero de cidades visitadas: " + count + 
    "\nCidades visitadas:\n " + cities
) 