//The action to call the parse service should be here.

var app = angular.module('myApp.services', ['ngRoute','ngResource']);
//app.factory('ParseData',['', []]);
app.factory('Blog',[ ,function($http){
var reqHeaders = {
     "X-Parse-Application-Id": "NRdis21qc6R0v7YxohvffVoUfaslCLkD29tNcVIf",
     "X-Parse-REST-API-Key": "m886VcoixE7aRXEKkudmjnRzKNz25QWkprhybLW4",
     "Content-Type": "application/json"
};

var ParseFactory ={};

ParseFactory.getItems = function() {
    $http({method : 'GET', url : '', headers:
        {   }})
             .success(function(data, status) {
                 return data;
             })
             .error(function(data, status) {
                 alert("Error");
             });
           };
           return ParseFactory;
}]);


//When it comes time to start making REST requests to Parse,
// you will need to configure your outbound POST and GET requests to contain these headers:
// var reqHeaders = {
// ,
//     "Content-Type": "application/json"
// };
