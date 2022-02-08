// change menu icon
const burgerIcon = document.querySelector('label')
// console.log(burgerIcon);

burgerIcon.addEventListener('click', function(e){
    // console.log(e);

    console.log(e.target);

    if (e.target.tagName === "I") {
        closeIcon(e.target);
        // NEED TO RMB TO PASS IN ARGUMENT!
    }
})

function closeIcon(iconUpdate) {

    iconUpdate.classList.toggle('fa-bars');
    iconUpdate.classList.toggle('fa-times');       
}


// form submission response for .messageForm
    // when user submits* the form
        // display a thank you message (toggle the display between the form and this message?)
    // Need to write HTML code (to append the code here?)

    // 1. identify/target the item
const formElement = document.querySelector('form');
    console.log(formElement);

const commentFormElement = document.querySelectorAll('.commentForm');

// begin selecting target elements to append comment onto the comment section
    const ulElement = document.getElementById('commentContainer');
    // console.log(ulElement);

    const commentSection = document.querySelector('.commentContainer');

    // 2. add event listener
formElement.addEventListener('submit', function(e){
    e.preventDefault();
    // when the user clicks submit, we need to run method to allow the html to be changed

    const userName = document.getElementById('name');
    // console.log(userName);
    const name = userName.value;
    // console.log(name);

    const userEmail = document.getElementById('email');
    const email = userEmail.value;

    const userMessage = document.querySelector('textarea');
    // console.log(userMessage);
    const message = userMessage.value;
    
    // we want to make sure all sections are completed, so we need to ensure input values are true. So, we target the parent, and then find the value and ensure that the value is true
    if (name && email && message) {
        formElement.innerHTML = '<p class="thnx blogThnkUMsg">Thank you for the submission!</p>';

        // appending comment into comment part of blog.html (but I don't know how to add picture or the date of comment posting)
        if (commentFormElement) {
            const textDivElement = document.createElement('div');
            textDivElement.className = "textContainer";
            
            const imgDivElement = document.createElement('div');
            imgDivElement.className = "imgContainer";
            
            const listElement = document.createElement('li');
            // console.log(listElement);
            listElement.className = "commentPost";
            
            const paragraphElement = document.createElement('p');
            paragraphElement.className = "bodyText";
            
            paragraphElement.textContent = message;
            // console.log(paragraphElement.textContent);
            
            textDivElement.appendChild(paragraphElement);
            // console.log('listElement');
            
            listElement.appendChild(imgDivElement);
            listElement.appendChild(textDivElement);
            
            ulElement.appendChild(listElement);
        }

        
    } else {
        alert("Please complete the form.");
    } 
});
