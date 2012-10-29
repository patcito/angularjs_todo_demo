'use strict';

todoApp.controller('MainCtrl', function($scope) {
  $scope.name = "Pat";

  $scope.minions = ["Igor", "Misko", "Vojta"];

  $scope.todos = [
    {text: "introduce AngularJS", done: true, minion: 'Igor'},
    {text: "build a todo app", done: false, minion: 'Vojta'},
    {text: "show components", done: false, minion: 'Misko'},
  ]

  $scope.addTodo = function(){
    console.log($scope)
    $scope.todos.push({text: $scope.newTodo.text, 
                      done: false,
                      minion: $scope.newTodo.minion});
    $scope.newTodo = '';
  }
  $scope.remaining = function() {
    return $scope.todos.reduce(function(count, todo) {
      return todo.done ? count : count + 1
    }, 0);
  };
 
  $scope.archive = function() {
    $scope.todos = $scope.todos.filter(function(todo){
      return !todo.done
    })
  };
});
