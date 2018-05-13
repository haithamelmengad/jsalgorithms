var _ = require('underscore');

function uniquemap(string){
  let stringmap = _.countBy(string.toLowerCase());
  if(string.length !== Object.keys(stringmap).length){
    return false;
  }
  return true
}

function uniqueUnicode(string){
  let arr = Array(256);
  string = string.toLowerCase();
  
  for(let i = 0; i<string.length; i++){
    if(!arr[string.charCodeAt(i)]){
      arr[string.charCodeAt(i)] = true;
    } else {
      return false;
    }
  }
  return true;
  
}

function uniqueBit(string){
  string = string.toLowerCase();
  let checker = 0;
  let a = "a".charCodeAt(0);
  
  for(let i=0; i<string.length;i++){
    let bitpos = string.charCodeAt(i);
    if( checker & (1 << bitpos)){
       return false;
    }
    checker |= (1<<bitpos);
  }
  return true;
}

function uniquebrute(string){

  for(let i = 0;i<string.length;i++){
    for(let j =0; j<string.length; j++){
      if(i!==j && string[i] === string[j]){
        return false;
      }    
    }
  }
  return true;
}

console.log(uniqueBit('qwertyuiopasdfkglZ '))