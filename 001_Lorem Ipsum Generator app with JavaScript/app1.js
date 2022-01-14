//console.dir(document);
//console.dir(wordNum);
/*
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);
numbers.sort(function(a, b) {
    return b- a;
  });
console.log(numbers);
*/

const wordNum = document.querySelector('input[name="words"]');
const paraNum = document.querySelector('input[name="paras"]');
const btn = document.querySelector('.btn');
const output = document.querySelector('.output');
const regex = /([^A-Za-z ])/g;
let data = myData.replace(regex,'').toLowerCase();
const myArr = data.split(' ');
console.log(myArr);
btn.addEventListener('click',buttonClicked);
function buttonClicked(e){
    //console.log(e.target);
    myArr.sort((a, b) => .5 - Math.random());
    const numParas = Number(paraNum.value);
    const numWords = Number(wordNum.value);
    for(let i=0;i<numParas;i++){
        genParagraphs(numWords);
    }
    console.log(myArr);
}

function genParagraphs(num){
    const p = document.createElement('p');
    p.textContent = getSen('',num);
    output.append(p);
}

function getSen(temp,num){
    let total = num > 10 ? 10 : num;
    let ranWords = Math.floor(Math.random()*total) + 2;
    let holder = '';
    for(let i=0;i<ranWords;i++){
        if(num>0){
            let w = myArr[Math.floor(Math.random()*myArr.length)];
            holder += ` ${w}`;
        }
        num--;
    }
    if(holder.length > 0){
        temp += capWord(holder.trim().toLowerCase());
    }
    if(num < 0 ){
        return temp;
    }else{
        return getSen(temp,num);
    }
}



function capWord(str){
    let first = str.charAt(0).toUpperCase();
    let readySentence = first + str.slice(1) + '. ';
    console.log(first);
    return readySentence;
}





/*
btn.addEventListener('click',(e)=>{
    console.log(e.target);
    e.target.style.background = 'blue';
})

window.addEventListener('DOMContentLoaded',(e)=>{
    console.log('DOM ready');
})
*/