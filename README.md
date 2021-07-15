Terminal 1: (Robot End)

singularity shell melodic.img

(inside the container)

Singularity> source /opt/ros/melodic/setup.bash

Singularity> cd catkin_ws_check/

Singularity> catkin_make

Singularity> source devel/setup.bash

Singularity> export ROS_MASTER_URI=http://bashira.rd.unr.edu:1234/

Singularity> roslaunch rosbridge_server rosbridge_websocket.launch

Terminal 2: (Human End)

singularity shell melodic.img

(inside the container)

Singularity> source /opt/ros/melodic/setup.bash

Singularity> cd catkin_ws_check/

Singularity> source devel/setup.bash

Singularity> export ROS_MASTER_URI=http://bashira.rd.unr.edu:11311/

Singularity> roslaunch rosbridge_server rosbridge_websocket.launch port:=9091


Terminal 3: (Human End)

singularity shell melodic.img

(inside the container)

Singularity> source /opt/ros/melodic/setup.bash

Singularity> cd catkin_ws_check/

Singularity> source devel/setup.bash

Singularity> export ROS_MASTER_URI=http://bashira.rd.unr.edu:11311/

Singularity> rosrun tf2_web_republisher tf2_web_republisher


Terminal 4: (Human End)

singularity shell melodic.img

(inside the container)

Singularity> source /opt/ros/melodic/setup.bash

Singularity> cd catkin_ws_check/

Singularity> source devel/setup.bash

Singularity> export ROS_MASTER_URI=http://bashira.rd.unr.edu:11311/

Singularity> cd ros_webpage/

singularity> python3 -m http.server 8090


Then in the browser, http://melodic.cse.unr.edu/
 
