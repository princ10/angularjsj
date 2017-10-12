<<<<<<< HEAD
var App = angular.module("myApp" , []); 

App.controller("myCtr" , ["$scope" ,"$http" , function($scope , $http){
  $http.get("js/data.json").then(function(item){
      $scope.players = item.data;
  });
   
}]);
=======
/*var app = angular.module("myapp",[]);
app.controller("myctr",function($scope){
        $scope.name = "angularjs";
});*/

var app = angular.module("myapp",[]);
app.controller("myctr",function($scope){
     $scope.people = [{
           "name":"goivnd",
           "compeny":"jspider",
           "designation":"developer",
           "salary":"100"
     },
     {
        "name":"ram",
        "compeny":"qspider",
        "designation":"developer",
        "salary":"200"
     },
     {
        "name":"shashi",
        "compeny":"jspider",
        "designation":"developer",
        "salary":"400"   
     }
    ];
});
>>>>>>> 43a3738dc2cb00ace77aacf7c31527ddd441ce2d
