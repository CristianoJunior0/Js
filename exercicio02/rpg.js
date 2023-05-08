const nomePoder1 = prompt("Insira o nome do poder: ")
const forcaPoder1 = prompt("Insira o valor do poder: ")

const nomeBoneco2 = prompt("Insira o nome do personagem: ")
let vidaBoneco2 = prompt("Quantos pontos de vida o persongaem tem? ")
const defesaBoneco2 = prompt("Quantos pontos de defesa tem o personagem? ")
const escudoBoneco2 = prompt("O personagem possui um escudo? ")

let danoCausado = 0

if (forcaPoder1>defesaBoneco2 && escudoBoneco2 === "nao") {
    danoCausado = forcaPoder1 - defesaBoneco2
} else if (forcaPoder1>defesaBoneco2 && escudoBoneco2 === "sim") {
    danoCausado = (forcaPoder1 - defesaBoneco2) / 2
}

vidaBoneco2 -= danoCausado

alert( nomePoder1 + " causou " + danoCausado + " dano no " + nomeBoneco2)
alert (
    nomePoder1 + "\nPoder de ataque: " + forcaPoder1 +  "\n\n" +
    nomeBoneco2 + "\nVida do defensor: " + vidaBoneco2 +
    "\nPoder de defesa: " + defesaBoneco2 + "\nPossui escudo: " + escudoBoneco2
)
