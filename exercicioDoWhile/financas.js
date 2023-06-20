let saldo = prompt("Dinheiro")
saldo = parseFloat (saldo) 
let opcao = ""

do {
   opcao = prompt(
    "Saldo:" + saldo + 
    "\n1. Adicionar dinheiro" +
    "\n2. Remover dinheiro" +
    "\n3. Encerrar"
    ) 

   switch(opcao){
    case "1":
        saldo +=parseFloat ( prompt('Valor:') )
        break
    case "2":
        saldo -=parseFloat ( prompt('Valor:') )
        break
    case "3":
        alert ("Saindo")
        break
    default:
        alert("Opçao invalida")        
   } 

   
} while (opcao!=="3");