(function () {
angular.module ("LunchCheck",[])
.controller("LunchCheckController",LunchCheckController);

LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope)
{

$scope.check=function(){
if($scope.LunchItem != null && $scope.LunchItem != "")
{
var arrayOfStrings = $scope.LunchItem.split(',');

$scope.message=function(){
var x="Too Much!";
var y="Enjoy!";
if(arrayOfStrings.length > 3)
return x  ;
else 
return y;
}

}else
{
$scope.message=function()
{
return "Please enter data first";
}

}
}}
})();