function letssee(){
start = new Date().getTime();

  var ros = new ROSLIB.Ros({
    url : 'ws://134.197.40.54:9091'
  });
   var human = new ROSLIB.Topic({
    ros : ros,
    name : '/THEN_0_0_001_parent',
    messageType : 'robotics_task_tree_msgs/ControlMessage'
  });
  var human_pub = new ROSLIB.Message({
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
  robotPlacing : false,
  humanPlacing : false,
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
human.publish(human_pub);
  var ros2 = new ROSLIB.Ros({
    url : 'ws://134.197.40.54:9090'
  });

 var robot = new ROSLIB.Topic({
    ros : ros2,
    name : '/THEN_0_1_009_parent',
    messageType : 'robotics_task_tree_msgs/ControlMessage'
  });
  var robot_pub = new ROSLIB.Message({
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
  robotPlacing : false,
  humanPlacing : false,
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
robot.publish(robot_pub);
}
