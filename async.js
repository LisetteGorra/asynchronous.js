window.onload = function(){

    $.ajax({
        type: "GET", 
        url: "data/tweets.json",
        success: function(data){
            console.log(data);
     $.ajax({
        type: "GET", 
        url: "data/friends.json",
        success: function(data){
            console.log(data);
           
         $.ajax({
        type: "GET", 
        url: "data/videos.json",
        success: function(data){
            console.log(data);
            
            },
            
        error: function(jqXHR, textStatus, error){
        console.log(error);
      }
    });   
 },
            
        error: function(jqXHR, textStatus, error){
        console.log(error);
      }
    });
  },
            
        error: function(jqXHR, textStatus, error){
        console.log(error);
      }
   });
};








//     function cb(data) {
//         console.log(data);
//     }
//     $.get("data/tweets.json", cb);
//     console.log("test");
// };




    // function callback(val){
    //     console.log(val);
    // }
    
    // var fruits = ["banana", "apple", "pineapple"];
    // fruits.forEach(function(){
    //     console.log.log("done");
    // });
    
    



//     var http = new XMLHttpRequest();
    
//     http.onreadystatechange = function() {
//         if(http.readyState == 4 && http.status == 200){
//           // console.log(JSON.parse(http.response));
//         }
//     };
    
//     http.open("GET", "data/tweets.json", true);
//     http.send();
//   // console.log("test");
   
//   //jquery method
//   $.get("data/tweets.json", function(data){
//       console.log(data);
//   });
//   console.log(test);
   
// }; 
