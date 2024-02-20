var students = ["Robert","Max","Alexia","Hose","Vicktoria","Eva","Stella","Milena","Paul","Levin","Felix P.","Felix R.","Julia","Eda","Anna","Gabriela","Elisabeth","Faran","Simon","Lucas","Sophia","Laura","Fabian","Aniela","Ellie","Yeva"];


$(".btn").click(function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    var firstRow = students.slice(0,8);
    var secondRow = students.slice(8,17);
    var thirdRow = students.slice(17);

    putOut(firstRow);
    putOut(secondRow);
    putOut(thirdRow);
})


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    var firstRow = students.slice(0,8);
    var secondRow = students.slice(8,17);
    var thirdRow = students.slice(17);

    putOut(firstRow);
    putOut(secondRow);
    putOut(thirdRow);
}

function putOut(row){
document.write("<div class='container'>")    
document.write("<div");
for (const item of row) {
    document.write(`<div class='grid-item'>${item}</div>`);
}
document.write("</div>");
document.write("</div>");
}
