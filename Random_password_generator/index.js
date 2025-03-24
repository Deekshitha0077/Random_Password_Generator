function generatePassword(length,includeLower,includeUpper,includeNumbers,includeSymbols){
    const lowerChars="abcdefghijklmnopqrstuvwxyz";
    const upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars="0123456789";
    const symbolChars="!@#$%^&*()_+-=";

    let allowedChars="";
    let password="";

    allowedChars+=includeLower?lowerChars:"";
    allowedChars+=includeUpper?upperChars:"";
    allowedChars+=includeNumbers?numberChars:"";
    allowedChars+=includeSymbols?symbolChars:"";
    if(length<=0){
        return `(pswrd length must be atleast 1)`;
    }

    if(allowedChars.length===0){
        return `(atleast 1 set of characters need to be selected)`;
    }

    for(let i=0;i<length;i++){
        const randomIndex=Math.floor(Math.random()*allowedChars.length);
        password+=allowedChars[randomIndex];
    }



    return password;
}


const passwordLength=12;
const includeLower=true;
const includeUpper=true;
const includeNumbers=true;
const includeSymbols=true;

const password = generatePassword(passwordLength,includeLower,includeUpper,includeNumbers,includeSymbols);

console.log(`generated password ${password}`);