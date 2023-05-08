const firstName = prompt("Digite o primeiro nome:")
const surname = prompt("Digite o sobrenome:")
const studyArea = prompt("Em qual area você estuda?")
const yearOfBirth = prompt("Qual o ano do seu nascimento?")

alert(
    "Recruta cadastrado com sucesso!!" +
    "Nome completo:" + " " + firstName + " " + surname +
    "Campo de estudo:" + " " + studyArea + 
    "Idade:" + " " +  (2023 - yearOfBirth)
)
