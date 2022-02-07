// change menu icon
const burgerIcon = document.querySelector('label')
console.log(burgerIcon);

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
const messageSubmission = document.querySelector('form');
    // console.log(messageSubmission);

    // 2. add event listener
messageSubmission.addEventListener('submit', function(e){
    e.preventDefault();
    // when the user clicks submit, we need to run method to allow the html to be changed

        // we want to make sure all sections are completed, so we need to ensure input values are true. So, we target the parent, and then find the value and ensure that the value is true
    const userName = document.getElementById('name');
    // console.log(userName);
    const name = userName.value;
    // console.log(name);

    const userEmail = document.getElementById('email');
    const email = userEmail.value;

    const userMessage = document.querySelector('textarea');
    // console.log(userMessage);
    const message = userMessage.value;
    
    if (name && email && message) {
        messageSubmission.innerHTML = '<p class="thnx blogThnkUMsg">Thank you for the submission!</p>';
        
    } else {
        alert("Please complete the form.");
    } 
});



// appending comment into comment part of blog.html
// const commentPosting = document.getElementById('commentContainer');
// // console.log(commentPosting);

// commentPosting.addEventListener('submit', function(e){
//     console.log(e);



// })
// function updateComment() {
//     const userName = document.getElementById('name');
//     // console.log(userName);
//     const name = userName.value;
//     // console.log(name);

//     const userEmail = document.getElementById('email');
//     const email = userEmail.value;

//     const userMessage = document.querySelector('textarea');
//     // console.log(userMessage);
//     const message = userMessage.value;

//     const listElement = document.createElement('li');
//         // console.log(listElement);


//     const paragraphElement = document.createElement('p');
//     paragraphElement.textContent = message;
//         // console.log(paragraphElement.textContent);
        
//     listElement.appendChild(paragraphElement);
//         // console.log('listElement');

//     const ulElement = document.getElementById('commentContainer');
//         // // console.log(ulElement);
//     ulElement.appendChild('listElement');
// }
