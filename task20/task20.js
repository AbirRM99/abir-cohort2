const para = document.querySelector("p")
const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text = para.innerText

let iteration = 0

para.addEventListener("mouseenter", function () {

    setInterval(() => {

        const str = text.split('').map(function (char, index) {
            if (index < iteration){
                return char
            }

            return character.split("")[Math.floor(Math.random() * 53)]
        }).join("")
        para.innerText = str

        iteration += 0.68 

    }, 30);

})