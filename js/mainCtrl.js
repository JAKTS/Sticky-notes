angular.module('sticky-Notes').controller('mainCtrl',mainCtrl);


function mainCtrl($scope,service){

$scope.saveNote = function(note){
  $scope.note = {};
    service.addNote(note);
    getNotes();
};

function getNotes(){
  service.getNotes().then(function(response){
    $scope.notes = response;
  });
}

getNotes();


}
