// var btn = document.querySelector('button')
// var box = document.querySelector('#box')

// btn.addEventListener('click',function(){
//     var c1 = Math.floor(Math.random()*256)
//     var c2 = Math.floor(Math.random()*256)
//     var c3 = Math.floor(Math.random()*256)
    
//     box.style.backgroundColor = `rgb(${c1},${c2},${c3})`

// })

var arr = [
    {
        team: 'Barcelona',
        primary: 'red',
        secondary: 'blue'
    },
    {
        team: 'Real Madrid',
        primary: 'white',
        secondary: 'black'
    },
    {
        team: 'Chelsea',
        primary: 'blue',
        secondary: 'green'
    },
    {
        team: 'Man City',
        primary: 'blue',
        secondary: 'red'
    },
]


var btn = document.querySelector('button')
var h1 = document.querySelector('h1')
var body = document.querySelector('body')

btn.addEventListener('click',function(){
    var winner = arr[Math.floor(Math.random()*arr.length)]
    h1.innerHTML = winner.team
    h1.style.backgroundColor = winner.secondary  
    body.style.backgroundColor = winner.primary    
})

