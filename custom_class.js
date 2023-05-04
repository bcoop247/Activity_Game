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
const baseball = new Activity('Play Baseball', 'Physical Sport', 10);
const golf =  new Activity('Play Golf', 'Stupid Game', 100);
const gym = new Activity('Go to Gym', 'Exercise', 0);
const swimming = new Activity('Go Swimming', 'Exercise', 0);
const pickelBall =  new Activity('Pickel Ball', 'Game', 40);
const tennis = new Activity('Tennis', 'Physical Sport', 5);

const array = [baseball, golf, gym];
array.push(swimming, pickelBall, tennis);

function activeActivity(){
  let randomNumber = Math.floor(Math.random() * 3);
  console.log(array[randomNumber]._activity);
  document.querySelector('.activityContainer').innerHTML = 
    `<h2>Get out of the house and ${array[randomNumber]._activity}. 
    This activity is considered a ${array[randomNumber]._type}</h2> <br><br>`
}