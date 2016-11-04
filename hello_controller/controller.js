var app= angular.module("MyFirstApp",[]);
app.controller("FirstController",function($scope){
  $scope.name = "francisco";
  $scope.comentarios = [
    {
        comentario: "Es mi primer comentario",
        username: "friverosy"
    },
    {
      comentario: "Es mi segundo comentario",
      username: "user2"
    }
  ];
});
