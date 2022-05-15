const washBtn = document.getElementById("wash-btn")
const mowBtn = document.getElementById("mow-btn")
const pullBtn = document.getElementById("pull-btn")
const sendBtn = document.getElementById("send-btn")

const ulEl = document.getElementById("ul-el")
const amountEl = document.getElementById("amount-el")
const totalEl = document.getElementById("total-el")

let list = []
let amountList =[]

washBtn.addEventListener("click", function () {
    //check if array contains value, add string to array
    //add amount to array
    let value = this.value
    const amount = 10
    if(list.indexOf(value) === -1){
        list.push(value)
        amountList.push(amount)
    }
    render()
})

mowBtn.addEventListener("click", function () {
    let value = this.value
    const amount = 20
    if(list.indexOf(value) === -1){
        list.push(value)
        amountList.push(amount)
    }
    render()
})

pullBtn.addEventListener("click", function () {

    let value = this.value
    const amount = 30
    if(list.indexOf(value) === -1){
        list.push(value)
        amountList.push(amount)
    }
    render()
})

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
        listItems += `<li class="list-item">
                        ${list[i]}
                        <button class="remove" value="${list[i]}" onclick="removeTask(this.value)">Remove</button>
                    </li>`
        amountItems += `<li class="amount-item">$${amountList[i]}</li>` 
        total += amountList[i]
    }
    ulEl.innerHTML = listItems
    amountEl.innerHTML = amountItems
    totalEl.innerHTML = `$${total}`
}

/**
 * clear the invoice
 * set list to [], render
 */
sendBtn.addEventListener("click", function(){
    list=[]
    render()
})

/**
 * remove an element by passing this.value to the function right in the         onliclick
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

const pageClose= document.querySelector(".close")
pageClose.addEventListener("click", function(){
    window.close()
})