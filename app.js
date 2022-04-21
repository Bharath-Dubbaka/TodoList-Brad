// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');
// const select = document.querySelector('select');

// // Clear input
// taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Keydown
// taskInput.addEventListener('keydown', runEvent);
// Keydown
// taskInput.addEventListener('keyup', runEvent);
// Keypress
// taskInput.addEventListener('keypress', runEvent);
// Focus
// taskInput.addEventListener('focus', runEvent);
// Blur
// taskInput.addEventListener('blur', runEvent);
// Cut
// taskInput.addEventListener('cut', runEvent);
// Paste
// taskInput.addEventListener('paste', runEvent);
// Input
// taskInput.addEventListener('input', runEvent);
// // Change
// select.addEventListener('change', runEvent);

// function runEvent(e){
//   console.log(`EVENT TYPE: ${e.type}`);

//   console.log(e.target.value);

//   heading.innerText = e.target.value;

//   // // Get input value
//   console.log(taskInput.value);

//   e.preventDefault();
// }

// // EVENT BUBBLING
// document.querySelector('.card-title').addEventListener('click', function (e){
//   console.log('card-title');
//   } );
// document.querySelector('.card-content').addEventListener('click', function (e){
//   console.log('card-content');
//   } );
//   document.querySelector('.card').addEventListener('click', function (e){
//     console.log('card');
//     } );

//     document.querySelector('.col').addEventListener('click', function (e){
//       console.log('col');
//       } );

//       document.querySelector('.row').addEventListener('click', function (e){
//         console.log('row');
//         } );

// // EVENT DELEGATION

// const deleteItem = document.querySelector('.collection')
// deleteItem.addEventListener('click', runEvent)

// function runEvent (e) {
//   console.log(e.target  );
//   if(e.target.parentElement.classList.contains('delete-item')){
//       e.target.parentElement.parentElement.remove()
//       console.log(" matched with className and removed");
//   }
//   // e.preventDefault()
// }

// // LOCAL STORAGE
// console.log(window.localStorage);
// window.localStorage.setItem("name", "vinod")

// console.log(inputValue)

// document.querySelector('form').addEventListener("submit", submitInput)
// function submitInput (e){
//   const inputValue = document.getElementById('task').value
//     let tasks
//     if(localStorage.getItem("tasks") === null){
//       tasks = []
//     } else {
//       tasks = JSON.parse(localStorage.getItem("tasks"))
//     }
//   tasks.push(inputValue)
//   localStorage.setItem('tasks', JSON.stringify(tasks))
//     // console.log(JSON.parse(localStorage.getItem("tasks")));
//   e.preventDefault()
// }
// // console.log(inputValue);
// const taskList = JSON.parse(localStorage.getItem("tasks"))

// taskList.forEach(eachTask => {
//   console.log(eachTask, "foreach")
// });

const form = document.querySelector("form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector(".filter");

loadAllEventListeners();

function loadAllEventListeners() {
  form.addEventListener("submit", submitInput);
  taskList.addEventListener('click', removeTasks)
  clearBtn.addEventListener('click', clearTasks)
}

function submitInput(e) {
  if (taskInput.value === "") {
    alert("empty");
  } else {
  // create LI dynamic
    let li = document.createElement("li");
    li.className = "collection-item";
    // adding text which is on input
    li.appendChild(document.createTextNode(taskInput.value));
    li.setAttribute("title", "New Item");
    // adding link and cross mark to delete items
    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.href = "#";
    const cross = document.createElement("i");
    cross.className = "fa fa-remove";
    link.appendChild(cross);
    li.appendChild(link);
    // adding LI under UL
    taskList.appendChild(li);
    console.log(li);

    taskInput.value = "";
  }
  // tasks.push(inputValue)
  // localStorage.setItem('tasks', JSON.stringify(tasks))
  // console.log(JSON.parse(localStorage.getItem("tasks")));
  e.preventDefault();
}



function removeTasks(e){

  if(e.target.parentElement.classList.contains('delete-item')){
    console.log(e.target.parentElement.parentElement);
    if(confirm("are you sure")){
      e.target.parentElement.parentElement.remove()
    }
  }
  e.preventDefault();

}


function clearTasks(e) {
  console.log(e.target);
  // taskList.innerHTML = ''
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild)
  }
}

// function fizzBuzz (){
//   for (let i = 1; i<=100; i++){
//       if(i % 15 === 0){
//           console.log("fizzbuzz" + " ")
//       } else if (i % 3 === 0){
//           console.log("fizz"+ " ")
//       }else if (i % 5 === 0){
//           console.log("buzz"+ " ")
//       } else {
//           console.log(i+ " ")
      
//       }

//   // console.log(i)
//   }
// }

// fizzBuzz()

a = false; b = 0 ; console.log(a==b)