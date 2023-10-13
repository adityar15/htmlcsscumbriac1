// console.log('Hello World')

// let firstname



// firstname = "Adi"

// const tax = 40
// const vat = 40

// // let total = vat / tax

// // console.log(total)

// let total = "197"
// let firstTimeUser = true

// let canHaveDiscount = total == 200 || firstTimeUser
// console.log(canHaveDiscount)

// let isEqual = total == 197

// let provideDiscount = firstTimeUser != true

// let statement1 = "This is JS session"
// let statement2 = "This is after break"

// console.log(statement1 + " " + statement2)


// function calculate(num1, num2) {
//     let sum = num1 + num2 
//     let sub = num1 - num2
//     let mul = num1 * num2
//     let div = num1 / num2

//     return sum + sub + mul + div
// }

// console.log(calculate(10, 20))
// console.log(calculate(55, 65))


// let names = ["Aditya", "Adi", {
//     name: "Aditya"
// }]

// let person = {
//     name: "Aditya",
//     profession: "Self Employed"
// }

// for(let i = 0; i < names.length; i++)
// {
// //    alkdajsdkl
// }


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]


// const evenNumbers = numbers.filter(
//     (number) => {
//         return number % 2 == 0
//     }
// )

// console.log(evenNumbers)


// const squares = evenNumbers.map(
//     (number)=>{
//         return number * number
//     }
// )

// console.log(squares)


window.addEventListener('load', (event)=>{
    const h1 = document.getElementById("main-title")
    h1.innerHTML = "Changed using JS"

    const button = document.querySelector("#btn")

    button.addEventListener('click', (event)=>{
        h1.innerHTML = "Welcome back"
        h1.style.color = "blue"
        setTimeout(() => {
            h1.innerHTML = "Changed using JS"
        }, 2000)

    })


    const button2 = document.querySelector("#new-ele")

    button2.addEventListener('click', (event)=>{
        const newElement = document.createElement("a")
        newElement.innerHTML = "New Link"
        newElement.href = "https://google.com"
        document.body.appendChild(newElement)
    })

    const form = document.querySelector("#contact-form")

    form.addEventListener("submit", (event)=>{
        event.preventDefault()

        const formData = new FormData(form)

        const data = Object.fromEntries(formData.entries())

        console.log("formData", formData)
        console.log("data", data)
    })

})


window.addEventListener('load', (event) =>{
    const form = document.querySelector("#todo-form")

    const list = document.querySelector("#list-items")

    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())

        const li = document.createElement("li")
        li.innerHTML = data.todo
        list.appendChild(li)
    }) 
})