let CHAR_NAME;
let char_xp = parseInt(prompt("Insira a sua XP: "));
let rank = ["Ferro", "Bronze", "Prata Ouro", "Platina Diamante", "Ascendente"]

if (char_xp < 1000){
    console.log("Ferro");
} else if(char_xp > 1001 && char_xp < 2000){
    console.log("Bronze");
} else if(char_xp > 2001 && char_xp < 5000){
    console.log("Prata");
} else if(char_xp > 6001 && char_xp < 7000){
    console.log("Ouro");
} else if(char_xp > 7001 && char_xp < 8000){
    console.log("Platina");
} else if(char_xp > 8001 && char_xp < 9000){
    console.log("Ascendente");
} else if(char_xp > 9001 && char_xp < 10000){
    console.log("Imortal");
} else {
    console.log("Radiante");
}
