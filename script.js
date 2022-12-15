/* select all anchor tags in table
put title over each one and any new ones */

const anchorArr = document.querySelectorAll('td a');
const projNameArr = document.querySelectorAll('.proj-name');

for (let i=0; i<anchorArr.length; i++) {
    anchorArr[i].setAttribute("title", `Details of ${projNameArr[i].innerText}`); 
}