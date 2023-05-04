//GET NAME FROM LOCAL STORAGE AND LOG
function storeName(){
  const main_page_btn = document.getElementById('submit_button');

  main_page_btn.addEventListener('click', () => {
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;
      if (first_name === '' || last_name === ''){
      alert('Please Enter a Valid Name');
      return;
      }
    // SET NAMES TO LOCAL STORAGE
    localStorage.setItem("first_name", first_name);
    localStorage.setItem("last_name", last_name);

    //SEND TO GAME
    location.href="activity_game.html";
  }); 
}
storeName();

//IF USER HITS ENTER
function return_key(){
  let input = document.getElementById("last_name");

  input.addEventListener("keypress",(event) => {
    if (event.key === "Enter") {
     document.getElementById('submit_button').click();
      }
  });
}
return_key();
