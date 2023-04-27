let velocity = 60

while (velocity >= 0) {
    alert("O carro está a " + velocity + "Km/h")
    velocity-=15
    alert("Diminuindo 15 Km/h")
    
    if (velocity === 0){
        alert ("O parou")
        break
    }
    
    
}