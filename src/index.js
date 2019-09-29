module.exports = function check(str, bracketsConfig) {
    let countLetter=str.length;
    for(let j=0;j<countLetter;j++){
        if(str.length>1){
            for(let i=0;i-1<str.length;i++){  
                let closedBrackets=whoEnd(bracketsConfig,str[i]);
                if(str[i+1]==closedBrackets){   
                    str=str.substring(0,i) + str.substring(i+2);  
                    break;
                }
            }
        }else break;
    }
    if(str=='') return true;
        else return false;   
}

function whoEnd(arr,t){
    for(let a of arr)
        if(a[0]==t)          
            return a[1];     
}
