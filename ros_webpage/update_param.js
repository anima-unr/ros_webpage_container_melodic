function update_actual_param(){

  // var ros2 = new ROSLIB.Ros({
  //   url : 'ws://134.197.95.122:9090'
  // });
//if(mode==false){

//  mode = true;
// if(sessionStorage.getItem("final_main")){
//   alert("please start from the beginning");
// }
// else{
// sessionStorage.setItem("final_main",true);
document.getElementById('next_page_main').style.display = 'block';
// document.getElementById('update_param_main').style.display = 'none';

//}
  param_value_robot.set(true);
//user_value_robot.set(true);


  // var ros = new ROSLIB.Ros({
  //   url : 'ws://134.197.95.122:9091'
  // });


  param_value_human.set(true);
var date = new Date();
var year = date.getFullYear();
var day = date.getDate();
var hours = date.getHours();
// Minutes part from the timestamp
var minutes =  date.getMinutes();
// Seconds part from the timestamp
var seconds =  date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = year + ':' + day + ':' + hours  + minutes  + seconds;

  var uID_val = new ROSLIB.Param({
    ros : ros,
    name : '/uID'
  });

 uID_val.set(formattedTime);

  var uID_val = new ROSLIB.Param({
    ros : ros2,
    name : '/uID'
  });

 uID_val.set(formattedTime);
console.log("updating param"+ param_value_human);
game_robot();
game_human();
window.location.href = 'marker.html';
//}

}

function update_practice_param(){
//if(mode==false){
//resetTimer();
//  mode = true;
confirm_next_page = true;
document.getElementById('next_page_practice').style.display = 'block';
// document.getElementById('update_param_practice').style.display = 'none';

//}


  var ros2 = new ROSLIB.Ros({
    url : 'ws://134.197.40.54:9090'
  });


  param_value_robot.set(false);

  var ros = new ROSLIB.Ros({
    url : 'ws://134.197.40.54:9091'
  });



  param_value_human.set(false);
 param_value_robot.set(false);
//user_value_human.set(true);
game_robot();
game_human();
window.location.href = 'marker.html';
}
function update_practice_param_first(){
//if(mode==false){
//resetTimer();
//  mode = true;

// if(sessionStorage.getItem("practice_param_first_session")=="true"){
//   sessionStorage.setItem("practice_param_first_session",false);
// confirm_next_page = true;

document.getElementById('next_page_practice').style.display = 'block';
//document.getElementById('practice_session_button').style.display = 'none';
document.getElementById('practice_session_button').style.display = 'block';
//}


  var ros2 = new ROSLIB.Ros({
    url : 'ws://134.197.40.54:9090'
  });


  param_value_robot.set(false);

  var ros = new ROSLIB.Ros({
    url : 'ws://134.197.40.54:9091'
  });



  param_value_human.set(false);
 param_value_robot.set(false);
//user_value_human.set(true);
game_robot();
game_human();
window.location.href='marker.html';
}
//else{
//   alert("please start from the beginning by refreshing the page or finish the game");
// }
//}



