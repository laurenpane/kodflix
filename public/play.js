function removeUnderscore(string) {
    return string.split('')
        .map(char => {
            return char === '_' ?
                char = ' ' :
                char;
        })
        .join('');
} 

console.log(removeUnderscore('Team_Alpha'));