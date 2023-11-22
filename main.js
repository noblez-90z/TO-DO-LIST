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
// const to_do = document.getElementsByClassName('list');
const to_do = document.querySelectorAll('.list');
const addBtn = document.getElementById('add-btn');
const deleteBtn = document.querySelectorAll('#del-btn');
// const deleteBtn = document.getElementsByClassName('deleted');
// const completeBtn = document.querySelectorAll('#com-btn');
const completeBtn = document.getElementsByClassName('completed');
addBtn.addEventListener('click', function(){
    let paragraph = document.createElement('div');
    let ted = document.createElement('div');
    let fry = document.createElement('button');
    // console.log(inputfeild.value,'inputfeild')
    paragraph.innerHTML = inputfeild.value;
    paragraph.className = "list";

    fry.textContent = 'completed';
    ted.className = 'side';
    ted.appendChild(fry);
    paragraph.appendChild(ted);
    list.appendChild(paragraph) 
    inputfeild.Value = "";
    
})
// console.log(to_do)
// console.log(completeBtn)
// console.log(Array.isArray(Array.from(to_do)));
// const newArr = Array.from(to_do);
// console.log(Array.isArray(newArr))
// console.dir(newArr)
// function complete(newArr,idx){
    // console.log('done')
    // alert('completed');
    
    // for (var i = 0 ; i < newArr.length; i++){
    //     newArr[i].style.background = 'lightgreen';
    //     newArr[i].style.borderColor = 'darkgreen';
    // }   
    //   newArr[0].style.background = 'lightgreen';
    //     newArr[0].style.borderColor = 'darkgreen';

// }

function joel(){
    newArr.forEach(function(newArr, idx){
        newArr.classList.toggle('done');
        alert('completed');
    })
}


completeBtn[0].addEventListener('click',joel);
completeBtn[1].addEventListener('click',joel);
completeBtn[2].addEventListener('click',joel);


// for (var i = 0 ; i < completeBtn.length; i++) {
//     completeBtn[i].addEventListener('click',joel);
    
//  }

 
// using array on button and adding addEventListener to it 
/*Array.from(completeBtn).forEach(function(completeBtn){
    completeBtn.addEventListener('click',function(completeBtn){
        // console.log('done')
        alert('done')
        
    })
})*/




// completeBtn.addEventListener('click', showing(completeBtn));
//    console.log(completeBtn, 'done')
//   Array.isArray(Array.from(completeBtn))
//     function showing(completeBtn){

//         // return done
//         console.log(completeBtn,'35')
//     }
//     console.log(completeBtn,'check')
//     // Array.forEach(Function)
//     // completeBtn.Style.color = "light-green";

// console.log(Array.isArray(Array.from(completeBtn)))

 

// function remove(){
//     // console.log('not completed')
//     // newArr.splice(0)
//   newArr.reduce
// }
// console.log(deleteBtn)
// deleteBtn[0].addEventListener('click',function(){
//     setTimeout(()=> list.remove(to_do[0]),1000);
// });


// for (var i = 0 ; i < deleteBtn.length; i++) {
//     deleteBtn[i].addEventListener('click', function(){
//         setTimeout(()=> list.removeChild(to_do[0]),1000);
//     })
//  }
// console.log(to_do)

// to_do.forEach(function(to_do){
//     for (var i = 0 ; i < deleteBtn.length; i++) {
//         deleteBtn[i].addEventListener('click', function(){
//             setTimeout(()=> to_do.remove(),1000);
//         })
//      }
// })
deleteBtn.forEach((deleteBtn) => {
    deleteBtn.onclick = () => {
        list.remove();
    }
})


// to_do.forEach(function(to_do){
//     for(let i = 0; i < deleteBtn.length; i++){
//         for(let j = 0; j < to_do.length; i++){
//             deleteBtn[i].addEventListener('click',function(){
//                 setTimeout(() => to_do.remove(to_do[j]),1000);
//             })
//         }
//     }
// })


Array.from(list)
console.log(Array.isArray(Array.from(completeBtn)))
console.log(list)
