const veiculo1 = prompt("Informe o modelo do veiculo: ")
const velocidade1 = prompt("Informe a velocidade do veiculo: ")

const veiculo2 = prompt("Informe o modelo do veiculo: ")
const velocidade2 = prompt("Informe a velocidade do veiculo: ")

if (velocidade1>velocidade2) {
    alert(veiculo1 + " é mais rapido que " + veiculo2)
} else if (velocidade1<velocidade2) {
    alert(veiculo2 + " é mais rapido que " + veiculo1)
    
} else {
    alert("os veiculos tem a mesma velocidade")
    
}