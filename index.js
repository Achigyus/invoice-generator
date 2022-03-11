// Define and assign variables
const washCar = document.getElementById("wash-car")
const mowLawn = document.getElementById("mow-lawn")
const pullWeeds = document.getElementById("pull-weeds")
const sendBtn = document.getElementById("send-btn")
let task = document.getElementById("task")
let total = document.getElementById("total")
let notes = document.getElementById("notes")
let totalAmount = document.getElementById("total-amount")
let totalCost = document.getElementById("total-cost")
const services = [
    {name: "Wash car", price: 10},
    {name: "Mow Lawn", price: 20},
    {name: "Pull Weeds", price: 30}
]
sum = 0
function removeWashCar() {
    // alert('button was clicked')
    let taskActive = document.getElementById("task-washcar")
    let costActive = document.getElementById("cost-washcar")
    let parentTask = taskActive.parentNode;
    let costTask = costActive.parentNode
    parentTask.removeChild(taskActive)
    costTask.removeChild(costActive)
    sum = sum - services[0].price
    totalCost.textContent = `$${sum}`
    washCar.disabled = false
}
function removeMowLawn() {
    // alert('button was clicked')
    let taskActive = document.getElementById("task-mowLawn")
    let costActive = document.getElementById("cost-mowLawn")
    let parentTask = taskActive.parentNode;
    let costTask = costActive.parentNode
    parentTask.removeChild(taskActive)
    costTask.removeChild(costActive)
    sum = sum - services[1].price
    totalCost.textContent = `$${sum}`
    mowLawn.disabled = false
}
function removePullWeeds() {
    // alert('button was clicked')
    let taskActive = document.getElementById("task-pullWeeds")
    let costActive = document.getElementById("cost-pullWeeds")
    let parentTask = taskActive.parentNode;
    let costTask = costActive.parentNode
    parentTask.removeChild(taskActive)
    costTask.removeChild(costActive)
    sum = sum - services[2].price
    totalCost.textContent = `$${sum}`
    pullWeeds.disabled = false
}
washCar.addEventListener("click", function() {
    let washPrice = ""
    let cost = ""
    washPrice += `<p class="task-active" id="task-washcar">${services[0].name}<span onclick="removeWashCar()">Remove</span></p>`
    cost += `<p class="cost-active" id="cost-washcar"><span>$</span>${services[0].price}</p>`
    task.innerHTML += washPrice
    total.innerHTML += cost
    washCar.disabled = true
    sum += services[0].price
    totalCost.textContent = "$" + sum
    notes.innerHTML = `<p>NOTES</p><p class="notes-active">We accept cash, credit card, or PayPal</p>`
})
mowLawn.addEventListener("click", function() {
    let washPrice = ""
    let cost = ""
    washPrice += `<p class="task-active" id="task-mowLawn">${services[1].name}<span onclick="removeMowLawn()">Remove</span></p>`
    cost += `<p class="cost-active" id="cost-mowLawn"><span>$</span>${services[1].price}</p>`
    task.innerHTML += washPrice
    total.innerHTML += cost
    mowLawn.disabled = true
    sum += services[1].price
    totalCost.textContent = "$" + sum
    notes.innerHTML = `<p>NOTES</p><p class="notes-active">We accept cash, credit card, or PayPal</p>`

})
pullWeeds.addEventListener("click", function() {
    let washPrice = ""
    let cost = ""
    washPrice += `<p class="task-active" id="task-pullWeeds">${services[2].name}<span onclick="removePullWeeds()">Remove</span></p>`
    cost += `<p class="cost-active" id="cost-pullWeeds"><span>$</span>${services[2].price}</p>`
    task.innerHTML += washPrice
    total.innerHTML += cost
    pullWeeds.disabled = true
    sum += services[2].price
    totalCost.textContent = "$" + sum
    notes.innerHTML = `<p>NOTES</p><p class="notes-active">We accept cash, credit card, or PayPal</p>`

})
sendBtn.addEventListener("click", function() {
    let washPrice = ""
    let cost = ""
    washPrice += `<p>TASK</p>`
    cost += `<p>TOTAL</p>`
    task.innerHTML = washPrice
    total.innerHTML = cost
    pullWeeds.disabled = mowLawn.disabled = washCar.disabled = false
    sum = 0
    totalCost.textContent = "$" + sum
    notes.innerHTML = `<p>NOTES</p>`

})