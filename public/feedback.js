function myFunction(){
  var text=$("#txta").val().trim().length;
  if(text<1){
    $("#errorMessage").text("Text eingeben");
    $("#errorMessage").css("color","red");
  }
  else{  
      $("#feedback").html("<h1><b>THANKS FOR YOUR FEEDBACK</b></h1>");
      $("#feedback").fadeOut(1000,function(){
          $("section.cta").remove();  
      });             
  }        
} 
/*/*Die Function myFuntion3() nimmt was der Benutzer im Form eingegeben hat  
und  gibt die dazu gehörige Nachricht zurück.Sie prüft zuerst,ob 
der Benutzer etwas güldiges eingeben hat.*/
      function myFunction3(){
        var choosen=$("#examine").val();
      
        if(!$.isNumeric(choosen)){
            $("#mt").text("nur Zahlen sind zulässig");
            $("#reasonForChoosen").replaceWith("");

        }
            if(choosen>5){
              $("#mt").text("nur Zahlen von 1 bis 5 sind zulässig");  
            }
            else{
        $("#reasonForChoosen").text("Gibt es einen bestimmen Grund,warum  Sie uns mit " 
        + choosen + " bewertet haben? Im Feld Rückmeldung können Sie die Begründung geben " );
      }
  
  }
  /* Für die Eingabe des Sessioncodes wird myFunction2 implimentiert  */
      function myFunction2(){
      var code = $("#sCode").val();
      if(code.length!=8||!$.isNumeric(code)){
          $("#sc").text("Code muss genau 8 Ziffen sein");
      }
      else{
      
         window.open("https://frag.jetzt/participant/room/"+ code);
      }
      
         
      
    }