

//==============================String-Methods-Level-1_1========================

console.log("%c String-Methods-Level-1_1", "color: green; font-size: 16px;");
const firstName = "Samuel";
const lastName = "Aliyari";
const fullName = "Samuel Aliyari";


console.log(firstName.length);
console.log(lastName.length);
console.log(fullName.length);

//==============================String-Methods-Level-1_2========================

console.log("%c String-Methods-Level-1_2", "color: green; font-size:16px;");

const txt = "How inappropriate to call this planet Earth, when clearly it is Ocean."

console.log(txt.indexOf("h"));
console.log(txt.indexOf("Earth"));
console.log(txt.indexOf("Moon"));

//==============================String-Methods-Level-1_3=======================
console.log("%c String-Methods-Level-1_3", "color: green; font-size:16px;");

let txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent."

console.log(txt2.search(";"));
console.log(txt2.search("green"));
console.log(txt2.search("blue"));

//==============================String-Methods-Level-1_4=======================


console.log("%c String-Methods-Level-1_4", "color: green; font-size:16px;");

const A = 'Susi is going to codingschool';
const output1_4 = document.body.querySelector("p");

output1_4.innerHTML = `${A.slice(0, 4)} <br><br> ${A.slice(5, 7)} <br><br> ${A.slice(5, 16)} ${A.slice(-6)} <br><br> ${A.slice(-6)} <br><br> ${A.slice(0, 7)} ${A.slice(-6)}`


//==============================String-Methods-Level-1_5=======================


console.log("%c String-Methods-Level-1_5", "color: green; font-size:16px;");

const output1_5 = document.body.querySelector("article")

output1_5.innerHTML = 
`${A.substring(0, 4)} 
<br><br> 
${A.substring(5, 7)} 
<br><br>
${A.substring(23)} 
<br><br> 
${A.substring(0, 7)}
${A.substring(23)}`

//==============================String-Methods-Level-1_7=======================


console.log("%c String-Methods-Level-1_7", "color: green; font-size:16px;");

const text = "Sam is good at codingschool"
const output1_7 = document.body.querySelector("section");

output1_7.innerHTML = 
`${text.replace("good", "bad").replace("codingschool", "school")}
<br><br> 
${text.replace("Sam", "Susi").replace("codingschool", "school")} 
<br><br> 
${text.replace("codingschool", "Tennis")} `


//==============================String-Methods-Level-1_8=======================

console.log("%c String-Methods-Level-1_8", "color: green; font-size:16px;");



const text2 = "Sam is going to school"
const output1_8 = document.body.querySelector("h4");


output1_8.innerHTML = 
`${text2.toUpperCase()} 
<br><br> 
${text2.toLowerCase()} 
<br><br> 
${text2.slice(0, 3).toUpperCase()} ${text2.slice(4, -7)} ${text2.slice(-7).toUpperCase()} 
<br><br> 
${text2.slice(0, 3).toLowerCase()} ${text2.slice(4, -7).toUpperCase()} ${text2.slice(-7)} 
<br><br> 
${text2.slice(0,1).toUpperCase()}${text2.slice(1,3)} ${text2.slice(4,5).toLocaleUpperCase()}${text2.slice(5,6)} ${text2.slice(7, 8).toUpperCase()}${text2.slice(8,12)} ${text2.slice(13,14).toUpperCase()}${text2.slice(14,15)} ${text2.slice(16, 17).toUpperCase()}${text2.slice(-5)}`;

//==============================String-Methods-Level-1_9=======================



console.log("%c String-Methods-Level-1_9", "color: green; font-size:16px;");
const output1_9 = document.body.querySelector("h5");
const txtOne = "Sam is going to codingschool";
const txtTwo = "Susi";
const txtThree = "and";

output1_9.innerHTML = `${txtOne.replace("codingschool", "school").concat(" ",txtThree, " ").concat("to the movie theater")}
<br><br>
    ${
        txtOne.replace("codingschool", "the movie theater")
    }
    <br><br>
    ${
        txtTwo.concat(" ").concat(txtThree).concat(" ").concat(txtOne.slice(0, 4)).concat(txtOne.slice(4)).replace("is", " are").replace("codingschool", "school")
    }
    <br><br>
    ${
        txtTwo.concat(" ").concat(txtThree).concat(" ").concat(txtOne.slice(0, 4)).concat(txtOne.slice(4, 16)).replace("is", " are").concat("the gym ").concat(txtThree).concat(txtOne.slice(12)).replace("codingschool", " the movie theater")
    }
    <br><br>
    ${
        txtTwo.concat(txtOne.slice(3).replace("codingschool", "school ")).concat(txtThree).concat("to the movie theater")
    }
    `

    