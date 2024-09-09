function moveLastThreeChars(str) {
    if (str.length < 3) return str;
    return str.slice(-3) + str.slice(0, -3);
}

console.log(moveLastThreeChars("Python"));      
console.log(moveLastThreeChars("JavaScript"));  
console.log(moveLastThreeChars("Hi"));         
