var grow = 0
var btn = document.querySelector('button')
var inner = document.querySelector('.inner')
var h2 = document.querySelector('h2')

btn.addEventListener('click',function(){
    btn.style.pointerEvents = 'none'
    var num = 50 + Math.floor(Math.random()*101)
    var int = setInterval(() => {
        grow++
        h2.innerHTML = grow+'%'
        inner.style.width = grow+'%'
    }, num);

    setTimeout(() => {
        clearInterval(int)
        btn.innerHTML = 'Downloaded'
        console.log('Downloaded in',num/10, 'seconds');
        btn.style.opacity = 0.5
    }, num*100);

    
})