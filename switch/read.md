SWITCH:
        
        Permite criar blocos condicionais como o If, porém com uma estrutura que avalia uma expressão e testa o resultado contra varios casos, testando os casos correspondentes
        
        É possivel definir um caso padrao que sempre é executado

        Também é possivel parar a execução após alguns casos

        SWITCH Expressao
            CASO a: faça alguma coisa
            CASO b: faça uma outra coisa e pare
            CASO c: faça mais outra coisa
            POR PADRÃO: faça algo sempre


        Sintaxe:
            switch (expressao){
                case "a":
                //...
                
                case "b":
                //...

                break

                case "c":
                //...

                default
                
                //...
            }