const input = document.getElementById('input')
const button = document.querySelector('#submit-button')
const resetButton = document.querySelector('#reset-button')
const uList = document.querySelector('#todo-list')

button.addEventListener('click', function(event){
  // console.log("clicked");
  input.addEventListener('keydown', (function (event){
    input.style.backgroundColor = 'white'
  }))
  
  if (input.value === '') {
    input.style.backgroundColor = 'salmon'
  } 
  else if (input.value !== '') {
    input.style.backgroundColor = 'white'
    // create li element
    const li = document.createElement('li')
    // console.log(li);
    // set the text of the li element to the input text
    li.textContent = input.value
    // console.log(li);
    // add the li element to the page, inside the ul element
    document.querySelector('ul').appendChild(li)
    // reset the input text to empty string
    input.value = ""
  }
})

uList.addEventListener('click', function(event){
  event.target.style.textDecoration = 'line-through'
})

resetButton.addEventListener('click', function(event){
  uList.removeChild(uList)
})

