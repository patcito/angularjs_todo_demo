'use strict';

todoApp.controller('MainCtrl', function($scope) {
  $scope.todos = [
    {text: "introduce AngularJS", done: true, minion: 'Igor'},
    {text: "build the todo app", done: false, minion: 'Vojta'},
    {text: "show up components", done: false, minion: 'Misko'},
  ]

  $scope.addTodo = function() {
    $scope.todos.push({
      text: $scope.newTodo.text,
      done: false,
      minion: $scope.newTodo.minion                                   
    })
    $scope.newTodo.text = '';
  }
  //$scope.minions = ["Igor", "Misko", "Vojta"];

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
