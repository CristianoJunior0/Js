const meters = prompt("Escreva um valor em metros: ")

const unidade =  prompt(
    "Para qual medida deseja converter?" + 
    "\n1. milimetros (mm)" + 
    "\n2. centimetros (cm)" + 
    "\n3. decimentros  (dm)" + 
    "\n4. decametro (dam)" + 
    "\n5. hectometros (hm)" + 
    "\n6. quilometros (km)" 

)





switch (unidade) {
    case "1":
        alert("Resultado:" + meters + "m=" +  meters*1000 + "mm")
        break
    case "2":
        alert("Resultado:" + meters + "m=" + meters*100 + "cm")
        break
    case "3":
        alert("Resultado:" + meters + "m=" + meters*10) + "dm"
        break
    case "4":
        alert("Resultado:" + meters + "m=" + meters/10) + "dam"
        break
    case "5":
        alert("Resultado:" + meters + "m=" + meters/100 + "hm")
        break
    case "6":
        alert("Resultado:" + meters + "m=" + meters/1000 + "km")
        break
    default:
        alert("Opção invalida")                        
}