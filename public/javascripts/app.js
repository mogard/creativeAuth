angular.module("comic",[])
.controller("MainCtrl",[
  '$scope','$http',
  function($scope,$http){
 // var ref = firebase.database().ref.child("comics");
 // $scope.comics = $firebaseArray(ref);
  $scope.currentComic; 
  $scope.favorites = [];
  
    var num = Math.floor(Math.random() * 1927) + 1;
    var myurl= "http://dynamic.xkcd.com/api-0/jsonp/comic/" + num;
    console.log(myurl);
    $.ajax({
    url : myurl,
    crossDomain: true,
    dataType : "jsonp",
    success : function(parsed_json) {
      console.log(parsed_json);
     // var pic = JSON.stringify(parsed_json["img"]);
     // var title = JSON.stringify(parsed_json["title"]);
      $("#image").attr("src",parsed_json["img"]);
      $("#title").html(parsed_json["title"]);
    }
    }); 
 // $scope.getComic();

  $scope.addComic = function(){
     var comic = {"img": $("#image").prop("src"), "title": $("title").val()};
     $scope.favorites.push(comic);
     var num = Math.floor(Math.random() * 1927) + 1;
    var myurl= "http://dynamic.xkcd.com/api-0/jsonp/comic/" + num;
    console.log(myurl);
    $.ajax({
    url : myurl,
    crossDomain: true,
    dataType : "jsonp",
    success : function(parsed_json) {
      console.log(parsed_json);
     // var pic = JSON.stringify(parsed_json["img"]);
     // var title = JSON.stringify(parsed_json["title"]);
      $("#image").attr("src",parsed_json["img"]);
      $("#title").html(parsed_json["title"]);
    }

  });
  }
  $scope.newComic = function(){
     var num = Math.floor(Math.random() * 1927) + 1;
    var myurl= "http://dynamic.xkcd.com/api-0/jsonp/comic/" + num;
    console.log(myurl);
    $.ajax({
    url : myurl,
    crossDomain: true,
    dataType : "jsonp",
    success : function(parsed_json) {
      console.log(parsed_json);
     // var pic = JSON.stringify(parsed_json["img"]);
     // var title = JSON.stringify(parsed_json["title"]);
      $("#image").attr("src",parsed_json["img"]);
      $("#title").html(parsed_json["title"]);
    }

  }); 

  }

  }

]);
