class Activity {
  constructor(activity, type, cost){
  this._activity = activity;
  this._type = type;
  this._cost = cost;

}

get activity(){
  return this._activity;

}

get type(){ 
  return this._type;

}

get cost(){
  return this._cost;
}

}
const baseball = new Activity('Play Baseball', 'physical sport', 10);
const golf =  new Activity('Play Golf', 'Aggarvating Game', 100);
const gym = new Activity('Lift Weights', 'Muscle Building', 0);
const swimming = new Activity('swim', 'Cardio', 0);
const pickelBall =  new Activity('Pickel Ball', 'Fun Game', 40);
const tennis = new Activity('Tennis', 'Physical Sport', 5);

const array = [baseball, golf, gym];
array.push(swimming, pickelBall, tennis);

function activeActivity(){
  let randomNumber = Math.floor(Math.random() * 3);
  console.log(array[randomNumber]._activity);
  document.querySelector('.activityContainer').innerHTML = 
    `<h2>Active activity for today is: <br> <br> ${array[randomNumber]._activity}. <br><br>
    This activity is: <br><br> ${array[randomNumber]._type}</h2> <br><br>`
}