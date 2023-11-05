// const addBtn =document.querySelector('#add-btn');
// const completeBtn = document.querySelectorAll('com-btn');
// const deleteBtn =document.querySelectorAll('del-btn');
// let listMenu = document.querySelectorAll('.hero');
// console.log(Array.isArray(listMenu));
// console.log(Array.from(listMenu));
// addBtn.addEventListener('click', function(){
//     var paragraph = document.createElement('p')
//     paragraph.innerHTML = inputfeild.value
//     listMenu.appendchild(paragraph);
// })

const inputfeild = document.getElementById('input-field');
const list = document.getElementById('list-menu');
const addBtn = document.getElementById('add-btn');
const deleteBtn = document.querySelectorAll('#del-btn');
const completeBtn = document.querySelectorAll('#com-btn');
addBtn.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    // console.log(inputfeild,'value') 
    console.log(inputfeild.value,'inputfeild')
    paragraph.innerHTML = inputfeild.value;
    console.log(paragraph)
    list.appendChild(paragraph) 
    inputfeild.Value = "";
    
})

completeBtn.addEventListener('click', showing(completeBtn));
  Array.isArray(Array.from(completeBtn))
    function showing(completeBtn){

        return done
    }
    // Array.forEach(Function)
    // completeBtn.Style.color = "light-green";

console.log(Array.isArray(Array.from(completeBtn)))

// deleteBtn.addEventListener('click',function(e){
//    const p = e.target.parentElement;
//    list.parentNode.removechild()
// })
Array.from(deleteBtn).forEach(function(deleteBtn){
    deleteBtn.addEventListener('click',function(list){
       Array.from(deleteBtn)
        list.slice()
    })
})
Array.from(list)
console.log(Array.isArray(Array.from(completeBtn)))
console.log(list)
