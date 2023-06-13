// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorModal = document.getElementById("modal")
errorModal.classList.add("hidden")
//console.log(errorModal.querySelector("p"))

const input = document.querySelectorAll(".like-glyph")
input.forEach(function(element){
  //console.log(element)
  //console.log(typeof(element))
  element.addEventListener('click', function() {
    //Change empty heart to full heart
    if(element.innerHTML === EMPTY_HEART){
      mimicServerCall()
      .then(element.innerHTML = FULL_HEART)
      .then(element.classList.add("activated-heart"))
      .catch(function(error){
        errorModal.classList.remove("hidden")
        errorModal.querySelector("p").innerHTML = error
      })
    } 
    //Change full heart to empty heart
    else {
      mimicServerCall()
      .then(element.innerHTML = EMPTY_HEART)
      .then(element.classList.remove("activated-heart"))
      .catch(function(error){
        errorModal.classList.remove("hidden")
        errorModal.querySelector("p").innerHTML = error
      })
    }
    

  });
  
})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------err------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
