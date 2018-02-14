
$(document).ready(function() {
  
        var myurl = "https://dog.ceo/api/breeds/list/all";
        $.ajax({
   url : myurl,
   dataType : "json",
   success : function(json) {
    console.log(json);   
       var dogs = [json.message.length];
       var result = "";
       console.log(json.message);
       dogs = Object.getOwnPropertyNames(json.message);
       for(var i = 0; i < 80; i++){
           console.log("hello!");
               
           result += "<option value=\"";
           result += dogs[i];
           result += "\">";
           result += dogs[i];
           result += "</option>\n";
       }
      
       
       $("#dropdown-menu").html(result);
     console.log(result);
       
   }
  });
});
   // });