function letsstart(){

  var ros2 = new ROSLIB.Ros({
    url : 'ws://134.197.40.54:9090'
  });
  var ros = new ROSLIB.Ros({
    url : 'ws://134.197.40.54:9091'
  });
//   ros2.on('connection', function() {
//  //   console.log('Connected to websocket server after pressing ready.');
// alert("Connected to websocket server after pressing ready.");
//   });

//   ros2.on('error', function(error) {
//     console.log('Error connecting to websocket server: after pressing ready', error);
// alert('Error connecting to websocket server: after pressing ready');

//   });

//   ros2.on('close', function() {
//     console.log('Connection to websocket server closed.after pressing ready');
//   });
//   ros.on('connection', function() {
//  //   console.log('Connected to websocket server after pressing ready.');
// alert('Connected to websocket server after pressing ready.');
//   });

//   ros.on('error', function(error) {
//     console.log('Error connecting to websocket server: after pressing ready', error);
// alert('Error connecting to websocket server: after pressing ready');
//   });

//   ros.on('close', function() {
//     console.log('Connection to websocket server closed.after pressing ready');
//   });
 
// resetTimer();


  var testStr1_start = new ROSLIB.Topic({
    ros : ros2,
    name : '/THEN_0_1_009_parent',
    messageType : 'robotics_task_tree_msgs/ControlMessage'
  });

  var str = new ROSLIB.Message({
    sender : {
      type : 0, 
      robot : 0, 
      node : 0
    },
    type: 0,
    activation_level : 10000000000.0,
    activation_potential : 0.0,
    done : false,
    active : false,
    highest : {
      type : 0, 
      robot : 0, 
      node : 0
    },
    parent_type : 0,
    collision : false,
    peerPlacing : false,
    selfPlacing : false,
    peerUndone : false,
    simstate_obj_name : '',
    simstate_obj_pose :{
      position : {
        x : 0.0, 
        y : 0.0, 
        z : 0.0
      },
      orientation : {
        x : 0.0, 
        y : 0.0, 
        z : 0.0, 
        w : 0.0
      }},
    simstate_robot_id : 0,
    simstate_robot_pose :{
      position : {
        x : 0.0, 
        y : 0.0, 
        z : 0.0
      },
      orientation : {
        x : 0.0, 
        y : 0.0, 
        z : 0.0, 
        w : 0.0
    }},
    simstate_robot_goal :{
      position : {
        x : 0.0, 
        y : 0.0, 
        z : 0.0
      },
      orientation : {
        x : 0.0, 
        y : 0.0, 
        z : 0.0, 
        w : 0.0
      }}

  });

   // And finally, publish.
  testStr1_start.publish(str);


    

  var testStr6_start = new ROSLIB.Topic({
    ros : ros,
    name : '/THEN_0_0_001_parent',
    messageType : 'robotics_task_tree_msgs/ControlMessage'
  });
var str = new ROSLIB.Message({
sender : {
    type : 0, 
    robot : 0, 
    node : 0
  },
  type: 0,
  activation_level : 10000000000.0,
  activation_potential : 0.0,
  done : false,
  active : false,
  highest : {
    type : 0, 
    robot : 0, 
    node : 0
  },
  parent_type : 0,
  collision : false,
  peerPlacing : false,
  selfPlacing : false,
  peerUndone : false,
  simstate_obj_name : '',
  simstate_obj_pose :{
    position : {
      x : 0.0, 
      y : 0.0, 
      z : 0.0
    },
    orientation : {
      x : 0.0, 
      y : 0.0, 
      z : 0.0, 
      w : 0.0
    }},
  simstate_robot_id : 0,
  simstate_robot_pose :{
    position : {
      x : 0.0, 
      y : 0.0, 
      z : 0.0
    },
    orientation : {
      x : 0.0, 
      y : 0.0, 
      z : 0.0, 
      w : 0.0
    }},
  simstate_robot_goal :{
    position : {
      x : 0.0, 
      y : 0.0, 
      z : 0.0
    },
    orientation : {
      x : 0.0, 
      y : 0.0, 
      z : 0.0, 
      w : 0.0
    }}
  
});
testStr6_start.publish(str);
  
}
