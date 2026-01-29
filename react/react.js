// let h1 = React.createElement('h1',null,'Mai Hu khalnayak')
// let h2 = React.createElement('h2',null,'Mai Hu Leo messi')

// let div = React.createElement('div',null,[h1,h2])

// var container = document.querySelector('.container')
// let root = ReactDOM.createRoot(document.querySelector('.container'))
// root.render(h1)
// root.render(div)


import h1 from "./test.js";

var root = ReactDOM.createRoot(document.querySelector('.container'))
root.render(h1())