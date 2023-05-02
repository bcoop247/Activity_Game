//GET NAME FROM LOCAL STORAGE AND LOG
function storeName(){
  const main_page_btn = document.getElementById('submit_button');
  main_page_btn.addEventListener('click', () => {
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;

    // SET NAMES TO LOCAL STORAGE
    localStorage.setItem("first_name", first_name);
    localStorage.setItem("last_name", last_name);

    //SEND TO GAME
    location.href="activity_game.html";
  }); 
}
storeName();

//USER HITS ENTER
function return_key(){
  let input = document.getElementById("last_name");
  input.addEventListener("keypress",(event) => {
    if (event.key === "Enter") {
      // event.preventDefault();
      console.log('testing');
      document.getElementById('submit_button').click();
      location.href="activity_game.html";
    }
  });
}
return_key();