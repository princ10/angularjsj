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