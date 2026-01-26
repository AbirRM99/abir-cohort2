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

function todoList() {
    let form = document.querySelector('.addTask form')
    let taskInput = document.querySelector('.addTask form #task-input')
    let taskDetailsInput = document.querySelector('.addTask form textarea')
    let taskCheckbox = document.querySelector('.addTask form #check')

    var currentTask = []

    if (localStorage.getItem('currentTask')) {
        currentTask = JSON.parse(localStorage.getItem('currentTask'));
    } else {
        console.log('Task List is Empty');
    }

    function renderTask() {
        var allTask = document.querySelector('.allTask')
        var sum = ''
        currentTask.forEach(function (elem, idx) {
            sum += `<div class="task">
        <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
        <button id=${idx}>Mark as Completed</button>
        </div>`
        })
        allTask.innerHTML = sum
        localStorage.setItem('currentTask', JSON.stringify(currentTask))

        document.querySelectorAll('.task button').forEach(function (btn) {
            btn.addEventListener('click', function () {
                currentTask.splice(btn.id, 1);
                renderTask()
            })
        })

    }
    renderTask()
    form.addEventListener('submit', function (e) {
        e.preventDefault()
        // console.log(taskInput.value);
        // console.log(taskDetailsInput.value);
        // console.log(taskCheckbox.checked);      
        currentTask.push({ task: taskInput.value, details: taskDetailsInput.value, imp: taskCheckbox.checked })
        renderTask()

        taskCheckbox.checked = false
        taskInput.value = ''
        taskDetailsInput.value = ''
    })
}
todoList()


function dailyPlanner(){
    var dayPlanner = document.querySelector('.day-planner')

var dayPlanData = JSON.parse(localStorage.getItem('dayPlanData')) || {}

var hours = Array.from({ length: 18 }, (_, idx) => `${6 + idx}:00 - ${7 + idx}:00`)
var wholeDaySum = ''
hours.forEach(function (elem, idx) {

    var savedData = dayPlanData[idx] || ''

    wholeDaySum = wholeDaySum + `<div class="day-planner-time">
                    <p>${elem}</p>
                    <input id=${idx} type="text" placeholder="..." value=${savedData}>
                </div>`
})


dayPlanner.innerHTML = wholeDaySum


var dayPlannerInput = document.querySelectorAll('.day-planner input')

dayPlannerInput.forEach(function (elem) {
    elem.addEventListener('input', function () {
        dayPlanData[elem.id] = elem.value

        localStorage.setItem('dayPlanData', JSON.stringify(dayPlanData))

    })
})
}
dailyPlanner()

async function fetchQuote(){
    let response = await fetch('https://api.quotable.io/quotes/random')
    console.log(response);
    
}
fetchQuote()