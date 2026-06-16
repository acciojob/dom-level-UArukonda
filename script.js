//your JS code here. If required.
let item = document.getElementById("level")
let count = 0

while(item.parentNode){
	count++
	item = item.parentNode
}

console.log(`The level of the element is: ${count}`)