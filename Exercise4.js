function angleType(angle) {
    if (angle < 90) return "Acute angle";
    if (angle === 90) return "Right angle";
    if (angle < 180) return "Obtuse angle";
    if (angle === 180) return "Straight angle";
}

console.log(angleType(47));  
console.log(angleType(90));  
console.log(angleType(145)); 
console.log(angleType(180)); 3
