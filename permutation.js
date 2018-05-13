var _ = require('underscore');

function permutation(str1, str2){
  if(str1.length !== str2.length){
    return false;
  }
  let str1map = _.countBy(str1);
  let str2map = _.countBy(str2);
  if(Object.values(str1map).length !== Object.values(str2map).length){
    return false;
  }
  
  for(let letter in str1map){
    if(str1map[letter] !== str2map[letter]){
      return false;
    }

  }
  return true;

}

function perm2(str1,str2){
  if(str1.length !== str2.length){
    return false;
  }
  let string = str1.concat(str2).toLowerCase();
  let c = Object.values(_.countBy(string)).filter((item) =>  item%2!==0);
  if(c.length === 0){
    return true
  }
  return false;
}

function perm3(str1,str2){
  if(str1.length !== str2.length){
    return false;
  }
  
  if(Array.from(str1).sort().join('') !== Array.from(str2).sort().join('')){
    return false;
  }
  return true;
    

}
console.log(perm3('baaAAcDD','DDaAAbca'))