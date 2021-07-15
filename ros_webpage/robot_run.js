  // Connecting to ROS
  // -----------------


  var ros2 = new ROSLIB.Ros({
    url : 'ws://134.197.40.54:9090'
  });

  ros2.on('connection', function() {
    console.log('Connected to websocket server.');
  });

  ros2.on('error', function(error) {
    console.log('Error connecting to websocket server: ', error);
  });

  ros2.on('close', function() {
    console.log('Connection to websocket server closed.');
  });




  var coll_val = new ROSLIB.Param({
    ros : ros2,
    name : 'Collision'
  });

  coll_val.set(false);



  var param_value_robot = new ROSLIB.Param({
    ros : ros2,
    name : '/game_mode_param'
  });

  var user_value_robot = new ROSLIB.Param({
    ros : ros2,
    name : '/user_param'
  });
 
function game_robot(){


  var testStr1 = new ROSLIB.Topic({
    ros : ros2,
    name : '/launch_1',
    messageType : 'std_msgs/String'
  });
var str = new ROSLIB.Message({
  data : 'table_task_sim table_task_sim.launch'
});

   // And finally, publish.
   testStr1.publish(str);



  var testStr2 = new ROSLIB.Topic({
    ros : ros2,
    name : '/launch_2',
    messageType : 'std_msgs/String'
  });
var str = new ROSLIB.Message({
  data : 'table_task_sim human_multi_demo_baxter.launch'
});

   // And finally, publish.
   testStr2.publish(str);



  var testStr3 = new ROSLIB.Topic({
    ros : ros2,
    name : '/launch_3',
    messageType : 'std_msgs/String'
  });
var str = new ROSLIB.Message({
  data : 'unr_object_manipulation peer_connection_visionManip_baxter.launch'
});

   // And finally, publish.
   testStr3.publish(str);

// document.getElementById("demo").innerHTML = "Hello World";

  var testStr4 = new ROSLIB.Topic({
    ros : ros2,
    name : '/launch_4',
    messageType : 'std_msgs/String'
  });
var str = new ROSLIB.Message({
  data : 'remote_mutex table_setting_mutex_baxter.launch'
});

   // And finally, publish.
   testStr4.publish(str);
}









 



