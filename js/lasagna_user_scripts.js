/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  go back */
    $(document).on("click", ".uib_w_2", function(evt)
    {
       window.history.back();  
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
