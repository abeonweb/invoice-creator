const taskBtns = document.querySelectorAll(".task-btn")
const sendBtn = document.getElementById("send-btn")
const pageClose= document.querySelector(".close")
const listEl = document.getElementById("list-el")
const amountEl = document.getElementById("amount-el")
const totalEl = document.getElementById("total-el")

let list = []
let amountList =[]

function addToInvoice() {
    //check if array contains value, add string to array
    //add amount to array
    let value = this.value
    const amount = parseInt(this.dataset.amount)
    if(list.indexOf(value) === -1){
        list.push(value)
        amountList.push(amount)
    }
    render()
}

/*
*a list of tasks and corresponding amounts
*push the task into one array, at same time push the *amount to another array
*render by looping through and forming one string for *list items. 
*insert innerHTML of ul element
*/
function render() {
    let listItems = ""
    let amountItems = ""
    let total = 0
    for(let i=0;i<list.length;i++){
        listItems += `
        <li class="list-item">
            ${list[i]}
            <button class="remove" value="${list[i]}" onclick="removeTask(this.value)">Remove</button>
        </li>`

        amountItems += `<li class="amount-item">$${amountList[i]}</li>` 
        total += amountList[i]
    }
    listEl.innerHTML = listItems
    amountEl.innerHTML = amountItems
    totalEl.innerHTML = `$${total}`
}

/**
 * remove an element by passing this.value to the function right in the onclick
 * making the value of the button the same as the list item
 * use that value to match and not include item in list
 */
function removeTask(value){
    let newList =[]
    let newAmountList =[]
    if(value){//not undefined, proceed to remove
        for(let i=0;i<list.length;i++){
            if(value === list[i]) continue
            
            newList.push(list[i])
            newAmountList.push(amountList[i])
        }
        //reassign list and amountList
        list = newList
        amountList = newAmountList
        render()
    }
}

/**
 * clear the invoice
 * set list, amountList to [], render
 */
function reset(){
    list=[]
    amountList=[]
    render()
}

taskBtns.forEach(btn => btn.addEventListener("click", addToInvoice))
sendBtn.addEventListener("click", reset)
pageClose.addEventListener("click", reset)
