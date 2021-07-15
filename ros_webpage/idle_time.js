var active_check;
function resetTimer() {
    var user_param_mode = new ROSLIB.Param({
        ros : ros,
        name :  '/user_param'
    });
    user_param_mode.get(function(value) {
    user_val = value;

    });
    console.log("in rest"+active_check);
        
          if(active_check ){
            /* Hide the timer text */
            // document.querySelector(".timertext")
            //         .style.display = 'none';
  
            /* Clear the previous interval */
            clearInterval(timer);
  
            /* Reset the seconds of the timer */
            currSeconds = 0;
        
  
            /* Set a new interval */
            timer = 
                setInterval(startIdleTimer, 1000);
              }
        }
function startIdleTimer() {
    var user_param_mode = new ROSLIB.Param({
        ros : ros,
        name :  '/user_param'
    });
    user_param_mode.get(function(value) {
    user_val = value;

    });

              
            /* Increment the
                timer seconds */
    if(active_check){
        currSeconds++;
        // if(currSeconds==300)
		      //   alert("Your session is going to be expired in one minute if you keep remain idle!");
        if(currSeconds==600){
            user_value_robot.set(false);
            user_value_human.set(false);
            alert("Your session is expired. Please start from the beginning.")
              // alert("you are idle for" + currSeconds + "s. Please start from the beginning.");

            window.location.href = 'index.html';

              // if(confirm("you are idle for" + currSeconds + "seconds. If you want to continue please ")){
              //   resetTimer();
              // }
        }
              
               /* Set the timer text
                to the new value */
        // document.querySelector(".secs").textContent = currSeconds;
  
            /* Display the timer text */
        // document.querySelector(".timertext").style.display = 'block';
        }
}
