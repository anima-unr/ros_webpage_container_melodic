function letskill(){
  var ros2 = new ROSLIB.Ros({
    url : 'ws://134.197.40.54:9090'
  });
  var ros = new ROSLIB.Ros({
    url : 'ws://134.197.40.54:9091'
  });

    var user_value_human = new ROSLIB.Param({
    ros : ros,
    name : '/user_param'
  });
      var user_value_robot = new ROSLIB.Param({
    ros : ros2,
    name : '/user_param'
  });
  var game_param_mode = new ROSLIB.Param({  // game_mode_param will show if the practice session or experimental session
     ros : ros,
     name :  '/game_mode_param'
    });
game_param_mode.get(function(value) {
if(value){
      user_value_robot.set(false);
  
  user_value_human.set(false);
}

});


  var testStr1_kill = new ROSLIB.Topic({
    ros : ros2,
    name : '/kill_1',
    messageType : 'std_msgs/Empty'
  });
var str = new ROSLIB.Message({

});

   // And finally, publish.
   testStr1_kill.publish(str);


    var testStr2_kill = new ROSLIB.Topic({
    ros : ros2,
    name : '/kill_2',
    messageType : 'std_msgs/Empty'
  });
var str = new ROSLIB.Message({
  
});
testStr2_kill.publish(str);
  var testStr3_kill = new ROSLIB.Topic({
    ros : ros2,
    name : '/kill_3',
    messageType : 'std_msgs/Empty'
  });
var str = new ROSLIB.Message({
  
});
testStr3_kill.publish(str);

  var testStr4_kill = new ROSLIB.Topic({
    ros : ros2,
    name : '/kill_4',
    messageType : 'std_msgs/Empty'
  });
var str = new ROSLIB.Message({
  
});
testStr4_kill.publish(str);

  var testStr5_kill = new ROSLIB.Topic({
    ros : ros,
    name : '/kill_1',
    messageType : 'std_msgs/Empty'
  });
var str = new ROSLIB.Message({

});

   // And finally, publish.
   testStr5_kill.publish(str);

  var testStr6_kill = new ROSLIB.Topic({
    ros : ros,
    name : '/kill_2',
    messageType : 'std_msgs/Empty'
  });
var str = new ROSLIB.Message({
  
});
testStr6_kill.publish(str);
  var testStr7_kill = new ROSLIB.Topic({
    ros : ros,
    name : '/kill_3',
    messageType : 'std_msgs/Empty'
  });
var str = new ROSLIB.Message({
  
});
testStr7_kill.publish(str);
  var testStr8_kill = new ROSLIB.Topic({
    ros : ros,
    name : '/kill_4',
    messageType : 'std_msgs/Empty'
  });
var str = new ROSLIB.Message({
  
});
testStr8_kill.publish(str);
    var testStr9 = new ROSLIB.Topic({
    ros : ros,
    name : '/kill_basic_control',
    messageType : 'std_msgs/Empty'
  });
  var str = new ROSLIB.Message({
     
  });

   // And finally, publish.
   testStr9.publish(str);
var testStr10 = new ROSLIB.Topic({
    ros : ros,
    name : '/kill_hand_intention',
    messageType : 'std_msgs/Empty'
  });
  var str = new ROSLIB.Message({
     
  });

   // And finally, publish.
   testStr10.publish(str);
var testStr11 = new ROSLIB.Topic({
    ros : ros,
    name : '/kill_int_marker',
    messageType : 'std_msgs/Empty'
  });
  var str = new ROSLIB.Message({
     
  });

   // And finally, publish.
   testStr11.publish(str);

  //param_value_human.set(false);
}
// function starting(){
//   var ros = new ROSLIB.Ros({
//     url : 'ws://134.197.95.122:9091'
//   });
// var testStr6_start = new ROSLIB.Topic({
//     ros : ros,
//     name : '/THEN_0_0_001_parent',
//     messageType : 'robotics_task_tree_msgs/ControlMessage'
//   });
// var str = new ROSLIB.Message({
// sender : {
//     type : 0, 
//     robot : 0, 
//     node : 0
//   },
//   type: 0,
//   activation_level : 10000000000.0,
//   activation_potential : 0.0,
//   done : false,
//   active : false,
//   highest : {
//     type : 0, 
//     robot : 0, 
//     node : 0
//   },
//   parent_type : 0,
//   collision : false,
//   robotPlacing : false,
//   humanPlacing : false,
//   peerUndone : false,
//   simstate_obj_name : '',
//   simstate_obj_pose :{
//     position : {
//       x : 0.0, 
//       y : 0.0, 
//       z : 0.0
//     },
//     orientation : {
//       x : 0.0, 
//       y : 0.0, 
//       z : 0.0, 
//       w : 0.0
//     }},
//   simstate_robot_id : 0,
//   simstate_robot_pose :{
//     position : {
//       x : 0.0, 
//       y : 0.0, 
//       z : 0.0
//     },
//     orientation : {
//       x : 0.0, 
//       y : 0.0, 
//       z : 0.0, 
//       w : 0.0
//     }},
//   simstate_robot_goal :{
//     position : {
//       x : 0.0, 
//       y : 0.0, 
//       z : 0.0
//     },
//     orientation : {
//       x : 0.0, 
//       y : 0.0, 
//       z : 0.0, 
//       w : 0.0
//     }}
  
// });
// testStr6_start.publish(str);





//   param_value_human.set(false);
 
// }

