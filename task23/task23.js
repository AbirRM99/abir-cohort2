function openFeatures() {
    var allElems = document.querySelectorAll('.elem')
    var FullElemPage = document.querySelectorAll('.fullElem')
    var FullElemPageBackBtn = document.querySelectorAll('.fullElem .back')
    allElems.forEach(function (elem) {
        elem.addEventListener('click', function () {
            FullElemPage[elem.id].style.display = 'block'
        })
    })
    FullElemPageBackBtn.forEach(function (back) {
        back.addEventListener('click', function () {
            FullElemPage[back.id].style.display = 'none'

        })
    })
}
openFeatures()
let form = document.querySelector('.addTask form')
let taskInput = document.querySelector('.addTask form #task-input')
let taskDetailsInput = document.querySelector('.addTask form textarea')
let taskCheckbox = document.querySelector('.addTask form #check')

// let currentTask = [
//     {
//         task: 'Gym at 7am',
//         details: 'Early Bird',
//         imp: 'true',
//     },
//     {
//         task: 'Cold Shower at 9am',
//         details: 'Discipline Chaiye',
//         imp: 'false',
//     },
//     {
//         task: 'Breakfast at 9:30am',
//         details: 'Time se Khana',
//         imp: 'true',
//     },
//     {
//         task: 'Power Nap 10am to 12pm',
//         details: '8hr Sleep Imp',
//         imp: 'true',
//     },
//     {
//         task: 'Study 12Pm to 3pm',
//         details: 'Grind hi Kehde',
//         imp: 'false',
//     },
//     {
//         task: 'Lunch at 3pm',
//         details: 'Time se Khana',
//         imp: 'true',
//     },
//     {
//         task: 'Study 4pm to 9pm',
//         details: 'Grind Firse',
//         imp: 'false',
//     },
//     {
//         task: 'Dinner at 9pm',
//         details: 'Protien goal hit Krna hai',
//         imp: 'true',
//     },
//     {
//         task: 'Gaming 10pm to 12am',
//         details: 'MindFresh Tem',
//         imp: 'false',
//     },
//     {
//         task: 'Sleep at 12am',
//         details: 'Time Se Sona',
//         imp: 'true',
//     },
// ]

var currentTask = []

if(localStorage.getItem('currentTask')){
    currentTask = JSON.parse(localStorage.getItem('currentTask'));  
}else{
    console.log('Task List is Empty');
}

function renderTask() {
    var allTask = document.querySelector('.allTask')
    var sum = ''
    currentTask.forEach(function (elem) {
        sum += `<div class="task">
                        <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
                        <button>Mark as Completed</button>
                    </div>`
    })
    allTask.innerHTML = sum
}
renderTask()

form.addEventListener('submit', function (e) {
    e.preventDefault()
    // console.log(taskInput.value);
    // console.log(taskDetailsInput.value);
    // console.log(taskCheckbox.checked);      
    currentTask.push({task:taskInput.value,details:taskDetailsInput.value,imp:taskCheckbox.checked})
    localStorage.setItem('currentTask',JSON.stringify(currentTask))
    taskInput.value = ''
    taskDetailsInput.value = ''
    taskCheckbox.checked = ''
    
    renderTask()
})



