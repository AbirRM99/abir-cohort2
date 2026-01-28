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


function dailyPlanner() {
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

function motivationalQuotePage() {

    var motivationQuote = document.querySelector('.motivation-2 h1')
    var motivationAuthor = document.querySelector('.motivation-3 h2')

    async function fetchQuote() {
        let response = await fetch('https://api.quotable.io/quotes/random')
        let data = await response.json()
        motivationQuote.innerHTML = data[0].content
        motivationAuthor.innerHTML = '- ' + data[0].author

    }
    fetchQuote()
}
motivationalQuotePage()

function pomodoroTimer() {
    let timer = document.querySelector('.pomo-timer h1')
    var startbtn = document.querySelector('.pomo-timer .start-timer')
    var pausebtn = document.querySelector('.pomo-timer .pause-timer')
    var resetbtn = document.querySelector('.pomo-timer .reset-timer')
    var session = document.querySelector('.pomodoro-fullpage .session')
    var isWorkSession = true

    let totalSeconds = 1500
    var timerInterval = null

    function updateTime() {
        let minutes = Math.floor(totalSeconds / 60)
        let seconds = totalSeconds % 60

        timer.innerHTML = `${String(minutes).padStart('2', '0')}:${String(seconds).padStart('2', '0')}`
    }

    function startTimer() {
        clearInterval(timerInterval)
        if (isWorkSession) {
            timerInterval = setInterval(() => {
                if (totalSeconds > 0) {
                    totalSeconds--
                    updateTime()
                } else {
                    isWorkSession = false
                    clearInterval(timerInterval)
                    timer.innerHTML = '05:00'
                    session.innerHTML = 'Break Time'
                    session.style.backgroundColor = 'rgb(0, 179, 255)'
                    totalSeconds = 5 * 60
                }
            }, 1000);
        }
        else {
            timerInterval = setInterval(() => {
                if (totalSeconds > 0) {
                    totalSeconds--
                    updateTime()
                } else {
                    isWorkSession = true
                    clearInterval(timerInterval)
                    timer.innerHTML = '25:00'
                    session.innerHTML = 'Work Session'
                    session.style.backgroundColor = 'rgb(9, 138, 89)'
                    totalSeconds = 25 * 60
                }
            }, 1000);
        }

    }
    function pauseTimer() {
        clearInterval(timerInterval)
    }
    function resetTimer() {
        clearInterval(timerInterval)
        totalSeconds = 1500
        updateTime()
    }

    startbtn.addEventListener('click', startTimer)
    pausebtn.addEventListener('click', pauseTimer)
    resetbtn.addEventListener('click', resetTimer)
}
pomodoroTimer()

function weatherFunctionality() {
    let apiKey = `5b309c33f2c94abfb1b120616262801`

    var city = 'Raipur'

    var headerTime = document.querySelector('.header1 h1')
    var headerDate = document.querySelector('.header1 h2')
    var headerTemp = document.querySelector('.header2 h2')
    var headerCondition = document.querySelector('.header2 h4')
    var Precipitation = document.querySelector('.header2 .Precipitation')
    var humidity = document.querySelector('.header2 .Humidity')
    var wind = document.querySelector('.header2 .wind')
    var data = null
    async function weatherAPICall() {
        var response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
        data = await response.json()

        headerTemp.innerHTML = `${data.current.temp_c}°C`
        headerCondition.innerHTML = `${data.current.condition.text}`
        wind.innerHTML = `Wind: ${data.current.wind_kph} km/h`
        humidity.innerHTML = `Humidity: ${data.current.humidity}%`
        Precipitation.innerHTML = `Heat Index: ${data.current.heatindex_c}%`
    }

    weatherAPICall()


    function timeDate() {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const monthName = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var date = new Date()
        var totalDaysOfWeek = daysOfWeek[date.getDay()]
        var hours = date.getHours()
        var minutes = date.getMinutes()
        var secondo = date.getSeconds()
        var dates = date.getDate()
        var month = monthName[date.getMonth()]
        var year = date.getFullYear()

        headerDate.innerHTML = `${dates} ${month}, ${year}`

        if (hours > 12) {
            headerTime.innerHTML = `${String(totalDaysOfWeek).padStart('2', '0')}, ${String(hours - 12).padStart('2', '0')}:${String(minutes).padStart('2', '0')}:${String(secondo).padStart('2', '0')} PM`
        } else {
            headerTime.innerHTML = `${String(totalDaysOfWeek).padStart('2', '0')}, ${String(hours).padStart('2', '0')}:${String(minutes).padStart('2', '0')}:${String(secondo).padStart('2', '0')} AM`
        }
    }

    setInterval(() => {
        timeDate()
    }, 1000);
}
weatherFunctionality()

function themeChanger() {
    var theme = document.querySelector('.theme')
    var rootElement = document.documentElement
    var flag = 0
    theme.addEventListener('click', function () {
        // --pri: #F8F4E1;
        // --sec: #381c0a;
        // --tri1: #FEBA17;
        // --tri2: #74512D;

        if (flag == 0) {
            rootElement.style.setProperty('--pri', '#F8F4E1')
            rootElement.style.setProperty('--sec', '#222831')
            rootElement.style.setProperty('--tri1', '#948979')
            rootElement.style.setProperty('--tri2', '#393E46')
            flag = 1
        } else if (flag == 1) {
            rootElement.style.setProperty('--pri', '#F1EFEC')
            rootElement.style.setProperty('--sec', '#030303')
            rootElement.style.setProperty('--tri1', '#D4C9BE')
            rootElement.style.setProperty('--tri2', '#123458')
            flag = 2
        } else if (flag == 2) {
            rootElement.style.setProperty('--pri', '#F8F4E1')
            rootElement.style.setProperty('--sec', '#381c0a')
            rootElement.style.setProperty('--tri1', '#FEBA17')
            rootElement.style.setProperty('--tri2', '#74512D')
            flag = 0
        }
    })
}
themeChanger()