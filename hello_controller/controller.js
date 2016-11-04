var app= angular.module("MyFirstApp",[]);
app.controller("FirstController",["$scope",function($scope){
  $scope.name = "francisco";
  $scope.nuevoComentario={};
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

  // agregando métodos
  $scope.agregarComentario= function(){
    $scope.comentarios.push($scope.nuevoComentario);
    $scope.nuevoComentario={};
  }
}]);
