app.controller("MainController", function($scope, GadoServiceAPI){

  GadoServiceAPI.consultaTodosGados({ codigo: 0 })
    .then(function(res){
      console.log(res);
    })
    .catch(function(err,res){
      console.log(err,res);
    });

});
