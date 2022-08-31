const input = document.getElementById('input')
const button = document.querySelector('#submit-button')
const uList = document.querySelector('#todo-list')

button.addEventListener('click', function(event){
  // console.log("clicked");
  // create li element
  if (input.value === '') {
    null
  } else {
    const li = document.createElement('li')
    // console.log(li);
    // set the text of the li element to the input text
    li.textContent = input.value
    console.log(li);
    // add the li element to the page, inside the ul element
    document.querySelector('ul').appendChild(li)
    // reset the input text to empty string
    input.value = ""
  }
})

