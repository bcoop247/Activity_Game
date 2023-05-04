//LOG USER INPUT FROM LOCAL STORAGE
function set_user_name(){
    let container = document.querySelector('#welcome');
    const get_first_name = localStorage.getItem("first_name");
    const get_last_name = localStorage.getItem("last_name");
    container.innerHTML = `Welcome, ${get_first_name} ${get_last_name}!`;  
}
set_user_name();

function activityOnButtonClick(){
    //PROMISE
   fetch("https://www.boredapi.com/api/activity") 
   .then(response => {
    return (response.json());   //If promise is completed successfully parse from JSON format and return.
   })
// IF PROMISE SUCCEEDS
   .then(data => {
        const btn = document.querySelector('#activity_button');
            btn.addEventListener("click", () => {
            let cost = data.price;
            cost *= 10;
            const activity = data;
            const activityContainer = document.querySelector('.activity_container');
      activityContainer.innerHTML = `<h2>${activity.activity}</h2>`; 
      activityContainer.innerHTML += `<h2>The activity type is: ${activity.type}`;
      activityContainer.innerHTML += `<h2> Number of Participants Required: ${activity.participants}</h2>`;
    //   activityContainer.innerHTML += `<h2>Cost of Activity: $${cost}.00</h2>`;
      
    });
   })
}
activityOnButtonClick();
 
//GET ACTIVITY BY ITS "TYPE"
function activityByType(){
 let form = document.getElementById('form');
 form.addEventListener('submit', event => {
    event.preventDefault();   //PREVENT THE FORM FROM AUTO SUBMITTING
       let userSelection = document.getElementById('activityType').value;
       // FETCHES API DATA BASED ON WHICH "TYPE" THE USER CHOOSES
             if (userSelection === 'recreational'){
            // PROMISE
               fetch('https://www.boredapi.com/api/activity?type=recreational')
               .then(response => {
                   return (response.json());
               })
               .then(data => {
                
                   const activity = data;
                   const activityContainer = document.querySelector('.activityContainer');
                   activityContainer.innerHTML = `<h2>You should: ${activity.activity} !</h2>`;
                   activityContainer.innerHTML += `<h2>This activity is considered: ${activity.type}`;
                   activityContainer.innerHTML += `<h2> Number of Participants Required: ${activity.participants}</h2>`;
                //    activityContainer.innerHTML += `<h2>Cost of Activity: $${activity.price}</h2>`;
                   console.log(data);
                   
               })

           }else if (userSelection === 'educational'){
               fetch('https://www.boredapi.com/api/activity?type=education')
               .then(response => {
                   return (response.json());
               })
               .then(data => {
                   const activity = data;
                   const activityContainer = document.querySelector('.activityContainer');
                   activityContainer.innerHTML = 
                   `<h2>We recommend that you: ${activity.activity}
                   <br>
                   <br>
                   Improve your ${activity.type}!
                   </h2>
                   `;
                   
                   console.log(data);
               })
               
           }else if (userSelection === 'social'){
               fetch('https://www.boredapi.com/api/activity?type=social')
               .then(response => {
                   return (response.json());
               })
               .then(data => {
                   const activity = data;
                   const activityContainer = document.querySelector('.activityContainer');
                   activityContainer.innerHTML = 
                   `<h2>Maybe you should ${activity.activity}!</h2>`;
               })

           }else if (userSelection === 'relaxation'){
               fetch('https://www.boredapi.com/api/activity?type=relaxation')
               .then(response => {
                   return (response.json());
               })
               .then(data => {
                   const activity = data;
                   const activityContainer = document.querySelector('.activityContainer');
                   activityContainer.innerHTML = 
                   `<h2>Relax and ${activity.activity}.</h2>`;
               })
            } else if (userSelection === 'active'){
            //FROM class.js FILE
            activeActivity(); 
           }
   })
}

// RENDERS MULTIPLE ACTIVITIES BASED ON USER NUMBER INPUT
function enterNumber(){
    let container = '';
    let form = document.getElementById('form2');
    form.addEventListener('submit', event => { 
    event.preventDefault();
    let userNumber = document.getElementById('userInput').value;
        //LOOPS BASED ON USER NUMBER INPUT
        for(let index = 0; index < userNumber; index++){
            fetch('https://www.boredapi.com/api/activity')
            .then(response => {
            return (response.json());
            })
            .then(data => {
            container = document.querySelector('.inputContainer');
            container.innerHTML += `<h2>${data.activity} <br></h2>`;

            //CLEAR THE INPUT FIELD
            form.reset();
            })
        }
    });
}
enterNumber();

//RESET BUTTON FOR FIRST OPTION
function firstReset(){
    let resetBtn = document.getElementById('3rdBtn');
    resetBtn.addEventListener('click', () => {
        document.querySelector('.activity_container').innerHTML = '';
        // CALL THE CLICK BUTTON FUNCTION TO RELOAD IT.
        activityOnButtonClick();
        
    })
}

//RESET BUTTON FOR SECOND OPTION
function secondReset (){
    let resetBtn = document.getElementById('2ndBtn');
    resetBtn.addEventListener('click', () => {
        document.querySelector('.activityContainer').innerHTML = '';
    } )
}

//RESET BUTTON FOR THIRD USER OPTION
function resetButton(){
    let resetBtn = document.getElementById('resetButton');
        resetBtn.addEventListener('click', () => {
            document.querySelector('.inputContainer').innerHTML = '';
        })
}

resetButton();
activityByType();
secondReset();
firstReset();




