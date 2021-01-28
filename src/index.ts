import * as clipboardy from 'clipboardy';
const sname = 5;
let a: number;

export function HelloWorld(){
    return 'Hello World!'
}
const autoClip=()=>{
    // clipboardy.writeSync('🦄');
    return(typeof clipboardy.readSync());
}

console.log(autoClip());