
  // Connecting to ROS
  // -----------------
  var ros = new ROSLIB.Ros({
    url : 'ws://134.197.40.54:9091'
  });

  ros.on('connection', function() {
    console.log('Connected to websocket server.');
  });

  ros.on('error', function(error) {
    console.log('Error connecting to websocket server: ', error);
  });

  ros.on('close', function() {
    console.log('Connection to websocket server closed.');
  });


  var coll_val = new ROSLIB.Param({
    ros : ros,
    name : 'Collision'
  });

  coll_val.set(false);

  var param_value_human = new ROSLIB.Param({
    ros : ros,
    name : '/game_mode_param'
  });
  var user_value_human = new ROSLIB.Param({
    ros : ros,
    name : '/user_param'
  });

function game_human(){



  var testStr1 = new ROSLIB.Topic({
    ros : ros,
    name : '/launch_1',
    messageType : 'std_msgs/String'
  });
var str = new ROSLIB.Message({
  data : 'table_task_sim table_task_sim.launch'
});

   // And finally, publish.
   testStr1.publish(str);


  var testStr2 = new ROSLIB.Topic({
    ros : ros,
    name : '/launch_2',
    messageType : 'std_msgs/String'
  });
var str = new ROSLIB.Message({
  data : 'table_task_sim human_multi_demo.launch'
});

   // And finally, publish.
   testStr2.publish(str);



  var testStr3 = new ROSLIB.Topic({
    ros : ros,
    name : '/launch_3',
    messageType : 'std_msgs/String'
  });
var str = new ROSLIB.Message({
  data : 'unr_object_manipulation peer_connection_visionManip.launch'
});

   // And finally, publish.
   testStr3.publish(str);



  var testStr4 = new ROSLIB.Topic({
    ros : ros,
    name : '/launch_4',
    messageType : 'std_msgs/String'
  });
var str = new ROSLIB.Message({
  data : 'remote_mutex table_setting_mutex.launch'
});

   // And finally, publish.
   testStr4.publish(str);

}



