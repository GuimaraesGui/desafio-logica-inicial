let CHAR_NAME = promt("Insira o nome do personagem: ");
let char_xp = parseInt(prompt("Insira a sua XP: "));
let rank = ["Ferro", "Bronze", "Prata Ouro", "Platina Diamante", "Ascendente"]

if (char_xp < 1000){
    rank = "Ferro"
} else if(char_xp > 1001 && char_xp < 2000){
    rank = "Bronze"
} else if(char_xp > 2001 && char_xp < 5000){
    rank = "Prata"
} else if(char_xp > 6001 && char_xp < 7000){
    rank = "Ouro"
} else if(char_xp > 7001 && char_xp < 8000){
    rank = "Platina"
} else if(char_xp > 8001 && char_xp < 9000){
    rank = "Ascendente"
} else if(char_xp > 9001 && char_xp < 10000){
    rank = "Imortal"
} else {
    rank = "Imortal"
}

console.log("O herói de nome " + CHAR_NAME + " está no nível de " + rank);
documento.write("O herói de nome " + CHAR_NAME + " está no nível de " + rank);