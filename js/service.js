angular.module('sticky-Notes').service('service', service);

function service($http, $q){


  this.addNote = function(note){
  var  existingEntries = JSON.parse(localStorage.getItem('notes'));
    if(!existingEntries) {
      existingEntries = [];
    }
    localStorage.setItem('entry', JSON.stringify(note));
    existingEntries.push(note);
    localStorage.setItem('notes',JSON.stringify(note));
  };

  this.getNotes = function(){
    var deferred = $q.defer();
    deferred.resolve(JSON.parse(localStorage.getItem('notes')));

    return deferred.promise;
  };

}
