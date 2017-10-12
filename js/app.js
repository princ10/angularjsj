var App = angular.module("myApp" , []); 

App.controller("myCtr" , ["$scope" ,"$http" , function($scope , $http){
  $http.get("js/data.json").then(function(item){
      $scope.players = item.data;
  });
   
}]);