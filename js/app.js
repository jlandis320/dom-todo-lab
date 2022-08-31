const input = document.getElementById('input')
const button = document.querySelector('#submit-button')
const uList = document.querySelector('#todo-list')

button.addEventListener('click', function(evt){
  // console.log("clicked");
  // create li element
  const li = document.createElement('li')
  // console.log(li);
  // set the text of the li element to the input text
  li.textContent = input.value
  console.dir(li);
  // reset the input text to empty string
  // add the li element to the page, inside the ul element

})