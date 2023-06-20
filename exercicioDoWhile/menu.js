let opcao = "5"

do{
   opcao =  prompt(
        "Boas vindas!\n"+
        "\nEscolha uma das opçoes abaixo" +
        "\n1. Opção 1" +
        "\n2. Opção 2" +
        "\n3. Opção 3" +
        "\n4. Opção 4" +
        "\n5. Encerrar"
    )

    switch(opcao){
        case "1":
            alert("Opção 1!")
        break    
        case "2":
            alert("Opção 2!")
        break    
        case "4":
            alert("Opção 4!")
        break    
        case "4":
            alert("Opção 4!")
        break    
        case "5":
            alert("Encerrar!")
        break
        default:
            alert("Opção invalida")    
    }

} while (opcao !== "5")