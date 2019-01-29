window.onload = function(){
    
    function handleError(jqXHR, textStatus, error){
        console.log(error);
    }
  
  $.ajax({
        type: "GET", 
        url: "data/tweets.json",
        success: cbTweets, 
        error: handleError
   });
   
   function cbTweets(data){
            console.log(data);
            
     $.ajax({
        type: "GET", 
        url: "data/friends.json",
        success: cbFriends,
        error: handleError
    });
    
  }
  
  function cbFriends(data){
            console.log(data);
           
         $.ajax({
        type: "GET", 
        url: "data/videos.json",
        success: function(data){
            console.log(data);
            
     },
            
        error: handleError
      
    });   
   }
};

 
//     function cb(data) {
//         console.log(data);
//     }
//     $.get("data/tweets.json", cb);
//     console.log("test");
// };




//     function callback(val){
//         console.log(val);
//     }
    
//     var fruits = ["banana", "apple", "pineapple"];
//     fruits.forEach(function(){
//         console.log.log("done");
//     });
    
    



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
