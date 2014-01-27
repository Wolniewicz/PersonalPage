$(document).ready(function(){

  $("#up").click(function(){
  var fontSize = parseInt($("p").css("font-size"));
    $("p").css("font-size", fontSize+2+"px");
  });
  $("#down").click(function(){
  var fontSize = parseInt($("p").css("font-size"));
    $("p").css("font-size", fontSize-2+"px");
  });

  $("#bb").click(function(){
    $("body").css("background-color","black");
  });
  $("#br").click(function(){
    $("body").css("background-color","red");
  });
  $("#by").click(function(){
    $("body").css("background-color","yellow");
  });


  $("#tb").click(function(){
    $(".fruit").css("color","black");
  });
  $("#tr").click(function(){
    $(".fruit").css("color","red");
  });
  $("#ty").click(function(){
    $(".fruit").css("color","yellow");
  });
});